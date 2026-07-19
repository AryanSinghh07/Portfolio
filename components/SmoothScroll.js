'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;
    window.__lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // recalculate all trigger positions once images/fonts are in,
    // so reveals never end up with stale start positions
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const t1 = setTimeout(refresh, 1200);
    const t2 = setTimeout(refresh, 3000);

    return () => {
      window.removeEventListener('load', refresh);
      clearTimeout(t1);
      clearTimeout(t2);
      gsap.ticker.remove(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return <>{children}</>;
}
