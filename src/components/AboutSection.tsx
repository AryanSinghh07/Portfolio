import { useRef, useState, useEffect, ReactNode } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Code, Database, Server, Layers, GraduationCap, BookOpen, Award, MapPin, Trophy, Rocket, Briefcase } from 'lucide-react';

const PathReveal = ({
  pathLength, start, end, children, className,
}: {
  pathLength: MotionValue<number>;
  start: number;
  end: number;
  children: ReactNode;
  className?: string;
}) => {
  const opacity = useTransform(pathLength, [start, start + (end - start) * 0.4, end], [0, 0.6, 1]);
  const y = useTransform(pathLength, [start, end], [40, 0]);
  const scale = useTransform(pathLength, [start, end], [0.94, 1]);
  return (
    <motion.div style={{ opacity, y, scale }} className={className}>
      {children}
    </motion.div>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const skills = [
  { name: 'Frontend', icon: <Code className="w-5 h-5" />, tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'] },
  { name: 'Backend', icon: <Server className="w-5 h-5" />, tags: ['Python', 'Node.js', 'Java', 'C++', 'REST APIs'] },
  { name: 'AI / ML', icon: <Layers className="w-5 h-5" />, tags: ['TensorFlow', 'scikit-learn', 'Computer Vision', 'NLP', 'Model Deployment'] },
  { name: 'Database & DevOps', icon: <Database className="w-5 h-5" />, tags: ['MySQL', 'MongoDB', 'Git', 'Docker', 'AWS'] },
];

const stats = [
  { value: '5+', label: 'Projects Built', icon: <Rocket className="w-4 h-4" /> },
  { value: '3', label: 'Hackathons', icon: <Trophy className="w-4 h-4" /> },
  { value: '0-1', label: 'Yrs Experience', icon: <Briefcase className="w-4 h-4" /> },
];

const education = [
  {
    degree: "BCA — AI & ML Specialization",
    institution: "Galgotias University",
    duration: "2023 – Present",
    details: "Industry-oriented program focused on software development and AI/ML.",
    icon: <GraduationCap className="w-4 h-4" />,
    active: true,
  },
  {
    degree: "High School",
    institution: "Dr. A.K. Public School",
    duration: "2019 – 2021",
    details: "Completed with distinction in Computer Science.",
    icon: <BookOpen className="w-4 h-4" />,
    active: false,
  },
];

const achievements = [
  { title: "Smart India Hackathon 2024", description: "Secured 11th place at Galgotias University for an AI-powered Crop Disease Detection System.", category: "Hackathon", num: "01" },
  { title: "Code Astraa Hackathon 2025", description: "Finalist at Code Astraa 2025, organised by Galgotias University and IEEE.", category: "Hackathon", num: "02" },
  { title: "UP International Trade Show 2024", description: "Presented the Crop Disease Detection System to 2,000+ attendees at a government industry event.", category: "Presentation", num: "03" },
  { title: "Open Source Contributor", description: "Active contributor to open-source projects on GitHub, focused on web tools and automation.", category: "Open Source", num: "04" },
  { title: "Smart India Hackathon 2025", description: "Secured 34th place at Galgotias University for an Gopalan AI.", category: "Hackathon", num: "05" },
];

const AboutSection = () => {
  const pathRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: pathRef,
    offset: ["start 80%", "end 20%"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineHeight = useTransform(pathLength, [0, 1], ['0%', '100%']);
  const dot2Opacity = useTransform(pathLength, [0.28, 0.45], [0, 1]);
  const dot3Opacity = useTransform(pathLength, [0.58, 0.75], [0, 1]);
  const dot4Opacity = useTransform(pathLength, [0.82, 1.0], [0, 1]);

  const contentColRef = useRef<HTMLDivElement>(null);
  const skillsSectionRef = useRef<HTMLDivElement>(null);
  const achievesSectionRef = useRef<HTMLDivElement>(null);
  const [skillsPct, setSkillsPct] = useState(42);
  const [achievePct, setAchievePct] = useState(74);

  useEffect(() => {
    const calc = () => {
      if (!contentColRef.current || !skillsSectionRef.current || !achievesSectionRef.current) return;
      const h = contentColRef.current.offsetHeight;
      if (h === 0) return;
      setSkillsPct((skillsSectionRef.current.offsetTop / h) * 100);
      setAchievePct((achievesSectionRef.current.offsetTop / h) * 100);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  return (
    <section id="about" className="py-32 relative overflow-hidden" style={{ background: "#0a0a16" }}>

      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "linear-gradient(rgba(110,86,207,1) 1px, transparent 1px), linear-gradient(90deg, rgba(110,86,207,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Ambient glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(110,86,207,0.12) 0%, transparent 70%)", filter: "blur(40px)" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-24 text-center">
          <span className="text-lg font-mono tracking-[0.2em] uppercase font-bold" style={{ color: "#a78bfa" }}>About Me</span>
          <h2 className="mt-4 font-black" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", color: "#f0f0ff", lineHeight: 1.1 }}>
            Developer. Builder.{" "}
            <span style={{
              background: "linear-gradient(135deg, #5b21b6 0%, #7c3aed 40%, #a78bfa 70%, #e9d5ff 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Problem Solver.
            </span>
          </h2>
        </motion.div>

        {/* ── Profile + Stats ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">

          {/* Photo */}
          <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="relative max-w-sm mx-auto lg:mx-0 pb-8 pr-6 sm:pr-0 sm:pb-0">
              {/* Main photo */}
              <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(110,86,207,0.25)" }}>
                <img src="/media/aryan2.jpg" alt="Aryan Singh"
                  className="w-full object-cover object-center"
                  style={{ aspectRatio: "4/5" }} />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-3 right-0 sm:-bottom-6 sm:-right-6 px-4 sm:px-5 py-3 sm:py-4 rounded-2xl"
                style={{
                  background: "rgba(10,10,22,0.9)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(110,86,207,0.35)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#4ade80" }} />
                  <span className="text-xs font-mono" style={{ color: "#94a3b8" }}>Available for work</span>
                </div>
                <div className="text-sm font-semibold" style={{ color: "#e2d9f3" }}>Open to opportunities</div>
              </motion.div>

              {/* Purple glow behind */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full -z-10"
                style={{ background: "radial-gradient(circle, rgba(110,86,207,0.25), transparent 70%)" }} />
            </div>
          </motion.div>

          {/* Bio + stats */}
          <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col gap-7">

            <p className="text-lg leading-relaxed" style={{ color: "#cbd5e1", lineHeight: 1.85 }}>
              I'm a Full Stack Developer and AI/ML engineer at Galgotias University. I build things that solve real problems — from disease detection models for farmers to mental health chatbots.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#94a3b8", lineHeight: 1.85 }}>
              My work has been presented at government missions and industry events, which shaped how I approach every project — build to ship, not just to demo.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 w-fit px-3 py-2 rounded-lg"
              style={{ background: "rgba(110,86,207,0.08)", border: "1px solid rgba(110,86,207,0.18)" }}>
              <MapPin className="w-3.5 h-3.5" style={{ color: "#a78bfa" }} />
              <span className="text-xs font-medium" style={{ color: "#a78bfa" }}>Noida, India</span>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-2">
              {stats.map((s, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center justify-center py-3 sm:py-5 px-1 rounded-2xl text-center"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1.5px solid rgba(110,86,207,0.35)" }}
                >
                  <div className="mb-1.5" style={{ color: "#a78bfa" }}>{s.icon}</div>
                  <div className="text-lg sm:text-2xl font-black mb-0.5" style={{ color: "#f0f0ff" }}>{s.value}</div>
                  <div className="text-xs" style={{ color: "#94a3b8", fontSize: "clamp(9px, 2.5vw, 12px)" }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Education → Achievements path container ── */}
        <div ref={pathRef} className="flex gap-8">

          {/* Left column: scroll-animated connecting line */}
          <div className="relative shrink-0 w-8 hidden md:block">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px]">
              {/* Growing animated line only — no track */}
              <motion.div className="absolute top-0 left-0 right-0" style={{ height: lineHeight, background: 'linear-gradient(to bottom, #7c3aed, #8b5cf6, #a78bfa, #c4b5fd)', boxShadow: '0 0 10px rgba(124,58,237,0.45)' }} />
              {/* Dot — Education (top) */}
              <div className="absolute top-0 left-1/2 w-3 h-3 rounded-full" style={{ background: '#7c3aed', boxShadow: '0 0 14px rgba(124,58,237,1)', transform: 'translateX(-50%) translateY(-50%)' }} />
              {/* Dot — Skills (aligned to heading) */}
              <motion.div className="absolute left-1/2 w-3 h-3 rounded-full" style={{ top: `${skillsPct}%`, transform: 'translateX(-50%) translateY(-50%)', background: '#8b5cf6', boxShadow: '0 0 14px rgba(139,92,246,1)', opacity: dot2Opacity }} />
              {/* Dot — Achievements (aligned to heading) */}
              <motion.div className="absolute left-1/2 w-3 h-3 rounded-full" style={{ top: `${achievePct}%`, transform: 'translateX(-50%) translateY(-50%)', background: '#a78bfa', boxShadow: '0 0 14px rgba(167,139,250,1)', opacity: dot3Opacity }} />
              {/* Dot — end */}
              <motion.div className="absolute bottom-0 left-1/2 w-3 h-3 rounded-full" style={{ transform: 'translateX(-50%) translateY(50%)', background: '#c4b5fd', boxShadow: '0 0 14px rgba(196,181,253,1)', opacity: dot4Opacity }} />
            </div>
          </div>

          {/* Right column: all section content */}
          <div ref={contentColRef} className="flex-1 min-w-0 relative">

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-32">
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "#a78bfa" }}>Education</span>
          <h3 className="mt-3 mb-12 text-2xl font-bold" style={{ color: "#f0f0ff" }}>Academic Background</h3>

          <div className="flex flex-col gap-10">
            {education.map((edu, i) => (
              <PathReveal key={i} pathLength={pathLength} start={i * 0.1} end={i * 0.1 + 0.18}>
                <div className="p-6 rounded-2xl transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.03)", border: `1.5px solid ${edu.active ? "rgba(110,86,207,0.65)" : "rgba(110,86,207,0.35)"}` }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div className="font-semibold text-base" style={{ color: "#e2d9f3" }}>{edu.degree}</div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full shrink-0"
                      style={{ background: "rgba(110,86,207,0.12)", color: edu.active ? "#c4b5fd" : "#94a3b8", border: "1px solid rgba(110,86,207,0.3)" }}>
                      {edu.duration}
                    </span>
                  </div>
                  <div className="text-sm font-medium mb-2" style={{ color: "#a78bfa" }}>{edu.institution}</div>
                  <div className="text-sm" style={{ color: "#94a3b8" }}>{edu.details}</div>
                </div>
              </PathReveal>
            ))}
          </div>
        </motion.div>

        {/* ── Skills ── */}
        <motion.div ref={skillsSectionRef} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-32">
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "#a78bfa" }}>Skills</span>
          <h3 className="mt-3 mb-12 text-2xl font-bold" style={{ color: "#f0f0ff" }}>What I Work With</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {skills.map((skill, i) => (
              <PathReveal key={i} pathLength={pathLength} start={0.32 + i * 0.06} end={0.32 + i * 0.06 + 0.14} className="h-full">
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl group cursor-default transition-all duration-300 h-full"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1.5px solid rgba(110,86,207,0.35)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(110,86,207,0.75)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(110,86,207,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(110,86,207,0.35)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(110,86,207,0.2)", color: "#a78bfa" }}>
                    {skill.icon}
                  </div>
                  <span className="font-semibold" style={{ color: "#f0f0ff" }}>{skill.name}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag, j) => (
                    <span key={j} className="text-xs px-3 py-1.5 rounded-full transition-colors duration-200"
                      style={{ background: "rgba(110,86,207,0.12)", border: "1px solid rgba(110,86,207,0.3)", color: "#cbd5e1" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                </motion.div>
              </PathReveal>
            ))}
          </div>
        </motion.div>

        {/* ── Achievements ── */}
        <motion.div ref={achievesSectionRef} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "#a78bfa" }}>Achievements</span>
          <h3 className="mt-3 mb-12 text-2xl font-bold" style={{ color: "#f0f0ff" }}>Milestones</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {achievements.map((ach, i) => (
              <PathReveal key={i} pathLength={pathLength} start={0.65 + i * 0.06} end={0.65 + i * 0.06 + 0.13} className="h-full">
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="relative p-6 rounded-2xl overflow-hidden transition-all duration-300 group h-full"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1.5px solid rgba(110,86,207,0.35)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(110,86,207,0.75)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(110,86,207,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(110,86,207,0.35)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  <div className="absolute top-3 right-4 font-black select-none pointer-events-none"
                    style={{ fontSize: "4rem", lineHeight: 1, color: "rgba(110,86,207,0.07)" }}>
                    {ach.num}
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(110,86,207,0.15)" }}>
                      <Award className="w-4 h-4" style={{ color: "#a78bfa" }} />
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(110,86,207,0.15)", border: "1px solid rgba(110,86,207,0.35)", color: "#c4b5fd" }}>
                      {ach.category}
                    </span>
                  </div>

                  <div className="font-semibold mb-2" style={{ color: "#e2d9f3" }}>{ach.title}</div>
                  <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{ach.description}</p>
                </motion.div>
              </PathReveal>
            ))}
          </div>
        </motion.div>

          </div>{/* close content column */}

        </div>{/* close pathRef wrapper */}

      </div>
    </section>
  );
};

export default AboutSection;
