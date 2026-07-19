'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { education, certifications } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // cards enter one by one with a slight tilt
      gsap.from('.bg-card', {
        y: 110,
        opacity: 0,
        rotation: (i) => (i % 2 === 0 ? -3 : 3),
        transformOrigin: 'center bottom',
        stagger: 0.3,
        duration: 1.05,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: { trigger: '.bg-cards', start: 'top 85%', once: true },
      });

      // inner rows follow after their card lands
      gsap.from('.bg-card--dark .edu-item', {
        opacity: 0,
        y: 24,
        stagger: 0.12,
        duration: 0.7,
        delay: 0.35,
        ease: 'power2.out',
        clearProps: 'all',
        scrollTrigger: { trigger: '.bg-cards', start: 'top 85%', once: true },
      });
      gsap.from('.bg-card--accent li', {
        opacity: 0,
        x: -24,
        stagger: 0.09,
        duration: 0.6,
        delay: 0.7,
        ease: 'power2.out',
        clearProps: 'all',
        scrollTrigger: { trigger: '.bg-cards', start: 'top 85%', once: true },
      });
    }, rootRef);

    // magnetic hover: cards lean toward the cursor
    const cleanups = [];
    if (window.matchMedia('(pointer: fine)').matches) {
      rootRef.current.querySelectorAll('.bg-card').forEach((card) => {
        const xTo = gsap.quickTo(card, 'x', { duration: 0.5, ease: 'power3.out' });
        const yTo = gsap.quickTo(card, 'y', { duration: 0.5, ease: 'power3.out' });
        const rTo = gsap.quickTo(card, 'rotation', { duration: 0.6, ease: 'power3.out' });
        const move = (e) => {
          const r = card.getBoundingClientRect();
          const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
          const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
          xTo(dx * 16);
          yTo(dy * 12);
          rTo(dx * 0.8);
        };
        const leave = () => {
          xTo(0);
          yTo(0);
          rTo(0);
        };
        card.addEventListener('mousemove', move);
        card.addEventListener('mouseleave', leave);
        cleanups.push(() => {
          card.removeEventListener('mousemove', move);
          card.removeEventListener('mouseleave', leave);
        });
      });
    }

    return () => {
      cleanups.forEach((fn) => fn());
      ctx.revert();
    };
  }, []);

  return (
    <section className="education section" ref={rootRef}>
      <div className="section-head">
        <span className="section-label">06 — Background</span>
        <h2 className="section-title">
          Where I <span className="ol">come</span> <em>from</em>
        </h2>
      </div>

      <div className="bg-cards">
        <div className="bg-card bg-card--dark">
          <div className="bg-card-head">
            <h3 className="bg-card-title">Education</h3>
            <span className="bg-card-num">01</span>
          </div>
          {education.map((e) => (
            <div className="edu-item" key={e.degree}>
              <div className="edu-item-top">
                <h4>{e.degree}</h4>
                <span className="edu-period">{e.period}</span>
              </div>
              <p className="edu-inst">{e.institution}</p>
              <p className="edu-note">{e.note}</p>
            </div>
          ))}
        </div>

        <div className="bg-card bg-card--accent">
          <div className="bg-card-head">
            <h3 className="bg-card-title">Certifications</h3>
            <span className="bg-card-num">02</span>
          </div>
          <ul className="cert-list">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
