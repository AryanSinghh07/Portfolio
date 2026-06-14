import React, { useEffect, useRef, useState } from "react";

const MagnetButton = ({
  href,
  target,
  rel,
  className,
  style,
  children,
}: {
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transition = "transform 0.1s ease";
    el.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transition = "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={className}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
};

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [showScrollIcon, setShowScrollIcon] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollIcon(scrollY <= 100);

      // Zoom in: starts at 1.0, grows as user scrolls
      if (bgRef.current) {
        const scale = Math.min(1.4, 1 + scrollY * 0.0006);
        bgRef.current.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-10 px-4 md:px-8 overflow-hidden relative"
      ref={containerRef}
    >
      {/* Background image — zoom out on scroll */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          ref={bgRef}
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/assets/portdolioherosection.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transform: "scale(1)",
            transformOrigin: "center center",
            willChange: "transform",
            transition: "transform 0.05s linear",
          }}
        />
      </div>

      {/* All-side dark vignette — stronger left side for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to top,    #0a0a16 0%, transparent 60%),
            linear-gradient(to bottom, #0a0a16 0%, transparent 45%),
            linear-gradient(to right,  #0a0a16 0%, rgba(10,10,22,0.15) 60%, transparent 75%),
            linear-gradient(to left,   #0a0a16 0%, transparent 40%)
          `,
        }}
      />

      {/* Color orbs */}
      <div className="absolute pointer-events-none" style={{ top: "10%", left: "-10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(110,86,207,0.25) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute pointer-events-none" style={{ top: "30%", right: "-5%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(236,72,153,0.18) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute pointer-events-none" style={{ bottom: "10%", left: "30%", width: "350px", height: "350px", background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />

      {/* Right side text */}
      <p
        className="absolute bottom-24 right-8 md:right-16 hidden md:block text-base md:text-lg max-w-xs text-right z-10"
        style={{ color: "#e2d9f3", lineHeight: 1.8, textShadow: "0 2px 16px rgba(0,0,0,1)" }}
      >
        Right now I'm sharpening my skills in<br />
        <span style={{ color: "#c4b5fd", fontWeight: 600 }}>full-stack development</span> &amp; <span style={{ color: "#c4b5fd", fontWeight: 600 }}>AI/ML</span>.
      </p>

      <div className="w-full px-0 md:px-2 relative z-10">
        <div className="flex flex-col gap-8 max-w-4xl">

          {/* Label */}
          <span
            className="text-sm font-mono tracking-widest uppercase w-fit px-3 py-1.5 rounded-full"
            style={{
              color: "#c4b5fd",
              background: "rgba(110,86,207,0.25)",
              border: "1px solid rgba(167,139,250,0.4)",
              backdropFilter: "blur(8px)",
              letterSpacing: "0.12em",
            }}
          >
            Full Stack Developer &amp; AI/ML Engineer
          </span>

          {/* Main heading */}
          <h1
            className="font-bold"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5rem)",
              lineHeight: 1.15,
              color: "#ffffff",
              textShadow: "0 2px 30px rgba(0,0,0,1), 0 0 60px rgba(0,0,0,0.8)",
            }}
          >
            I'm Aryan Singh - {" "}
            <br className="hidden sm:block" />
            <span
              style={{
                background: "linear-gradient(135deg, #5b21b6 0%, #7c3aed 35%, #a78bfa 65%, #e9d5ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "none",
                filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.9))",
              }}
            >
              building things that actually matter.
            </span>
          </h1>

          {/* Body paragraph — left */}
          <p
            className="text-lg md:text-xl font-medium max-w-2xl"
            style={{ color: "#ffffff", lineHeight: 1.8, textShadow: "0 2px 16px rgba(0,0,0,1)" }}
          >
            Over the past year, I've worked on AI systems for{" "}
            <span style={{ color: "#c4b5fd", fontWeight: 700 }}>agriculture</span>,{" "}
            <span style={{ color: "#c4b5fd", fontWeight: 700 }}>mental health</span>, and{" "}
            <span style={{ color: "#c4b5fd", fontWeight: 700 }}>animal conservation</span>{" "}
            — not just as college projects, but as real solutions presented at government missions and industry events.
          </p>

          {/* CTA Buttons */}
          <div className="mt-2 flex flex-wrap gap-4">
            <MagnetButton
              href="#projects"
              className="px-8 py-4 text-white font-bold rounded-xl"
              style={{
                background: "rgba(110,86,207,0.9)",
                boxShadow: "0 0 28px rgba(110,86,207,0.6), 0 4px 15px rgba(0,0,0,0.5)",
                border: "1.5px solid rgba(196,181,253,0.5)",
                display: "inline-block",
              }}
            >
              View My Work
            </MagnetButton>

            <MagnetButton
              href="/media/Aryan_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 font-bold rounded-xl"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1.5px solid rgba(255,255,255,0.5)",
                color: "#ffffff",
                backdropFilter: "blur(8px)",
                display: "inline-block",
              }}
            >
              Download Resume
            </MagnetButton>

            <MagnetButton
              href="#contact"
              className="px-8 py-4 font-bold rounded-xl"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1.5px solid rgba(255,255,255,0.3)",
                color: "#ffffff",
                backdropFilter: "blur(8px)",
                display: "inline-block",
              }}
            >
              Contact Me
            </MagnetButton>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center transition-all duration-500 z-10 ${
          showScrollIcon ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span className="text-xs tracking-widest uppercase mb-3" style={{ color: "#475569" }}>
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, #a78bfa, #f472b6, transparent)" }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
