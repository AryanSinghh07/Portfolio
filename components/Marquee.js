'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const words = ['Full Stack', 'AI / ML', 'Computer Vision', 'NLP', 'React', 'Python', 'Next.js', 'TensorFlow'];

export default function Marquee() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const tween = gsap.to(track, {
      xPercent: -50,
      ease: 'none',
      duration: 24,
      repeat: -1,
    });

    // scrub speed with scroll velocity
    const st = ScrollTrigger.create({
      trigger: track,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const v = Math.abs(self.getVelocity() / 900);
        gsap.to(tween, { timeScale: 1 + Math.min(v, 3), duration: 0.4, overwrite: true });
      },
    });

    return () => {
      tween.kill();
      st.kill();
    };
  }, []);

  const row = words.map((w, i) => (
    <span className="marquee-item" key={i}>
      {w} <span className="marquee-star">✦</span>
    </span>
  ));

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" ref={trackRef}>
        <div className="marquee-row">{row}</div>
        <div className="marquee-row">{row}</div>
      </div>
    </div>
  );
}
