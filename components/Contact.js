'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

const stripItems = ["LET'S TALK", '✦', 'HAVE AN IDEA?', '✦', 'OPEN TO WORK', '✦', 'FREELANCE', '✦'];

const socialHandles = {
  GitHub: '@AryanSinghh07',
  LinkedIn: '@thearyansingh07',
  'X / Twitter': '@the_aryansingh_',
};

export default function Contact() {
  const rootRef = useRef(null);
  const magnetRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-line-inner', {
        yPercent: 115,
        stagger: 0.1,
        duration: 1.1,
        ease: 'power4.out',
        scrollTrigger: { trigger: '.contact-title', start: 'top 82%', once: true },
      });
      gsap.from('.contact-fade', {
        opacity: 0,
        y: 30,
        stagger: 0.07,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: { trigger: '.contact-inner', start: 'top 70%', once: true },
      });
      gsap.from('.social-row', {
        opacity: 0,
        y: 40,
        stagger: 0.09,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: { trigger: '.social-rows', start: 'top 85%', once: true },
      });
      gsap.from('.footer-watermark', {
        yPercent: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.footer-end', start: 'top 92%', once: true },
      });
    }, rootRef);

    // magnetic email button
    const btn = magnetRef.current;
    let cleanupMove = () => {};
    if (btn && !window.matchMedia('(pointer: coarse)').matches) {
      const xTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3.out' });
      const yTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3.out' });
      const move = (e) => {
        const r = btn.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        if (Math.hypot(dx, dy) < 170) {
          xTo(dx * 0.35);
          yTo(dy * 0.35);
        } else {
          xTo(0);
          yTo(0);
        }
      };
      window.addEventListener('mousemove', move);
      cleanupMove = () => window.removeEventListener('mousemove', move);
    }

    return () => {
      cleanupMove();
      ctx.revert();
    };
  }, []);

  const year = new Date().getFullYear();
  const strip = stripItems.map((s, i) => (
    <span className="contact-strip-item" key={i}>
      {s}
    </span>
  ));

  return (
    <footer className="contact" id="contact" ref={rootRef}>
      {/* scrolling accent strip */}
      <div className="contact-strip" aria-hidden="true">
        <div className="contact-strip-track">
          <div className="contact-strip-row">{strip}</div>
          <div className="contact-strip-row">{strip}</div>
        </div>
      </div>

      <div className="contact-inner">
        <span className="section-label contact-fade">07 — Contact</span>

        <h2 className="contact-title" aria-label="Got an idea? Let's build it">
          <span className="contact-line">
            <span className="contact-line-inner">GOT AN IDEA?</span>
          </span>
          <span className="contact-line">
            <span className="contact-line-inner contact-line-inner--accent">
              LET&apos;S BUILD IT
            </span>
          </span>
        </h2>

        <p className="contact-blurb contact-fade">
          Open to freelance, collaborations, and full-time opportunities. Drop a message and
          I&apos;ll get back to you.
        </p>

        <a
          className="magnet-btn contact-fade"
          href={`mailto:${profile.email}`}
          ref={magnetRef}
          data-cursor
        >
          <span>
            {profile.email} <span className="arr">↗</span>
          </span>
        </a>

        <div className="social-rows">
          {profile.socials.map((s) => (
            <a
              className="social-row"
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-row-name">{s.label}</span>
              <span className="social-row-handle">{socialHandles[s.label]}</span>
              <span className="social-row-arrow">↗</span>
            </a>
          ))}
        </div>

        <div className="contact-meta">
          <div className="contact-meta-col">
            <span className="contact-meta-label">Location</span>
            <span>{profile.location}</span>
          </div>
          <div className="contact-meta-col">
            <span className="contact-meta-label">Phone</span>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
          </div>
          <div className="contact-meta-col">
            <span className="contact-meta-label">Resume</span>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer">
              Download PDF <span className="arr">↗</span>
            </a>
          </div>
          <div className="contact-meta-col">
            <span className="contact-meta-label">Status</span>
            <span>Open to opportunities</span>
          </div>
        </div>
      </div>

      <div className="footer-end">
        <span className="footer-watermark">ARYAN SINGH</span>
        <div className="footer-bar">
          <span>© {year} Aryan Singh — All rights reserved.</span>
          <button
            className="footer-top"
            onClick={() => window.__lenis?.scrollTo(0, { duration: 1.6 })}
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
