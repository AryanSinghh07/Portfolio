import { useEffect } from "react";
import { Download, ArrowLeft, Mail, Phone, MapPin, Code2, Brain, Database, Cloud, Server, GraduationCap, Trophy, Mic, Star, Zap, Github, Linkedin, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

/* ── Data ──────────────────────────────────────────────────────── */
const skills = [
  { cat: "Languages",      Icon: Code2,         color: "#a78bfa", items: ["Python", "JavaScript", "TypeScript", "C", "SQL"] },
  { cat: "Frontend",       Icon: Code2,         color: "#818cf8", items: ["React.js", "Next.js", "Three.js", "GSAP", "HTML5", "CSS3", "Tailwind CSS"] },
  { cat: "Backend",        Icon: Server,        color: "#c4b5fd", items: ["Node.js", "Express.js", "FastAPI"] },
  { cat: "AI / ML",        Icon: Brain,         color: "#a78bfa", items: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "LangChain", "OpenCV"] },
  { cat: "Databases",      Icon: Database,      color: "#818cf8", items: ["MongoDB", "PostgreSQL", "ChromaDB"] },
  { cat: "DevOps & Cloud", Icon: Cloud,         color: "#c4b5fd", items: ["Docker", "AWS", "Git", "GitHub Actions", "Nginx", "Vercel", "Render"] },
  { cat: "Learning",       Icon: Zap,           color: "#7c3aed", items: ["Kubernetes", "MLflow", "RAG", "WebSockets"] },
];

const projects = [
  {
    name: "PAWS — Pet Adoption & Welfare System",
    desc: "Full-stack platform connecting adopters, shelters & pet care services with real-time listings and automated adoption workflows. Automated shelter management for listings, applications, and health records; integrated e-commerce for pet products.",
    stack: ["React", "Node.js", "MongoDB", "Express.js", "Python", "GSAP", "Tailwind CSS"],
    accent: "#a78bfa",
  },
  {
    name: "CBT Chatbot — Mental Health Support for Students",
    desc: "24/7 AI-powered Cognitive Behavioural Therapy chatbot delivering grounding techniques (5-4-3-2-1, guided breathing). Addresses late-night student anxiety with instant support.",
    stack: ["Python", "React", "FastAPI", "NLP", "Tailwind CSS"],
    accent: "#818cf8",
    badge: "Finalist — Code Astraa 2025",
  },
  {
    name: "Gopalan AI — Animal Type Classification System",
    desc: "AI classification & scoring system built for Rashtriya Gokul Mission (SIH 2025). Eliminates human bias and observer fatigue in identifying elite indigenous bovine breeding stock.",
    stack: ["Python", "TensorFlow", "OpenCV", "FastAPI"],
    accent: "#c4b5fd",
    badge: "SIH 2025 — 34th Nationally",
  },
  {
    name: "AI Crop Disease Prediction & Management System",
    desc: "Detects crop diseases from field images. Placed 11th at GU Hackathon 2024 and recognised at SIH 2024. Presented to 2,000+ attendees at UP International Trade Show 2024.",
    stack: ["Python", "TensorFlow", "OpenCV", "React", "JavaScript"],
    accent: "#8b5cf6",
    badge: "11th — GU Hackathon 2024",
  },
];

const achievements = [
  { event: "SIH 2024",          result: "Participated", detail: "AI Crop Disease Prediction",          Icon: Trophy, color: "#a78bfa" },
  { event: "GU Hackathon 2024", result: "11th Place",   detail: "University AI Competition",            Icon: Star,   color: "#818cf8" },
  { event: "UP Trade Show 2024",result: "Public Speaker",detail: "Presented to 2,000+ attendees",      Icon: Mic,    color: "#c4b5fd" },
  { event: "Code Astraa 2025",  result: "Finalist",     detail: "Galgotias University × IEEE",         Icon: Zap,    color: "#a78bfa" },
  { event: "SIH 2025",          result: "Participated", detail: "Gopalan AI Animal Classification",    Icon: Trophy, color: "#818cf8" },
  { event: "GU Hackathon 2025", result: "34th Place",   detail: "University AI Competition",            Icon: Star,   color: "#c4b5fd" },
];

