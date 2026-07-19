'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { achievements } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.ach-row').forEach((row) => {
        gsap.from(row, {
          opacity: 0,
          y: 50,
          duration: 0.9,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: { trigger: row, start: 'top 92%', once: true },
        });
      });
      gsap.from('.ach-head > *', {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: { trigger: '.ach-head', start: 'top 85%', once: true },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="achievements section" id="achievements" ref={rootRef}>
      <div className="section-head ach-head">
        <span className="section-label">05 — Recognition</span>
        <h2 className="section-title">
          <span className="ol">Proof</span> of <em>work</em>
        </h2>
      </div>
      <div className="ach-list">
        {achievements.map((a, i) => (
          <div className="ach-row" key={a.title} data-cursor>
            <span className="ach-index">{String(i + 1).padStart(2, '0')}</span>
            <div className="ach-main">
              <h3 className="ach-title">{a.title}</h3>
              <p className="ach-desc">{a.description}</p>
            </div>
            <span className="ach-category">{a.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
