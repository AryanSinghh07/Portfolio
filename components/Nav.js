'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { profile } from '@/lib/data';

const links = [
  { label: 'About', hash: '#about' },
  { label: 'Work', hash: '#work' },
  { label: 'Achievements', hash: '#achievements' },
  { label: 'Contact', hash: '#contact' },
];

export default function Nav() {
  const [time, setTime] = useState('');
  const [pill, setPill] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
          timeZone: 'Asia/Kolkata',
        })
      );
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  // pill after leaving the top; hide while actively scrolling, reappear on stop
  useEffect(() => {
    let timer;
    const onScroll = () => {
      const y = window.scrollY;
      setPill(y > 90);
      if (y > 160) {
        setHidden(true);
        clearTimeout(timer);
        timer = setTimeout(() => setHidden(false), 260);
      } else {
        clearTimeout(timer);
        setHidden(false);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // lock page scroll while the mobile menu is open
  useEffect(() => {
    if (open) {
      window.__lenis?.stop();
      document.documentElement.style.overflow = 'hidden';
    } else {
      window.__lenis?.start();
      document.documentElement.style.overflow = '';
    }
    return () => {
      window.__lenis?.start();
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  // on the home page smooth-scroll to the anchor; on other pages navigate home
  const onAnchor = (e, hash) => {
    setOpen(false);
    if (pathname === '/') {
      e.preventDefault();
      setTimeout(() => window.__lenis?.scrollTo(hash, { duration: 1.4 }), 60);
    }
  };

  const onLogo = (e) => {
    setOpen(false);
    if (pathname === '/') {
      e.preventDefault();
      window.__lenis?.scrollTo(0, { duration: 1.4 });
    }
  };

  return (
    <>
      <header
        className={`nav ${pill ? 'nav--pill' : ''} ${hidden && !open ? 'nav--hidden' : ''} ${
          open ? 'nav--open' : ''
        }`}
      >
        <Link className="nav-logo" href="/" onClick={onLogo} aria-label="Home">
          <img src="/aryan-logo.png" alt="Aryan Singh" className="nav-logo-img" />
        </Link>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.label} href={`/${l.hash}`} onClick={(e) => onAnchor(e, l.hash)}>
              {l.label}
            </a>
          ))}
          <Link href="/work">All Work</Link>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </nav>
        <div className="nav-right">
          <div className="nav-meta">
            <span className="nav-dot" />
            {profile.location} — {time} IST
          </div>
          <button
            className={`nav-burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* mobile full-screen menu */}
      <div className={`mmenu ${open ? 'mmenu--open' : ''}`} aria-hidden={!open}>
        <nav className="mmenu-links">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={`/${l.hash}`}
              onClick={(e) => onAnchor(e, l.hash)}
              style={{ transitionDelay: open ? `${0.15 + i * 0.06}s` : '0s' }}
            >
              <span className="mmenu-index">0{i + 1}</span> {l.label}
            </a>
          ))}
          <Link
            href="/work"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? '0.39s' : '0s' }}
          >
            <span className="mmenu-index">05</span> All Work
          </Link>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? '0.45s' : '0s' }}
          >
            <span className="mmenu-index">06</span> Resume
          </a>
        </nav>
        <div className="mmenu-foot">
          <a href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>
            {profile.email}
          </a>
          <div className="mmenu-socials">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
