'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EyeIcon, GitHubIcon, ArrowIcon, CloseIcon, ChevronIcon, GridIcon } from './Icons';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetail({ project, next }) {
  const rootRef = useRef(null);
  const liveUrl = project.links.live || project.links.github;
  const gallery = project.images.slice(1);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i + 1) % project.images.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i - 1 + project.images.length) % project.images.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, project.images.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.from('.case-reveal', {
        opacity: 0,
        y: 40,
        stagger: 0.08,
        duration: 0.9,
        clearProps: 'all',
      }).from(
        '.case-hero-img',
        { opacity: 0, y: 80, scale: 0.97, duration: 1.1, clearProps: 'all' },
        '-=0.5'
      );

      gsap.utils.toArray('.case-card, .case-block').forEach((block, i) => {
        gsap.from(block, {
          opacity: 0,
          y: 60,
          rotation: block.classList.contains('case-card') ? (i % 2 === 0 ? -1.2 : 1.2) : 0,
          transformOrigin: 'center bottom',
          duration: 0.9,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: { trigger: block, start: 'top 88%', once: true },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, [project.slug]);

  return (
    <article className="case section" ref={rootRef}>
      <Link href="/work" className="case-back case-reveal" data-cursor>
        ← All work
      </Link>

      <header className="case-head">
        <div className="case-head-main">
          <span className="case-index case-reveal">
            {project.index} — {project.year}
          </span>
          <h1 className="case-title case-reveal">{project.title}</h1>
          <p className="case-sub case-reveal">{project.subtitle}</p>
        </div>
        <div className="case-head-side case-reveal">
          <div className="work-panel-tech case-tech">
            {project.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="case-actions">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn icon-btn--dark icon-btn--solid"
              data-cursor
            >
              <EyeIcon className="icon-btn-svg" />
              <span>View Live</span>
            </a>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn icon-btn--dark"
              data-cursor
            >
              <GitHubIcon className="icon-btn-svg" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      <div className="case-hero-img">
        <img src={project.images[0]} alt={`${project.title} — screenshot`} />
      </div>

      {/* overview strip */}
      <div className="case-overview case-block">
        <span className="case-card-label">Overview</span>
        <p className="case-overview-text">{project.description}</p>
      </div>

      {/* problem / solution */}
      <div className="case-cards case-cards--2">
        <div className="case-card case-card--dark">
          <span className="case-card-label case-card-label--ondark">01 — The Problem</span>
          <p className="case-card-text">{project.case.problem}</p>
        </div>
        <div className="case-card case-card--accent">
          <span className="case-card-label case-card-label--onaccent">02 — The Solution</span>
          <p className="case-card-text">{project.case.solution}</p>
        </div>
      </div>

      {/* features / different */}
      <div className="case-cards case-cards--2">
        <div className="case-card case-card--line">
          <span className="case-card-label">03 — Key Features</span>
          <ul className="case-features">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
        <div className="case-card case-card--line">
          <span className="case-card-label">04 — What Makes It Different</span>
          <p className="case-card-text case-card-text--ink">{project.case.different}</p>
          <div className="case-card-foot">
            <span className="case-card-label">05 — My Role</span>
            <p className="case-card-text case-card-text--ink">{project.role}</p>
          </div>
        </div>
      </div>

      {/* how it was built */}
      <div className="case-card case-card--line case-block">
        <span className="case-card-label">06 — How It Was Built</span>
        <p className="case-card-text case-card-text--ink case-card-text--wide">
          {project.approach}
        </p>
      </div>

      {/* impact / final result */}
      <div className="case-card case-card--dark case-impact case-block">
        <span className="case-card-label case-card-label--onaccent">07 — Impact / Final Result</span>
        <p className="case-impact-text">{project.case.impact}</p>
      </div>

      {/* gallery — handles any number of images */}
      {gallery.length > 0 && (
        <div className="case-gallery-wrap case-block">
          <div className="case-gallery-head">
            <span className="case-card-label">Gallery</span>
            <button
              type="button"
              className="icon-btn icon-btn--dark case-gallery-viewall"
              onClick={() => setLightboxIndex(0)}
              data-cursor
            >
              <GridIcon className="icon-btn-svg" />
              <span>View All</span>
            </button>
          </div>
          <div className="case-gallery">
            {gallery.map((src, i) => (
              <button
                type="button"
                className="case-gallery-item"
                key={src + i}
                onClick={() => setLightboxIndex(i + 1)}
                data-cursor
              >
                <img src={src} alt={`${project.title} — screenshot ${i + 2}`} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}

      {lightboxIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} gallery`}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close gallery"
          >
            <CloseIcon />
          </button>

          {project.images.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i - 1 + project.images.length) % project.images.length);
              }}
              aria-label="Previous image"
            >
              <ChevronIcon />
            </button>
          )}

          <img
            className="lightbox-img"
            src={project.images[lightboxIndex]}
            alt={`${project.title} — screenshot ${lightboxIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />

          {project.images.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-nav--next"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i + 1) % project.images.length);
              }}
              aria-label="Next image"
            >
              <ChevronIcon style={{ transform: 'scaleX(-1)' }} />
            </button>
          )}

          <span className="lightbox-count">
            {lightboxIndex + 1} / {project.images.length}
          </span>
        </div>
      )}

      <Link href={`/work/${next.slug}`} className="case-next case-block" data-cursor>
        <span className="case-next-label">Next project</span>
        <span className="case-next-title">
          {next.title} <ArrowIcon className="case-next-arrow" />
        </span>
      </Link>
    </article>
  );
}
