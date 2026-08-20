'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ start }) {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!start) return;
    const ctx = gsap.context(() => {
      // everything is visible by default in CSS; from() animates in and
      // always lands back on the visible state
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.from('.hero-line-inner', {
        yPercent: 115,
        duration: 1.2,
        stagger: 0.09,
      })
        .from(
          '.hero-fade',
          { opacity: 0, y: 24, duration: 0.9, stagger: 0.08, clearProps: 'all' },
          '-=0.7'
        )
        .from(
          '.hero-rule',
          { scaleX: 0, transformOrigin: 'left center', duration: 1.1, ease: 'power3.inOut' },
          '-=0.8'
        );

      // gentle parallax drift as the hero scrolls away (no opacity fade)
      gsap.to('.hero-title', {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, [start]);

  return (
    <section className="hero" ref={rootRef} id="top">
      <div className="hero-top hero-fade">
        <p className="hero-intro">
          Hello — I&apos;m Aryan. <br />
          {profile.tagline}
        </p>
        <p className="hero-avail">
          <span className="nav-dot" /> Open to work / freelance
        </p>
      </div>

      <h1 className="hero-title" aria-label="Aryan Singh">
        <span className="hero-line">
          <span className="hero-line-inner">ARYAN</span>
        </span>
        <span className="hero-line hero-line--right">
          <span className="hero-line-inner hero-line-inner--outline">SINGH</span>
        </span>
      </h1>

      <div className="hero-rule" />

      <div className="hero-bottom">
        <p className="hero-role hero-fade">
          Full Stack Developer
          <em> &amp; </em>
          AI/ML Engineer
        </p>
        <p className="hero-exp hero-fade">
          <span className="hero-exp-value">{profile.experience}</span> Experience
        </p>
        <p className="hero-loc hero-fade">Based in {profile.location}</p>
        <div className="hero-scroll hero-fade" aria-hidden="true">
          <span>Scroll</span>
          <span className="hero-scroll-arrow">↓</span>
        </div>
      </div>
    </section>
  );
}
