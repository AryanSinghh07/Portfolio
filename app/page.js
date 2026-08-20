'use client';

import { useEffect, useState } from 'react';
import Shell from '@/components/Shell';
import Preloader from '@/components/Preloader';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Manifesto from '@/components/Manifesto';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  // safety net: if the preloader callback ever fails, reveal the page anyway
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 4500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Preloader onComplete={() => setLoaded(true)} />
      <Shell>
        <Hero start={loaded} />
        <Marquee />
        <About />
        <Manifesto />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </Shell>
    </>
  );
}
