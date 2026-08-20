'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { achievements } from '@/lib/data';
import { CloseIcon, EyeIcon, ChevronIcon } from './Icons';

gsap.registerPlugin(ScrollTrigger);

const TILTS = [-6, 5, -4, 6, -5];

export default function Achievements() {
  const rootRef = useRef(null);
  const floatRef = useRef(null);
  const quickX = useRef(null);
  const quickY = useRef(null);
  const isFine = useRef(false);
  const [active, setActive] = useState(null);
  const [lightbox, setLightbox] = useState(null); // { achievement, index }

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

  useEffect(() => {
    isFine.current = window.matchMedia('(pointer: fine)').matches;
    if (!isFine.current || !floatRef.current) return;

    gsap.set(floatRef.current, { xPercent: -50, yPercent: -65 });
    quickX.current = gsap.quickTo(floatRef.current, 'x', { duration: 0.55, ease: 'power3' });
    quickY.current = gsap.quickTo(floatRef.current, 'y', { duration: 0.55, ease: 'power3' });

    const move = (e) => {
      quickX.current?.(e.clientX);
      quickY.current?.(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    if (!isFine.current || !floatRef.current) return;
    if (active) {
      gsap.timeline()
        .to(floatRef.current, { scale: 0.92, duration: 0.14, ease: 'power2.in' })
        .to(floatRef.current, {
          opacity: 1,
          scale: 1,
          rotate: TILTS[active.i % TILTS.length],
          duration: 0.55,
          ease: 'back.out(1.8)',
        });
    } else {
      gsap.to(floatRef.current, { opacity: 0, scale: 0.85, duration: 0.3, ease: 'power2.in' });
    }
  }, [active]);

  useEffect(() => {
    if (lightbox === null) return;
    const total = lightbox.achievement.images.length;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((l) => ({ ...l, index: (l.index + 1) % total }));
      if (e.key === 'ArrowLeft') setLightbox((l) => ({ ...l, index: (l.index - 1 + total) % total }));
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <section className="achievements section" id="achievements" ref={rootRef}>
      <div className="section-head ach-head">
        <span className="section-label">05 — Recognition</span>
        <h2 className="section-title">
          <span className="ol">Proof</span> of <em>work</em>
        </h2>
      </div>
      <div className="ach-list" onMouseLeave={() => setActive(null)}>
        {achievements.map((a, i) => (
          <div
            className="ach-row"
            key={a.title}
            data-cursor
            onMouseEnter={() => setActive({ ...a, i })}
            onClick={() => setLightbox({ achievement: a, index: 0 })}
          >
            <span className="ach-index">{String(i + 1).padStart(2, '0')}</span>
            <div className="ach-main">
              <h3 className="ach-title">{a.title}</h3>
              <p className="ach-desc">{a.description}</p>
            </div>
            <div className="ach-side">
              <span className="ach-category">{a.category}</span>
              <span className="ach-proof-hint">
                <EyeIcon /> View proof{a.images.length > 1 ? ` (${a.images.length})` : ''}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="ach-float" ref={floatRef} aria-hidden="true">
        {active && (
          <>
            <img className="ach-float-img" src={active.images[0]} alt="" />
            <span className="ach-float-label">{active.title}</span>
          </>
        )}
      </div>

      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.achievement.title} — proof`}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <CloseIcon />
          </button>

          {lightbox.achievement.images.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                const total = lightbox.achievement.images.length;
                setLightbox((l) => ({ ...l, index: (l.index - 1 + total) % total }));
              }}
              aria-label="Previous image"
            >
              <ChevronIcon />
            </button>
          )}

          <img
            className="lightbox-img"
            src={lightbox.achievement.images[lightbox.index]}
            alt={`${lightbox.achievement.title} — proof ${lightbox.index + 1}`}
            onClick={(e) => e.stopPropagation()}
          />

          {lightbox.achievement.images.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-nav--next"
              onClick={(e) => {
                e.stopPropagation();
                const total = lightbox.achievement.images.length;
                setLightbox((l) => ({ ...l, index: (l.index + 1) % total }));
              }}
              aria-label="Next image"
            >
              <ChevronIcon style={{ transform: 'scaleX(-1)' }} />
            </button>
          )}

          <span className="lightbox-count">
            {lightbox.achievement.title}
            {lightbox.achievement.images.length > 1
              ? ` — ${lightbox.index + 1} / ${lightbox.achievement.images.length}`
              : ''}
          </span>
        </div>
      )}
    </section>
  );
}
