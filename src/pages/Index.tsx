
import React, { useEffect, useRef } from 'react';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Index = () => {
  const mainRef = useRef(null);
  const smoothWrapperRef = useRef(null);
  const smoothContentRef = useRef(null);

  useEffect(() => {
    // Update document title
    document.title = 'Aryan Singh';
    
    // GSAP ScrollTrigger for sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      // Skip AboutSection (id="about") for scroll animations
      if (section.id === 'about') return;
      
      // Create a timeline for each section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
      
      // Add subtle parallax effect to section backgrounds
      gsap.to(section, {
        backgroundPositionY: "30%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
      
      // Add text reveal animations
      const textElements = section.querySelectorAll('h1, h2, h3, h4, p');
      textElements.forEach((el, i) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none"
          },
          delay: i * 0.05 // faster stagger
        });
      });
    });
    
    // Handle mouse movement for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = clientX / window.innerWidth - 0.5;
      const yPos = clientY / window.innerHeight - 0.5;
      
      gsap.to(".parallax-element", {
        x: xPos * 30,
        y: yPos * 30,
        duration: 1,
        ease: "power2.out"
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Smooth scrolling for anchor links
    const anchorHandlers: Array<{ el: Element; fn: EventListener }> = [];
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      const fn: EventListener = (e) => {
        e.preventDefault();
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            gsap.to(window, {
              duration: 1,
              scrollTo: { y: targetElement, offsetY: 50 },
              ease: "power3.inOut"
            });
          }
        }
      };
      anchor.addEventListener('click', fn);
      anchorHandlers.push({ el: anchor, fn });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('mousemove', handleMouseMove);
      anchorHandlers.forEach(({ el, fn }) => el.removeEventListener('click', fn));
    };
  }, []);

  return (
    <div className="content-container">
      <BackgroundAnimation />
      <Navbar />
      
      <div className="smooth-wrapper" ref={smoothWrapperRef}>
        <div className="smooth-content" ref={smoothContentRef}>
          <main ref={mainRef} className="relative">
            <HeroSection />
            <AboutSection />
            <CertificationsSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
