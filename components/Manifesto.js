'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// t = word, e = emoji token
const tokens = [
  { t: 'I' }, { t: 'train' }, { t: 'AI' }, { t: 'models' }, { e: '🤖' },
  { t: 'that' }, { t: 'help' }, { t: 'real' }, { t: 'farmers,' },
  { t: 'build' }, { t: 'chatbots' }, { e: '💬' }, { t: 'that' }, { t: 'calm' },
  { t: '2AM' }, { t: 'anxiety,' }, { t: 'and' }, { t: 'craft' }, { t: 'web' },
  { t: 'apps' }, { e: '⚡' }, { t: 'that' }, { t: 'feel' }, { t: 'alive.' },
  { t: 'Slap' }, { t: 'my' }, { t: 'code' }, { t: 'on' }, { t: 'any' },
  { t: 'problem' }, { e: '🔥' }, { t: 'and' }, { t: 'act' }, { t: 'surprised' },
  { t: 'when' }, { t: 'it' }, { t: 'actually' }, { t: 'ships.' }, { e: '🚀' },
];

export default function Manifesto() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray('.mani-tok');
      const emojis = gsap.utils.toArray('.mani-emoji');

      // words light up one by one, scrubbed by scroll
      gsap.fromTo(
        words,
        { opacity: 0.1, y: 10, filter: 'blur(2px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          stagger: 0.6,
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 72%',
            end: 'center 42%',
            scrub: 0.5,
          },
        }
      );

      // emoji pop with a bouncy spin as their word arrives
      gsap.fromTo(
        emojis,
        { scale: 0, rotate: -30 },
        {
          scale: 1,
          rotate: 0,
          stagger: 6,
          ease: 'back.out(3)',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 72%',
            end: 'center 42%',
            scrub: 0.5,
          },
        }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="manifesto" ref={rootRef}>
      <p className="manifesto-text">
        {tokens.map((tok, i) =>
          tok.e ? (
            <span className="mani-tok mani-emoji" key={i}>
              {tok.e}
            </span>
          ) : (
            <span className="mani-tok mani-word" key={i}>
              {tok.t}
            </span>
          )
        )}
      </p>
    </section>
  );
}
