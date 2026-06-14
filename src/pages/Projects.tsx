import { useState, useRef, useEffect } from 'react';
import { ExternalLink, ArrowLeft, ChevronLeft, ChevronRight, Code2, Users, Sparkles, X, ZoomIn, ListChecks } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

/* ── Types ──────────────────────────────────────────────────────── */
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  features: string[];
  projectDetails: string;
  teamDetails: string;
  images: string[];
  accent: string;
}

/* ── Data ───────────────────────────────────────────────────────── */
const projects: Project[] = [
  {
    id: 1,
    title: "PAWS — Pet Adoption & Welfare System",
    description: "Full-stack platform connecting adopters, shelters & pet care services with real-time listings and automated adoption workflows.",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Python", "GSAP", "Tailwind CSS"],
    imageUrl: "/Projectsimages/pawsimage.png",
    demoUrl: "https://thepawss.netlify.app/",
    githubUrl: "#",
    accent: "#a78bfa",
    features: [
      "Responsive interface for browsing and applying for adoptions",
      "Automated shelter management for listings, applications, and pet health records",
      "Integrated e-commerce for pet products and services",
      "Cross-platform mobile optimization and intuitive navigation",
      "GitHub-hosted architecture with automated deployment workflows",
    ],
    projectDetails: "PAWS bridges the gap between animal shelters and potential pet adopters through a user-friendly, scalable digital platform. Catering to three key groups — adopters, shelters, and admins — it enhances transparency in the adoption process and ensures shelters can efficiently manage animals and applicants.",
    teamDetails: "Solo project. Responsible for full-stack architecture, UI/UX design, backend API, and deployment.",
    images: ["/Projectmultiimages/id5-1.png","/Projectmultiimages/id5-2.png","/Projectmultiimages/id5-3.png","/Projectmultiimages/id5-4.png","/Projectmultiimages/id5-5.png","/Projectmultiimages/id5-6.png"],
  },
  {
    id: 2,
    title: "CBT Chatbot — Mental Health Support",
    description: "24/7 AI-powered Cognitive Behavioural Therapy chatbot delivering grounding techniques. Finalist at Code Astraa Hackathon 2025 (Galgotias × IEEE).",
    tags: ["Python", "React", "FastAPI", "NLP", "Tailwind CSS"],
    imageUrl: "/Projectsimages/Screenshot 2025-04-04 213250.png",
    demoUrl: "#",
    githubUrl: "#",
    accent: "#818cf8",
    features: [
      "Real-time conversation with an AI therapist",
      "Grounding techniques: 5-4-3-2-1, guided breathing",
      "Mind training games & meditation exercises",
      "Talk with customisable avatar",
      "User-friendly, empathetic interface",
    ],
    projectDetails: "Developed for Code Astraa Hackathon 2025 (Galgotias University × IEEE). Uses NLP to simulate CBT sessions and provide grounding techniques to students experiencing late-night anxiety. Focused on creating an empathetic and instantly accessible support system.",
    teamDetails: "Team project — Hackathon finalist. I led backend development, NLP integration, and FastAPI endpoints.",
    images: ["/Projectmultiimages/id2-1.png","/Projectmultiimages/id2-2.png","/Projectmultiimages/id2-3.png","/Projectmultiimages/id2-4.png","/Projectmultiimages/id2-5.png","/Projectmultiimages/id2-6.png","/Projectmultiimages/id2-7.png"],
  },
  {
    id: 3,
    title: "AI Crop Disease Prediction System",
    description: "Detects crop diseases from field images using computer vision. Placed 11th at GU Hackathon 2024, recognised at SIH 2024, and presented to 2,000+ at UP Trade Show.",
    tags: ["Python", "TensorFlow", "OpenCV", "React", "JavaScript", "MySQL"],
    imageUrl: "/Projectsimages/Screenshot 2025-03-07 010504.png",
    demoUrl: "https://agrovisionn.netlify.app/",
    githubUrl: "#",
    accent: "#c4b5fd",
    features: [
      "Real-time disease detection & prediction from crop images",
      "AI-powered plant care recommendations",
      "Educational media resource for farmers",
      "Finance page to track daily farming expenses",
      "Responsive, space-themed design",
    ],
    projectDetails: "Built a machine learning system using TensorFlow/Keras to identify crop diseases from images. Presented at the UP International Trade Show 2024 to 2,000+ attendees, and recognised at Smart India Hackathon 2024. 11th place at GU Hackathon 2024.",
    teamDetails: "3-member university team. My role covered frontend development, UI/UX, and API integration.",
    images: ["/Projectmultiimages/id1-1.png","/Projectmultiimages/id1-2.png","/Projectmultiimages/id1-3.png","/Projectmultiimages/id1-4.png"],
  },
  {
    id: 4,
    title: "Smart Publications Summary Generator",
    description: "NLP tool for faculty to automatically generate standardised academic publication summaries and citation details for CVs, portfolios, and grant applications.",
    tags: ["React", "Node.js", "Python", "NLP", "JavaScript"],
    imageUrl: "/Projectsimages/Screenshot 2025-03-24 231559.png",
    demoUrl: "https://citecraft.netlify.app/",
    githubUrl: "#",
    accent: "#8b5cf6",
    features: [
      "Summarise academic publications in a concise, standardised format",
      "Auto-generate complete citation details with one click",
      "Highlight research impact and contributions",
      "Build polished profiles for CVs and institutional websites",
    ],
    projectDetails: "Utilises NLP models to extract key information from academic papers and generate summaries and citations. Frontend allows upload or manual input. Backend handles processing and summary generation using Python NLP pipelines.",
    teamDetails: "2-member university project. I handled backend development, NLP model integration, and API design.",
    images: ["/Projectmultiimages/id3-1.png","/Projectmultiimages/id3-2.png","/Projectmultiimages/id3-3.png","/Projectmultiimages/id3-4.png","/Projectmultiimages/id3-5.png","/Projectmultiimages/id3-6.png"],
  },
  {
    id: 5,
    title: "Aapki Meet — Online Meeting Platform",
    description: "Modern online meeting platform with AI features — built for business meetings, college classes, and team collaboration.",
    tags: ["React", "Firebase", "Node.js", "WebRTC", "JavaScript", "CSS"],
    imageUrl: "/Projectsimages/Screenshot 2025-04-12 164856.png",
    demoUrl: "https://aapkimeet.netlify.app/",
    githubUrl: "#",
    accent: "#7c3aed",
    features: [
      "Real-time video conferencing via WebRTC",
      "Screen sharing and collaboration tools",
      "AI-powered meeting summaries & transcription",
      "Customisable meeting rooms",
      "Integration with popular productivity tools",
    ],
    projectDetails: "Built a feature-rich meeting platform using WebRTC for real-time communication, Firebase for authentication and real-time database, and explored AI integration for transcription and summarisation.",
    teamDetails: "Solo project. Explored real-time communication technologies and AI-assisted meeting tools.",
    images: ["/Projectmultiimages/id4-1.png","/Projectmultiimages/id4-2.png","/Projectmultiimages/id4-3.png","/Projectmultiimages/id4-4.png","/Projectmultiimages/id4-5.png","/Projectmultiimages/id4-6.png"],
  },
];

