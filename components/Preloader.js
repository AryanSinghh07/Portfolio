'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const rootRef = useRef(null);
  const counterRef = useRef(null);
  const wordsRef = useRef(null);
  const doneRef = useRef(false);

  useEffect(() => {
    if (doneRef.current) return;
    doneRef.current = true;

    // skip the full loader when returning from another page this session
    if (sessionStorage.getItem('as-preloaded')) {
      rootRef.current.style.display = 'none';
      onComplete?.();
      return;
    }

    const root = rootRef.current;
    const counter = counterRef.current;
    const count = { v: 0 };

    document.documentElement.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = '';
        root.style.display = 'none';
        sessionStorage.setItem('as-preloaded', '1');
        onComplete?.();
      },
    });

    tl.to(wordsRef.current.children, {
      y: 0,
      opacity: 1,
      stagger: 0.12,
      duration: 0.8,
      ease: 'power3.out',
    })
      .to(
        count,
        {
          v: 100,
          duration: 1.8,
          ease: 'power2.inOut',
          onUpdate: () => {
            counter.textContent = String(Math.round(count.v)).padStart(3, '0');
          },
        },
        '<'
      )
      .to([wordsRef.current, counter], {
        y: -40,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
        delay: 0.15,
      })
      .to(root, {
        yPercent: -100,
        duration: 0.9,
        ease: 'power4.inOut',
      });

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div className="preloader" ref={rootRef} aria-hidden="true">
      <div className="preloader-words" ref={wordsRef}>
        <span>ARYAN</span>
        <span className="preloader-outline">SINGH</span>
      </div>
      <div className="preloader-counter" ref={counterRef}>
        000
      </div>
      <div className="preloader-foot">
        <span>Portfolio © 2026</span>
        <span>Noida, India</span>
      </div>
    </div>
  );
}
