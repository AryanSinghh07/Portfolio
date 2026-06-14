import { useState, useEffect } from 'react';
import { ArrowUp, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: '/resume' },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/AryanSinghh07',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thearyansingh07/',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/the_aryansingh_',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <footer style={{ background: '#06060f', borderTop: '1px solid rgba(110,86,207,0.15)' }} className="relative overflow-hidden">

        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(124,58,237,0.6), rgba(167,139,250,0.4), transparent)' }} />

        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(110,86,207,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 relative z-10">

          {/* Main grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

            {/* Brand */}
            <div className="md:col-span-1">
              <div className="mb-4">
                <span className="text-2xl font-bold" style={{
                  background: 'linear-gradient(135deg, #c4b5fd, #818cf8, #a78bfa)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  Aryan Singh
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#475569' }}>
                Full Stack Developer & AI/ML Engineer building things that actually matter.
              </p>

              {/* Contact snippets */}
              <div className="flex flex-col gap-2.5">
                <a href="mailto:aryan.singhh04@gmail.com"
                  className="flex items-center gap-2.5 text-sm transition-colors duration-200"
                  style={{ color: '#64748b' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#a78bfa'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#64748b'}>
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  aryan.singhh04@gmail.com
                </a>
                <div className="flex items-center gap-2.5 text-sm" style={{ color: '#64748b' }}>
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  Noida, India
                </div>
              </div>
            </div>

            {/* Nav links */}
            <div>
              <h4 className="text-xs font-mono tracking-[0.18em] uppercase mb-5" style={{ color: '#a78bfa' }}>Navigation</h4>
              <ul className="flex flex-col gap-3">
                {navLinks.map(link => (
                  <li key={link.label}>
                    <a href={link.href}
                      className="text-sm flex items-center gap-2 group transition-colors duration-200"
                      style={{ color: '#64748b' }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#e2d9f3'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#64748b'}>
                      <span className="w-0 group-hover:w-4 h-px transition-all duration-300 shrink-0"
                        style={{ background: '#7c3aed' }} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials + availability */}
            <div>
              <h4 className="text-xs font-mono tracking-[0.18em] uppercase mb-5" style={{ color: '#a78bfa' }}>Connect</h4>

              <div className="flex gap-2.5 mb-8">
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                    style={{ background: 'rgba(110,86,207,0.1)', border: '1px solid rgba(110,86,207,0.2)', color: '#7c6fcd' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(110,86,207,0.22)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.5)';
                      (e.currentTarget as HTMLElement).style.color = '#c4b5fd';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(110,86,207,0.1)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(110,86,207,0.2)';
                      (e.currentTarget as HTMLElement).style.color = '#7c6fcd';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    }}>
                    {s.icon}
                  </a>
                ))}
              </div>

              {/* Availability badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full"
                style={{ background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.2)' }}>
                <span className="relative flex w-2 h-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                    style={{ background: '#4ade80' }} />
                  <span className="relative inline-flex rounded-full w-2 h-2" style={{ background: '#4ade80' }} />
                </span>
                <span className="text-xs font-mono" style={{ color: '#4ade80' }}>Open to opportunities</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px mb-8" style={{ background: 'rgba(110,86,207,0.1)' }} />

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs" style={{ color: '#334155' }}>
              © {year} Aryan Singh — All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 12, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.85 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed z-50 bottom-6 right-6 w-11 h-11 rounded-full flex items-center justify-center"
            style={{
              background: 'rgba(110,86,207,0.85)',
              border: '1.5px solid rgba(196,181,253,0.35)',
              boxShadow: '0 0 20px rgba(110,86,207,0.5)',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(110,86,207,0.75)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(110,86,207,0.5)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
