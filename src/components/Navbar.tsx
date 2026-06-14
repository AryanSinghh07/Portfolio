import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, FolderOpen, Mail, FileText, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home",     icon: Home,       link: "/",         type: "route"  },
  { name: "About",    icon: User,       link: "/#about",   type: "anchor" },
  { name: "Projects", icon: FolderOpen, link: "/#projects",type: "anchor" },
  { name: "Contact",  icon: Mail,       link: "/#contact", type: "anchor" },
  { name: "Resume",   icon: FileText,   link: "/resume",   type: "route"  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/AryanSinghh07",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thearyansingh07/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/the_aryansingh_",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        padding: "6px 0",
        background: "transparent",
      }}
    >
      <div className="w-full px-6 flex items-center justify-between">

        {/* Left — Name */}
        <Link to="/" className="text-xl font-bold select-none">
          <span style={{
            background: "linear-gradient(135deg, #c4b5fd, #818cf8, #a78bfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "'Astila', sans-serif",
          }}>
            Aryan Singh
          </span>
        </Link>

        {/* Right — Circle menu button */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setOpen(prev => !prev)}
            aria-label="Toggle menu"
            className="relative flex items-center justify-center overflow-hidden transition-all duration-300"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: open ? "rgba(110,86,207,0.2)" : "transparent",
              border: `1.5px solid ${open ? "rgba(196,181,253,0.7)" : "rgba(255,255,255,0.55)"}`,
              boxShadow: open ? "0 0 20px rgba(110,86,207,0.4)" : "none",
              cursor: "pointer",
            }}
            onMouseEnter={e => {
              if (!open) {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,181,253,0.7)";
                (e.currentTarget as HTMLElement).style.background = "rgba(110,86,207,0.12)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(110,86,207,0.3)";
              }
            }}
            onMouseLeave={e => {
              if (!open) {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.55)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }
            }}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, y: 8, scale: 0.7 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.7 }}
                  transition={{ duration: 0.15 }}
                  style={{ fontSize: "9px", fontWeight: 700, color: "#c4b5fd", letterSpacing: "0.1em", position: "absolute" }}
                >
                  CLOSE
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, y: 8, scale: 0.7 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.7 }}
                  transition={{ duration: 0.15 }}
                  style={{ fontSize: "10px", fontWeight: 700, color: "#ffffff", letterSpacing: "0.1em", position: "absolute" }}
                >
                  MENU
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Dropdown panel */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute right-0 mt-3"
                style={{
                  width: "min(260px, calc(100vw - 32px))",
                  background: "rgba(8,8,20,0.96)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(110,86,207,0.28)",
                  borderRadius: "20px",
                  padding: "8px",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.7), 0 0 40px rgba(110,86,207,0.12)",
                }}
              >
                {/* Nav links */}
                <div className="p-2 pb-1">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive =
                      item.type === "route"
                        ? item.link === location.pathname && (item.link !== "/" || !location.hash)
                        : location.pathname === "/" && location.hash === item.link.slice(1);

                    const inner = (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.18, delay: index * 0.04 }}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200 group"
                        style={{
                          background: isActive ? "rgba(110,86,207,0.22)" : "transparent",
                          border: isActive ? "1px solid rgba(110,86,207,0.4)" : "1px solid transparent",
                        }}
                        onMouseEnter={e => {
                          if (!isActive) {
                            (e.currentTarget as HTMLElement).style.background = "rgba(110,86,207,0.1)";
                            (e.currentTarget as HTMLElement).style.border = "1px solid rgba(110,86,207,0.2)";
                          }
                        }}
                        onMouseLeave={e => {
                          if (!isActive) {
                            (e.currentTarget as HTMLElement).style.background = "transparent";
                            (e.currentTarget as HTMLElement).style.border = "1px solid transparent";
                          }
                        }}
                      >
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200"
                          style={{ background: isActive ? "rgba(110,86,207,0.5)" : "rgba(110,86,207,0.1)" }}>
                          <Icon size={14} color={isActive ? "#fff" : "#a78bfa"} />
                        </div>
                        <span style={{ fontSize: "14px", fontWeight: 500, color: isActive ? "#e2d9f3" : "#94a3b8" }}>
                          {item.name}
                        </span>
                        {isActive && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: "#a78bfa" }} />
                        )}
                      </motion.div>
                    );

                    return (
                      <Link key={index} to={item.link} style={{ display: "block" }}>{inner}</Link>
                    );
                  })}
                </div>

                {/* Divider */}
                <div className="mx-4 my-2" style={{ height: "1px", background: "rgba(110,86,207,0.15)" }} />

                {/* Bottom — socials + email */}
                <div className="px-4 py-3">
                  <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: "#475569" }}>Find me</p>
                  <div className="flex items-center gap-2 mb-3">
                    {socials.map(s => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                        style={{ background: "rgba(110,86,207,0.1)", border: "1px solid rgba(110,86,207,0.2)", color: "#7c6fcd" }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(110,86,207,0.25)";
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(110,86,207,0.5)";
                          (e.currentTarget as HTMLElement).style.color = "#c4b5fd";
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(110,86,207,0.1)";
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(110,86,207,0.2)";
                          (e.currentTarget as HTMLElement).style.color = "#7c6fcd";
                        }}
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>

                  {/* Email quick link */}
                  <a href="mailto:aryan.singhh04@gmail.com"
                    className="flex items-center justify-between w-full px-3 py-2 rounded-xl transition-all duration-200 group"
                    style={{ background: "rgba(110,86,207,0.06)", border: "1px solid rgba(110,86,207,0.15)" }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(110,86,207,0.14)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(110,86,207,0.3)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(110,86,207,0.06)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(110,86,207,0.15)";
                    }}
                  >
                    <span className="text-xs truncate" style={{ color: "#94a3b8" }}>aryan.singhh04@gmail.com</span>
                    <ArrowUpRight className="w-3 h-3 shrink-0 ml-1 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" style={{ color: "#7c6fcd" }} />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