/* ── Helpers ────────────────────────────────────────────────────── */
const card = {
  background: "rgba(255,255,255,0.025)",
  border: "1.5px solid rgba(110,86,207,0.28)",
  borderRadius: "20px",
  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
} as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as number[] },
});

/* ── Component ─────────────────────────────────────────────────── */
const Resume = () => {
  useEffect(() => { document.title = "Aryan Singh | Resume"; }, []);

  return (
    <div style={{ background: "#0a0a16", minHeight: "100vh" }}>
      <Navbar />

      {/* Ambient glows */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "10%", left: "20%", width: 500, height: 400, background: "radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", bottom: "20%", right: "15%", width: 400, height: 300, background: "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto", padding: "clamp(80px, 15vw, 120px) clamp(12px, 4vw, 24px) 60px" }}>

        {/* ── Header ──────────────────────────────────────────── */}
        <motion.div {...fadeUp(0)} style={{ ...card, padding: "clamp(20px, 5vw, 40px) clamp(16px, 5vw, 40px) 36px", marginBottom: 28, position: "relative", overflow: "hidden" }}>
          {/* Purple bar */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #7c3aed, #a78bfa, #c4b5fd, transparent)" }} />

          <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: "#7c3aed", letterSpacing: "0.2em" }}>
                Full-Stack &amp; AI/ML Engineer
              </p>
              <h1 style={{ fontSize: "clamp(30px, 5vw, 46px)", fontWeight: 800, color: "#f0f0ff", margin: 0, lineHeight: 1.1 }}>
                Aryan Singh
              </h1>
              <p className="mt-1" style={{ color: "#94a3b8", fontSize: 14 }}>
                BCA – AI &amp; ML · Galgotias University · Hackathon Finalist
              </p>

              <div className="flex flex-col gap-2 mt-5">
                {[
                  { Icon: Mail,    label: "aryan.singhh04@gmail.com", href: "mailto:aryan.singhh04@gmail.com" },
                  { Icon: Phone,   label: "+91 84334 19387",           href: "tel:+918433419387" },
                  { Icon: MapPin,  label: "Noida, India",              href: null },
                ].map(({ Icon, label, href }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon size={13} color="#7c3aed" />
                    {href ? (
                      <a href={href} style={{ color: "#94a3b8", fontSize: 13 }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#a78bfa")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}>
                        {label}
                      </a>
                    ) : (
                      <span style={{ color: "#94a3b8", fontSize: 13 }}>{label}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-4">
                {[
                  { href: "https://linkedin.com/in/thearyansingh07", Icon: Linkedin, label: "LinkedIn" },
                  { href: "https://github.com/AryanSinghh07",        Icon: Github,   label: "GitHub" },
                ].map(({ href, Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
                    style={{ background: "rgba(110,86,207,0.12)", border: "1px solid rgba(110,86,207,0.3)", color: "#a78bfa" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(110,86,207,0.22)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(110,86,207,0.12)"; }}>
                    <Icon size={12} /> {label}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 shrink-0">
              <a href="/media/Aryan_Singh_Resume.pdf" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{ background: "rgba(124,58,237,0.9)", color: "#fff", border: "1.5px solid rgba(196,181,253,0.3)", boxShadow: "0 0 20px rgba(124,58,237,0.4)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(124,58,237,0.6)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(124,58,237,0.4)"; (e.currentTarget as HTMLElement).style.transform = ""; }}>
                <FileText size={14} /> View PDF
              </a>
              <a href="/media/Aryan_Singh_Resume.pdf" download="Aryan Singh Resume.pdf"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{ background: "transparent", color: "#a78bfa", border: "1.5px solid rgba(110,86,207,0.4)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(110,86,207,0.12)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                <Download size={14} /> Download
              </a>
              <Link to="/"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                style={{ color: "#64748b", border: "1.5px solid rgba(100,116,139,0.2)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#64748b"; }}>
                <ArrowLeft size={14} /> Back
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ── PDF Embed ───────────────────────────────────────── */}
        <motion.div {...fadeUp(0.04)} style={{ ...card, padding: 0, marginBottom: 28, overflow: "hidden" }}>
          <div className="flex items-center justify-between px-6 py-4"
            style={{ borderBottom: "1px solid rgba(110,86,207,0.18)", background: "rgba(255,255,255,0.02)" }}>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(124,58,237,0.15)", border: "1.5px solid rgba(124,58,237,0.3)" }}>
                <FileText size={13} color="#a78bfa" />
              </div>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#f0f0ff" }}>Resume PDF</span>
            </div>
            <a href="/media/Aryan_Singh_Resume.pdf" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
              style={{ background: "rgba(110,86,207,0.12)", border: "1px solid rgba(110,86,207,0.3)", color: "#a78bfa" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(110,86,207,0.22)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(110,86,207,0.12)"; }}>
              <FileText size={11} /> Open in new tab
            </a>
          </div>
          <iframe
            src="/media/Aryan_Singh_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
            title="Aryan Singh Resume"
            style={{ width: "100%", height: "min(780px, 65vh)", border: "none", display: "block", background: "#0d0d1a" }}
          />
        </motion.div>

        {/* ── Skills ──────────────────────────────────────────── */}
        <motion.div {...fadeUp(0.06)} style={{ ...card, padding: "clamp(20px, 4vw, 32px) clamp(14px, 4vw, 36px)", marginBottom: 28 }}>
          <SectionLabel icon={<Code2 size={15} />} title="Technical Skills" />
          <div className="flex flex-col gap-5 mt-5">
            {skills.map(({ cat, Icon, color, items }) => (
              <div key={cat} className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex items-center gap-2 shrink-0" style={{ minWidth: 160 }}>
                  <Icon size={13} color={color} />
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#94a3b8", letterSpacing: "0.04em" }}>{cat}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium"
                      style={{ background: `${color}14`, border: `1px solid ${color}35`, color }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Projects ────────────────────────────────────────── */}
        <motion.div {...fadeUp(0.1)} style={{ ...card, padding: "clamp(20px, 4vw, 32px) clamp(14px, 4vw, 36px)", marginBottom: 28 }}>
          <SectionLabel icon={<Code2 size={15} />} title="Projects" />
          <div className="grid sm:grid-cols-2 gap-5 mt-5">
            {projects.map((p, i) => (
              <motion.div key={i}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex flex-col p-5 rounded-xl relative overflow-hidden"
                style={{ background: "rgba(255,255,255,0.02)", border: `1.5px solid ${p.accent}30` }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(to right, ${p.accent}, transparent)` }} />
                {p.badge && (
                  <span className="self-start mb-3 px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ background: `${p.accent}18`, color: p.accent, border: `1px solid ${p.accent}40` }}>
                    {p.badge}
                  </span>
                )}
                <h3 className="mb-2 leading-snug" style={{ fontSize: 14, fontWeight: 700, color: "#e2d9f3" }}>
                  {p.name}
                </h3>
                <p className="flex-1 mb-4" style={{ fontSize: 12.5, color: "#64748b", lineHeight: 1.6 }}>
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded text-xs"
                      style={{ background: "rgba(110,86,207,0.12)", color: "#a78bfa", border: "1px solid rgba(110,86,207,0.2)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Achievements ────────────────────────────────────── */}
        <motion.div {...fadeUp(0.14)} style={{ ...card, padding: "clamp(20px, 4vw, 32px) clamp(14px, 4vw, 36px)", marginBottom: 28 }}>
          <SectionLabel icon={<Trophy size={15} />} title="Achievements" />
          <div className="flex flex-col gap-3 mt-5">
            {achievements.map((a, i) => {
              const { Icon } = a;
              return (
                <motion.div key={i}
                  whileHover={{ x: 4, transition: { duration: 0.18 } }}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(110,86,207,0.15)" }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${a.color}18`, border: `1px solid ${a.color}35` }}>
                    <Icon size={15} color={a.color} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#e2d9f3" }}>{a.event}</span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-semibold"
                        style={{ background: `${a.color}18`, color: a.color }}>{a.result}</span>
                    </div>
                    <p style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>{a.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Education ───────────────────────────────────────── */}
        <motion.div {...fadeUp(0.18)} style={{ ...card, padding: "clamp(20px, 4vw, 32px) clamp(14px, 4vw, 36px)", marginBottom: 28 }}>
          <SectionLabel icon={<GraduationCap size={15} />} title="Education" />
          <div className="flex items-start gap-5 mt-5 p-5 rounded-xl"
            style={{ background: "rgba(255,255,255,0.02)", border: "1.5px solid rgba(110,86,207,0.2)" }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(124,58,237,0.15)", border: "1.5px solid rgba(124,58,237,0.35)" }}>
              <GraduationCap size={18} color="#a78bfa" />
            </div>
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e2d9f3", margin: 0 }}>
                Bachelor of Computer Applications (BCA)
              </h3>
              <p style={{ fontSize: 13, color: "#a78bfa", marginTop: 3, fontWeight: 500 }}>
                AI &amp; Machine Learning Specialisation
              </p>
              <p style={{ fontSize: 12.5, color: "#64748b", marginTop: 4 }}>
                Galgotias University, Uttar Pradesh &nbsp;·&nbsp; July 2023 – July 2026
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Full-Stack Development", "AI / ML", "Data Structures", "Cloud Computing"].map(t => (
                  <span key={t} className="px-2.5 py-1 rounded-lg text-xs"
                    style={{ background: "rgba(167,139,250,0.1)", color: "#c4b5fd", border: "1px solid rgba(167,139,250,0.25)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="ml-auto shrink-0 hidden sm:block text-right">
              <span className="px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", color: "#4ade80" }}>
                In Progress
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Languages ───────────────────────────────────────── */}
        <motion.div {...fadeUp(0.22)} style={{ ...card, padding: "clamp(18px, 4vw, 28px) clamp(14px, 4vw, 36px)", marginBottom: 40 }}>
          <SectionLabel icon={<Star size={15} />} title="Languages" />
          <div className="flex gap-4 mt-4">
            {[["English", "Professional"], ["Hindi", "Native"]].map(([lang, level]) => (
              <div key={lang} className="flex items-center gap-3 px-4 py-2.5 rounded-xl"
                style={{ background: "rgba(110,86,207,0.08)", border: "1px solid rgba(110,86,207,0.2)" }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#e2d9f3" }}>{lang}</span>
                <span style={{ fontSize: 11, color: "#7c3aed", fontWeight: 500 }}>{level}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <motion.div {...fadeUp(0.26)} className="text-center">
          <p style={{ color: "#64748b", fontSize: 14, marginBottom: 16 }}>Open to SDE &amp; AI/ML internships</p>
          <Link to="/#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
            style={{ background: "rgba(124,58,237,0.9)", color: "#fff", boxShadow: "0 0 24px rgba(124,58,237,0.4)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 36px rgba(124,58,237,0.6)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(124,58,237,0.4)"; }}>
            <Mail size={15} /> Let's Connect
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

/* ── Section label helper ───────────────────────────────────────── */
const SectionLabel = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
      style={{ background: "rgba(124,58,237,0.15)", border: "1.5px solid rgba(124,58,237,0.3)" }}>
      <span style={{ color: "#a78bfa" }}>{icon}</span>
    </div>
    <h2 style={{ fontSize: 17, fontWeight: 700, color: "#f0f0ff", margin: 0 }}>{title}</h2>
    <div style={{ flex: 1, height: 1, background: "rgba(110,86,207,0.2)", marginLeft: 8 }} />
  </div>
);

export default Resume;
