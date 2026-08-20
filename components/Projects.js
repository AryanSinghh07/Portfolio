'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '@/lib/data';
import { EyeIcon, GitHubIcon, ArrowIcon } from './Icons';

gsap.registerPlugin(ScrollTrigger);

const featured = projects.filter((p) => p.featured);

export default function Projects() {
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia(rootRef);

    // desktop: pinned horizontal scroll gallery
    mm.add('(min-width: 901px)', () => {
      const track = trackRef.current;
      const getDistance = () =>
        Math.max(0, track.scrollWidth + track.offsetLeft * 2 - window.innerWidth);

      gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: () => '+=' + getDistance(),
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
      });
    });

    // magnetic hover: cards lean toward the cursor
    mm.add('(min-width: 901px) and (pointer: fine)', () => {
      const cleanups = [];
      gsap.utils.toArray('.work-panel').forEach((panel) => {
        const xTo = gsap.quickTo(panel, 'x', { duration: 0.5, ease: 'power3.out' });
        const yTo = gsap.quickTo(panel, 'y', { duration: 0.5, ease: 'power3.out' });
        const rTo = gsap.quickTo(panel, 'rotation', { duration: 0.6, ease: 'power3.out' });

        const move = (e) => {
          const r = panel.getBoundingClientRect();
          const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
          const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
          xTo(dx * 18);
          yTo(dy * 14);
          rTo(dx * 0.6);
        };
        const leave = () => {
          xTo(0);
          yTo(0);
          rTo(0);
        };
        panel.addEventListener('mousemove', move);
        panel.addEventListener('mouseleave', leave);
        cleanups.push(() => {
          panel.removeEventListener('mousemove', move);
          panel.removeEventListener('mouseleave', leave);
        });
      });
      return () => cleanups.forEach((fn) => fn());
    });

    // mobile: simple staggered reveal, vertical stack
    mm.add('(max-width: 900px)', () => {
      gsap.utils.toArray('.work-panel').forEach((panel) => {
        gsap.from(panel, {
          opacity: 0,
          y: 60,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: panel, start: 'top 88%', once: true },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="work" id="work" ref={rootRef}>
      <div className="work-viewport">
        <div className="work-head">
          <div className="work-head-left">
            <span className="section-label">04 — Selected Work</span>
            <h2 className="section-title">
              Built <span className="ol">to</span> <em>ship</em>
            </h2>
            <div className="work-hint">
              <span className="work-hint-line" />
              <span>Scroll to explore</span>
            </div>
          </div>
          <div className="work-head-right">
            <Link className="work-all-link" href="/work" data-cursor>
              All work ({String(projects.length).padStart(2, '0')}) <ArrowIcon className="work-all-arrow" />
            </Link>
            <div className="work-progress">
              <div className="work-progress-fill" ref={progressRef} />
            </div>
          </div>
        </div>

        <div className="work-track" ref={trackRef}>
          {featured.map((p) => (
            <article className="work-panel" key={p.slug}>
              <div className="work-panel-info">
                <div className="work-panel-meta">
                  <span className="work-panel-index">
                    {p.index} / {String(projects.length).padStart(2, '0')}
                  </span>
                  <span className="work-panel-year">{p.year}</span>
                </div>
                <Link href={`/work/${p.slug}`} className="work-panel-titlelink">
                  <h3 className="work-panel-title">{p.title}</h3>
                </Link>
                <p className="work-panel-sub">{p.subtitle}</p>
                <p className="work-panel-desc">{p.description}</p>
                <div className="work-panel-tech">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="work-panel-actions">
                  <Link
                    href={`/work/${p.slug}`}
                    className="icon-btn"
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
                    className="icon-btn"
                    aria-label={`${p.title} on GitHub`}
                    data-cursor
                  >
                    <GitHubIcon className="icon-btn-svg" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
              <Link href={`/work/${p.slug}`} className="work-panel-img" data-cursor>
                <img src={p.images[0]} alt={`${p.title} — screenshot`} loading="lazy" />
              </Link>
              <span className="work-panel-ghost">{p.index}</span>
            </article>
          ))}

          {/* view-all CTA panel */}
          <Link href="/work" className="work-panel work-panel--cta" data-cursor>
            <span className="work-cta-count">
              +{projects.length - featured.length} more projects
            </span>
            <span className="work-cta-title">
              VIEW ALL
              <br />
              WORK
            </span>
            <span className="work-cta-arrow">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