/* ── Card ───────────────────────────────────────────────────────── */
const ProjectCard = ({
  project, index, onDetails,
}: { project: Project; index: number; onDetails: (p: Project) => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className="group flex flex-col rounded-2xl overflow-hidden"
    style={{
      background: 'rgba(255,255,255,0.025)',
      border: '1.5px solid rgba(110,86,207,0.22)',
      boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
      transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
    }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLElement;
      el.style.borderColor = `${project.accent}60`;
      el.style.boxShadow = `0 12px 40px rgba(0,0,0,0.45), 0 0 32px ${project.accent}18`;
      el.style.transform = 'translateY(-5px)';
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLElement;
      el.style.borderColor = 'rgba(110,86,207,0.22)';
      el.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
      el.style.transform = 'translateY(0)';
    }}
  >
    {/* Image */}
    <div className="relative overflow-hidden" style={{ height: 200 }}>
      <img src={project.imageUrl} alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 transition-opacity duration-300"
        style={{ background: 'linear-gradient(to top, rgba(10,10,22,0.92) 0%, rgba(10,10,22,0.4) 50%, transparent 100%)', opacity: 0.7 }} />

      {/* Project number */}
      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg font-mono text-xs font-bold"
        style={{ background: `${project.accent}28`, border: `1px solid ${project.accent}50`, color: project.accent }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Hover action buttons */}
      <div className="absolute inset-0 flex items-end justify-center pb-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="flex gap-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
          {project.demoUrl !== '#' && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
              style={{ background: project.accent, color: '#fff', boxShadow: `0 0 16px ${project.accent}60` }}
              onClick={e => e.stopPropagation()}>
              <ExternalLink size={12} /> Live Demo
            </a>
          )}
          <button onClick={() => onDetails(project)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
            style={{ background: 'rgba(10,10,22,0.85)', color: '#e2d9f3', border: '1.5px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}>
            <Sparkles size={12} /> Details
          </button>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 p-5">
      <h3 className="font-bold leading-snug mb-2 transition-colors duration-200 group-hover:text-white"
        style={{ fontSize: 15, color: '#e2d9f3' }}>
        {project.title}
      </h3>
      <p className="flex-1 mb-4 line-clamp-2" style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6 }}>
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.slice(0, 4).map(tag => (
          <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-medium"
            style={{ background: `${project.accent}12`, border: `1px solid ${project.accent}30`, color: project.accent }}>
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="px-2.5 py-1 rounded-lg text-xs font-medium"
            style={{ background: 'rgba(110,86,207,0.08)', border: '1px solid rgba(110,86,207,0.2)', color: '#64748b' }}>
            +{project.tags.length - 4}
          </span>
        )}
      </div>
    </div>
  </motion.div>
);

