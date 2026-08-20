'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.skill-row').forEach((row) => {
        gsap.from(row, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: { trigger: row, start: 'top 92%', once: true },
        });
        gsap.from(row.querySelectorAll('.skill-chip'), {
          opacity: 0,
          y: 18,
          stagger: 0.03,
          duration: 0.6,
          ease: 'power2.out',
          clearProps: 'all',
          scrollTrigger: { trigger: row, start: 'top 90%', once: true },
        });
      });

      gsap.from('.skills-label', {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: { trigger: rootRef.current, start: 'top 80%', once: true },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="skills section" ref={rootRef}>
      <div className="section-head">
        <span className="section-label skills-label">03 — Arsenal</span>
        <h2 className="section-title skills-label">
          Stack <span className="ol">that</span> <em>ships</em>
        </h2>
      </div>
      <div className="skills-rows">
        {skills.map((group, i) => (
          <div className="skill-row" key={group.name} data-cursor>
            <div className="skill-row-head">
              <span className="skill-index">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="skill-name">{group.name}</h3>
            </div>
            <div className="skill-chips">
              {group.items.map((item) => (
                <span className="skill-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
