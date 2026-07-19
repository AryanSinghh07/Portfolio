'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { profile, stats } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function About() {
  const rootRef = useRef(null);

  useEffect(() => {
    let ctx;
    document.fonts.ready.then(() => {
      ctx = gsap.context(() => {
        // line-by-line reveal of bio paragraphs
        gsap.utils.toArray('.about-para').forEach((para) => {
          const split = new SplitText(para, { type: 'lines', linesClass: 'split-line' });
          split.lines.forEach((line) => {
            const wrap = document.createElement('div');
            wrap.className = 'split-mask';
            line.parentNode.insertBefore(wrap, line);
            wrap.appendChild(line);
          });
          gsap.from(split.lines, {
            yPercent: 110,
            duration: 1,
            stagger: 0.07,
            ease: 'power3.out',
            scrollTrigger: { trigger: para, start: 'top 82%' },
          });
        });

        // section label
        gsap.from('.about-label', {
          opacity: 0,
          y: 24,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: { trigger: rootRef.current, start: 'top 80%', once: true },
        });

        // stat counters
        gsap.utils.toArray('.stat-value').forEach((el) => {
          const target = Number(el.dataset.value);
          const obj = { v: 0 };
          gsap.to(obj, {
            v: target,
            duration: 1.6,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
            onUpdate: () => {
              el.firstChild.textContent = Math.round(obj.v).toLocaleString('en-IN');
            },
          });
        });

        gsap.from('.stat', {
          opacity: 0,
          y: 40,
          stagger: 0.1,
          duration: 0.9,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: { trigger: '.about-stats', start: 'top 90%', once: true },
        });
      }, rootRef);
    });
    return () => ctx?.revert();
  }, []);

  return (
    <section className="about section" id="about" ref={rootRef}>
      <div className="section-head">
        <span className="section-label about-label">01 — About</span>
        <h2 className="section-title about-label">
          Behind <span className="ol">the</span> <em>build</em>
        </h2>
      </div>
      <div className="about-body">
        <p className="about-para about-para--lead">{profile.bio[0]}</p>
        <p className="about-para">{profile.bio[1]}</p>
      </div>
      <div className="about-stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-value" data-value={s.value}>
              <span>0</span>
              {s.suffix}
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