/* ── Main Page ──────────────────────────────────────────────────── */
const Projects = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [detailsOpen, setDetailsOpen]       = useState(false);
  const [selected, setSelected]             = useState<Project | null>(null);
  const [lightboxIdx, setLightboxIdx]       = useState<number | null>(null);
  const [currentImg, setCurrentImg]         = useState(0);
  const galleryRef                          = useRef<HTMLDivElement>(null);

  const openDetails = (p: Project) => { setSelected(p); setCurrentImg(0); setDetailsOpen(true); };

  const scrollToImg = (idx: number) => {
    setCurrentImg(idx);
    const el = galleryRef.current?.children[idx] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  return (
    <div style={{ background: '#0a0a16', minHeight: '100vh' }}>
      <Navbar />

      {/* Ambient glow */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '5%', left: '30%', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '20%', width: 400, height: 300, background: 'radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      {/* ── Header ──────────────────────────────────────────── */}
      <div style={{ position: 'relative', zIndex: 1, padding: 'clamp(80px, 15vw, 120px) 0 48px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <Link to="/" className="inline-flex items-center gap-2 mb-10 text-sm font-medium transition-colors duration-200"
              style={{ color: '#64748b' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#a78bfa')}
              onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}>
              <ArrowLeft size={15} /> Back to Portfolio
            </Link>
          </motion.div>

          <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }}>
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: '#7c3aed', letterSpacing: '0.2em' }}>
              Complete Work
            </p>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.1, margin: 0 }}>
              <span style={{ color: '#f0f0ff' }}>All My </span>
              <span style={{ background: 'linear-gradient(135deg, #c4b5fd, #8b5cf6, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Projects
              </span>
            </h1>
            <p className="mt-4" style={{ color: '#64748b', fontSize: 16, maxWidth: 520, lineHeight: 1.7 }}>
              A showcase of full-stack apps, AI systems, and hackathon builds — each solving a real-world problem.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { val: '5', label: 'Projects' },
                { val: '3', label: 'Hackathons' },
                { val: '2K+', label: 'Trade Show Audience' },
              ].map(({ val, label }) => (
                <div key={label} className="px-5 py-3 rounded-xl"
                  style={{ background: 'rgba(110,86,207,0.08)', border: '1px solid rgba(110,86,207,0.2)' }}>
                  <span style={{ fontSize: 22, fontWeight: 800, color: '#a78bfa' }}>{val}</span>
                  <span className="ml-2" style={{ fontSize: 13, color: '#64748b' }}>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Grid ────────────────────────────────────────────── */}
      <div style={{ position: 'relative', zIndex: 1, padding: '0 0 100px' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} onDetails={openDetails} />
            ))}
          </div>
        </div>
      </div>

      <Footer />

      {/* ── Details Modal ────────────────────────────────────── */}
      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent
          className="p-0 overflow-hidden flex flex-col"
          style={{
            maxWidth: '900px', width: '92vw', maxHeight: '90vh',
            background: '#0d0d1a',
            border: '1.5px solid rgba(110,86,207,0.3)',
            borderRadius: 20,
            boxShadow: '0 32px 80px rgba(0,0,0,0.8)',
          }}
        >
          {selected && (
            <>
              {/* Modal header */}
              <div className="flex items-center justify-between px-4 sm:px-7 py-4 sm:py-5 shrink-0"
                style={{ borderBottom: '1px solid rgba(110,86,207,0.18)', background: 'rgba(255,255,255,0.02)' }}>
                <div>
                  <p className="font-mono text-xs tracking-widest uppercase mb-1"
                    style={{ color: selected.accent, letterSpacing: '0.16em' }}>Project Details</p>
                  <h2 style={{ fontSize: 17, fontWeight: 700, color: '#f0f0ff', margin: 0, lineHeight: 1.3 }}>{selected.title}</h2>
                </div>
                <button onClick={() => setDetailsOpen(false)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{ background: 'rgba(110,86,207,0.1)', border: '1px solid rgba(110,86,207,0.2)', color: '#94a3b8' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(110,86,207,0.22)'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(110,86,207,0.1)'; (e.currentTarget as HTMLElement).style.color = '#94a3b8'; }}>
                  <X size={16} />
                </button>
              </div>

              {/* Scrollable body */}
              <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(110,86,207,0.3) transparent' }}>

                {/* Screenshot gallery */}
                {selected.images.length > 0 && (
                  <div className="px-4 sm:px-7 pt-6 pb-2">
                    <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: '#475569', letterSpacing: '0.16em' }}>Screenshots</p>
                    <div className="relative">
                      <div ref={galleryRef}
                        className="flex gap-4 overflow-x-auto pb-3"
                        style={{ scrollbarWidth: 'none', scrollSnapType: 'x mandatory' }}>
                        {selected.images.map((src, idx) => (
                          <div key={idx} className="relative shrink-0 group/img"
                            style={{ scrollSnapAlign: 'start' }}>
                            <img src={src} alt={`Screenshot ${idx + 1}`}
                              className="h-48 w-auto rounded-xl object-cover cursor-zoom-in transition-all duration-300"
                              style={{
                                border: idx === currentImg ? `2px solid ${selected.accent}` : '2px solid rgba(110,86,207,0.2)',
                                boxShadow: idx === currentImg ? `0 0 20px ${selected.accent}40` : 'none',
                              }}
                              onClick={() => { setLightboxIdx(idx); scrollToImg(idx); }} />
                            <div className="absolute inset-0 rounded-xl flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-200"
                              style={{ background: 'rgba(0,0,0,0.4)' }}>
                              <ZoomIn size={20} color="#fff" />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Prev/Next */}
                      {currentImg > 0 && (
                        <button onClick={() => scrollToImg(currentImg - 1)}
                          className="absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                          style={{ background: 'rgba(110,86,207,0.8)', border: '1px solid rgba(196,181,253,0.3)', color: '#fff' }}>
                          <ChevronLeft size={16} />
                        </button>
                      )}
                      {currentImg < selected.images.length - 1 && (
                        <button onClick={() => scrollToImg(currentImg + 1)}
                          className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                          style={{ background: 'rgba(110,86,207,0.8)', border: '1px solid rgba(196,181,253,0.3)', color: '#fff' }}>
                          <ChevronRight size={16} />
                        </button>
                      )}
                    </div>

                    {/* Dot indicators */}
                    <div className="flex justify-center gap-1.5 mt-3">
                      {selected.images.map((_, idx) => (
                        <button key={idx} onClick={() => scrollToImg(idx)}
                          className="rounded-full transition-all duration-200"
                          style={{ width: idx === currentImg ? 20 : 6, height: 6, background: idx === currentImg ? selected.accent : 'rgba(110,86,207,0.3)' }} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Info cards */}
                <div className="grid sm:grid-cols-2 gap-4 px-4 sm:px-7 pt-5 pb-2">
                  {/* Overview */}
                  <div className="p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(110,86,207,0.18)' }}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${selected.accent}20` }}>
                        <Code2 size={13} color={selected.accent} />
                      </div>
                      <span style={{ fontSize: 13, fontWeight: 700, color: '#e2d9f3' }}>Project Overview</span>
                    </div>
                    <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.65 }}>{selected.projectDetails}</p>
                  </div>

                  {/* Team */}
                  <div className="p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(110,86,207,0.18)' }}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${selected.accent}20` }}>
                        <Users size={13} color={selected.accent} />
                      </div>
                      <span style={{ fontSize: 13, fontWeight: 700, color: '#e2d9f3' }}>Team &amp; Role</span>
                    </div>
                    <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.65 }}>{selected.teamDetails}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="px-4 sm:px-7 pt-2 pb-7">
                  <div className="p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(110,86,207,0.18)' }}>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${selected.accent}20` }}>
                        <ListChecks size={13} color={selected.accent} />
                      </div>
                      <span style={{ fontSize: 13, fontWeight: 700, color: '#e2d9f3' }}>Key Features</span>
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {selected.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: selected.accent }} />
                          <span style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.6 }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Demo button */}
                  {selected.demoUrl !== '#' && (
                    <div className="mt-5 flex justify-end">
                      <a href={selected.demoUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                        style={{ background: selected.accent, color: '#fff', boxShadow: `0 0 20px ${selected.accent}50` }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; }}>
                        <ExternalLink size={14} /> View Live Demo
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* ── Lightbox ─────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIdx !== null && selected?.images && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center"
            style={{ zIndex: 9999, background: 'rgba(0,0,0,0.93)', backdropFilter: 'blur(12px)' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightboxIdx(null)}>

            <motion.img
              src={selected.images[lightboxIdx]}
              alt={`Lightbox ${lightboxIdx + 1}`}
              className="rounded-2xl"
              style={{ maxHeight: '88vh', maxWidth: '90vw', objectFit: 'contain', border: '1px solid rgba(110,86,207,0.3)' }}
              initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
            />

            {/* Prev/Next in lightbox */}
            {lightboxIdx > 0 && (
              <button onClick={e => { e.stopPropagation(); setLightboxIdx(lightboxIdx - 1); }}
                className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(110,86,207,0.7)', color: '#fff' }}>
                <ChevronLeft size={20} />
              </button>
            )}
            {lightboxIdx < selected.images.length - 1 && (
              <button onClick={e => { e.stopPropagation(); setLightboxIdx(lightboxIdx + 1); }}
                className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(110,86,207,0.7)', color: '#fff' }}>
                <ChevronRight size={20} />
              </button>
            )}

            <button onClick={() => setLightboxIdx(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>
              <X size={16} />
            </button>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-mono"
              style={{ color: 'rgba(255,255,255,0.4)' }}>
              {lightboxIdx + 1} / {selected.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
