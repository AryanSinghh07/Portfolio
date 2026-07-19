'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '@/lib/data';
import { EyeIcon, GitHubIcon, ArrowIcon } from './Icons';

gsap.registerPlugin(ScrollTrigger);

export default function WorkIndex() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.windex-head > *', {
        opacity: 0,
        y: 40,
        stagger: 0.08,
        duration: 0.9,
        ease: 'power3.out',
        clearProps: 'all',
      });
      gsap.utils.toArray('.windex-card').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 70,
          duration: 0.9,
          delay: i < 2 ? 0.3 + i * 0.12 : 0,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: { trigger: card, start: 'top 92%', once: true },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="windex section" ref={rootRef}>
      <div className="windex-head">
        <Link href="/" className="case-back" data-cursor>
          ← Back home
        </Link>
        <span className="section-label">All Work</span>
        <h1 className="section-title">
          Every project, <em>every</em> experiment
        </h1>
        <p className="windex-sub">
          {projects.length} projects — AI/ML systems, full-stack platforms, and hackathon builds.
        </p>
      </div>

      <div className="windex-grid">
        {projects.map((p) => (
          <article className="windex-card" key={p.slug}>
            <Link href={`/work/${p.slug}`} className="windex-card-img" data-cursor>
              <img src={p.images[0]} alt={`${p.title} — screenshot`} loading="lazy" />
              <span className="windex-card-index">{p.index}</span>
            </Link>
            <div className="windex-card-body">
              <div className="windex-card-top">
                <Link href={`/work/${p.slug}`}>
                  <h2 className="windex-card-title">{p.title}</h2>
                </Link>
                <span className="windex-card-year">{p.year}</span>
              </div>
              <p className="windex-card-sub">{p.subtitle}</p>
              <p className="windex-card-desc">{p.description}</p>
              <div className="windex-card-foot">
                <div className="work-panel-tech">
                  {p.tech.slice(0, 4).map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="windex-card-actions">
                  <Link
                    href={`/work/${p.slug}`}
                    className="icon-btn icon-btn--dark"
                    aria-label={`View ${p.title} case study`}
                    data-cursor
                  >
                    <EyeIcon className="icon-btn-svg" />
                    <span>View</span>
                  </Link>
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn icon-btn--dark"
                    aria-label={`${p.title} on GitHub`}
                    data-cursor
                  >
                    <GitHubIcon className="icon-btn-svg" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="windex-cta">
        <Link href="/#contact" className="magnet-btn magnet-btn--light" data-cursor>
          <span>
            Got a project in mind? Let&apos;s talk <ArrowIcon className="icon-btn-svg arr" />
          </span>
        </Link>
      </div>
    </section>
  );
}
