import { useState, useRef } from 'react';
import { ExternalLink, ArrowRight, Code, Zap, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl: string;
  features?: string[];
  projectDetails: string;
  teamDetails: string;
  images?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Online Meeting Platform",
    description: "A modern online meeting platform with AI focused on creative professionals — business work, college classes, team meetings, and more.",
    tags: ["React", "Firebase", "GraphQL", "Node.js", "HTML", "CSS", "JavaScript"],
    imageUrl: "/Projectsimages/Screenshot 2025-04-12 164856.png",
    demoUrl: "https://aapkimeet.netlify.app/",
    features: [
      "Real-time video conferencing",
      "Screen sharing and collaboration tools",
      "AI-powered meeting summaries",
      "Customizable meeting rooms",
      "Integration with popular productivity tools",
    ],
    projectDetails: "Built a feature-rich online meeting platform using WebRTC for real-time communication. Integrated Firebase for authentication and real-time database features. Explored AI integration for transcription and summarization.",
    teamDetails: "Team project aimed at exploring real-time communication technologies and AI applications.",
    images: ["/Projectmultiimages/id4-1.png","/Projectmultiimages/id4-2.png","/Projectmultiimages/id4-3.png","/Projectmultiimages/id4-4.png","/Projectmultiimages/id4-5.png","/Projectmultiimages/id4-6.png"],
  },
  {
    id: 2,
    title: "Paws",
    description: "PAWS is an innovative digital platform designed to streamline the pet adoption process, bridging the gap between adopters, shelters, and pet care services.",
    tags: ["React", "Node.js", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
    imageUrl: "/Projectsimages/pawsimage.png",
    demoUrl: "https://thepawss.netlify.app/",
    features: [
      "Responsive interface for browsing and applying for adoptions",
      "Automated workflows for shelters to manage listings and applications",
      "Integrated e-commerce for pet-related products",
      "GitHub-hosted architecture with automated deployment",
      "Cross-platform mobile optimization",
    ],
    projectDetails: "The PAWS project bridges the gap between animal shelters and potential pet adopters through a user-friendly, scalable digital platform. It caters to adopters, shelters, and administrators with features tailored to their needs.",
    teamDetails: "Solo project exploring a comprehensive ecosystem for pet adoption and care management.",
    images: ["/Projectmultiimages/id5-1.png","/Projectmultiimages/id5-2.png","/Projectmultiimages/id5-3.png","/Projectmultiimages/id5-4.png","/Projectmultiimages/id5-5.png","/Projectmultiimages/id5-6.png"],
  },
  {
    id: 3,
    title: "Smart Publications Summary Generator",
    description: "An AI tool for faculty members to manage and showcase academic publications — auto-generating summaries, citations, and polished profiles.",
    tags: ["React", "JavaScript", "HTML", "CSS", "Node.js", "Python", "NLP"],
    imageUrl: "/Projectsimages/Screenshot 2025-03-24 231559.png",
    demoUrl: "https://citecraft.netlify.app/",
    features: [
      "Summarize publications in a concise, standardized format",
      "Generate complete citation details with one click",
      "Highlight research impact and contributions",
      "Build polished profiles for CVs and institutional websites",
    ],
    projectDetails: "Utilizes NLP models to extract key information from academic papers and generate summaries and citations. Frontend allows users to upload or input publication details while the backend handles NLP processing.",
    teamDetails: "Developed in a team of two. I was responsible for frontend development and NLP integration.",
    images: ["/Projectmultiimages/id3-1.png","/Projectmultiimages/id3-2.png","/Projectmultiimages/id3-3.png","/Projectmultiimages/id3-4.png","/Projectmultiimages/id3-5.png","/Projectmultiimages/id3-6.png"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-32 relative overflow-hidden" style={{ background: '#0a0a16' }}>

      {/* Grid bg */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'linear-gradient(rgba(110,86,207,1) 1px, transparent 1px), linear-gradient(90deg, rgba(110,86,207,1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Ambient */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(110,86,207,0.08) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(110,86,207,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20 text-center">
          <span className="text-lg font-mono tracking-[0.2em] uppercase font-bold" style={{ color: '#a78bfa' }}>Work</span>
          <h2 className="mt-4 font-black" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#f0f0ff', lineHeight: 1.1 }}>
            Featured{' '}
            <span style={{
              background: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 40%, #a78bfa 70%, #e9d5ff 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Projects</span>
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: '#64748b', lineHeight: 1.8 }}>
            A selection of things I've built — from AI systems to full-stack web platforms.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.12 } }, hidden: {} }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              custom={i}
              className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1.5px solid rgba(110,86,207,0.25)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(110,86,207,0.55)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(110,86,207,0.04)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(110,86,207,0.18)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(110,86,207,0.25)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(10,10,22,0.85) 0%, rgba(10,10,22,0.2) 50%, transparent 100%)' }} />

                {/* Hover actions */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {project.demoUrl && project.demoUrl !== '#' && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white"
                      style={{ background: 'rgba(110,86,207,0.85)', border: '1px solid rgba(196,181,253,0.3)' }}>
                      <ExternalLink className="w-3 h-3" /> Live Demo
                    </a>
                  )}
                  <button
                    onClick={() => setSelected(project)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors duration-200"
                    style={{ background: 'rgba(10,10,22,0.8)', border: '1px solid rgba(110,86,207,0.4)', color: '#c4b5fd' }}>
                    <Sparkles className="w-3 h-3" /> Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold mb-2 line-clamp-1 transition-colors duration-200 group-hover:text-[#c4b5fd]"
                  style={{ color: '#f0f0ff', fontSize: '1rem' }}>
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed line-clamp-2 mb-4 flex-1" style={{ color: '#64748b' }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag, j) => (
                    <span key={j} className="text-xs px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(110,86,207,0.1)', border: '1px solid rgba(110,86,207,0.22)', color: '#94a3b8' }}>
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-xs px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(110,86,207,0.06)', border: '1px solid rgba(110,86,207,0.15)', color: '#64748b' }}>
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4}
          className="flex justify-center mt-14">
          <Link to="/projects">
            <button
              className="group flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300"
              style={{
                background: 'rgba(110,86,207,0.85)',
                border: '1.5px solid rgba(196,181,253,0.35)',
                boxShadow: '0 0 24px rgba(110,86,207,0.35)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(110,86,207,0.6)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(110,86,207,0.35)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              Explore All Projects
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </motion.div>

        {/* Process steps */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
          className="mt-32">
          <div className="text-center mb-14">
            <span className="text-xs font-mono tracking-[0.2em] uppercase font-bold" style={{ color: '#a78bfa' }}>How I work</span>
            <h3 className="mt-4 font-black" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#f0f0ff', lineHeight: 1.1 }}>
              My Process
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                icon: <Code className="w-5 h-5" />,
                title: 'Plan & Research',
                desc: 'Define goals, understand the problem space, and map out the technical architecture before writing a single line of code.',
              },
              {
                num: '02',
                icon: <Zap className="w-5 h-5" />,
                title: 'Design & Build',
                desc: 'Translate ideas into interfaces and implement the full stack — frontend, backend, and everything in between.',
              },
              {
                num: '03',
                icon: <Sparkles className="w-5 h-5" />,
                title: 'Test & Ship',
                desc: 'Validate functionality, polish UX details, and deploy with confidence — then monitor and iterate.',
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.3 + 1.5}
                className="p-6 rounded-2xl relative overflow-hidden transition-all duration-300 group"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1.5px solid rgba(110,86,207,0.2)' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(110,86,207,0.5)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(110,86,207,0.05)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(110,86,207,0.2)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
                }}
              >
                {/* Large number watermark */}
                <div className="absolute top-3 right-4 font-black select-none pointer-events-none"
                  style={{ fontSize: '5rem', lineHeight: 1, color: 'rgba(110,86,207,0.06)' }}>
                  {step.num}
                </div>

                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(110,86,207,0.15)', color: '#a78bfa' }}>
                  {step.icon}
                </div>
                <h4 className="font-bold mb-2" style={{ color: '#f0f0ff' }}>{step.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project details modal */}
      <Dialog open={!!selected} onOpenChange={open => { if (!open) { setSelected(null); setLightboxIdx(null); } }}>
        <DialogContent className="w-[95vw] max-w-4xl max-h-[90vh] p-0 overflow-hidden flex flex-col"
          style={{ background: '#0d0d1a', border: '1.5px solid rgba(110,86,207,0.3)', borderRadius: '20px' }}>

          {/* Modal header */}
          <div className="flex items-start justify-between px-4 sm:px-6 py-4 sm:py-6 shrink-0"
            style={{ borderBottom: '1px solid rgba(110,86,207,0.15)' }}>
            <div>
              <span className="text-xs font-mono tracking-widest uppercase mb-1 block" style={{ color: '#a78bfa' }}>Project</span>
              <h2 className="text-xl font-bold" style={{ color: '#f0f0ff' }}>{selected?.title}</h2>
            </div>
            <div className="flex items-center gap-2">
              {selected?.demoUrl && selected.demoUrl !== '#' && (
                <a href={selected.demoUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white"
                  style={{ background: 'rgba(110,86,207,0.7)', border: '1px solid rgba(196,181,253,0.3)' }}>
                  <ExternalLink className="w-3 h-3" /> Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Scrollable body */}
          <div className="overflow-y-auto flex-1 p-4 sm:p-6 space-y-6">

            {/* Image gallery */}
            {selected?.images && selected.images.length > 0 && (
              <div>
                <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: '#475569' }}>Screenshots</p>
                <div className="flex gap-4 overflow-x-auto pb-2" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(110,86,207,0.3) transparent' }}>
                  {selected.images.map((img, idx) => (
                    <button key={idx} onClick={() => setLightboxIdx(idx)} className="shrink-0 rounded-xl overflow-hidden transition-all duration-200"
                      style={{ border: '1.5px solid rgba(110,86,207,0.2)' }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(110,86,207,0.6)'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(110,86,207,0.2)'}>
                      <img src={img} alt={`Screenshot ${idx + 1}`} className="h-44 w-auto object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {selected?.tags && (
              <div className="flex flex-wrap gap-2">
                {selected.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full"
                    style={{ background: 'rgba(110,86,207,0.1)', border: '1px solid rgba(110,86,207,0.25)', color: '#a78bfa' }}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Overview */}
            {selected?.projectDetails && (
              <div className="p-5 rounded-xl" style={{ background: 'rgba(110,86,207,0.06)', border: '1px solid rgba(110,86,207,0.18)' }}>
                <p className="text-xs font-mono tracking-widest uppercase mb-2" style={{ color: '#7c6fcd' }}>Overview</p>
                <p className="text-sm leading-relaxed" style={{ color: '#cbd5e1' }}>{selected.projectDetails}</p>
              </div>
            )}

            {/* Team */}
            {selected?.teamDetails && (
              <div className="p-5 rounded-xl" style={{ background: 'rgba(110,86,207,0.06)', border: '1px solid rgba(110,86,207,0.18)' }}>
                <p className="text-xs font-mono tracking-widest uppercase mb-2" style={{ color: '#7c6fcd' }}>Team & Role</p>
                <p className="text-sm leading-relaxed" style={{ color: '#cbd5e1' }}>{selected.teamDetails}</p>
              </div>
            )}

            {/* Features */}
            {selected?.features && (
              <div className="p-5 rounded-xl" style={{ background: 'rgba(110,86,207,0.06)', border: '1px solid rgba(110,86,207,0.18)' }}>
                <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: '#7c6fcd' }}>Key Features</p>
                <ul className="space-y-2">
                  {selected.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: '#cbd5e1' }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#7c3aed' }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && selected?.images && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(12px)' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightboxIdx(null)}
          >
            <motion.img
              src={selected.images[lightboxIdx]}
              alt={`Preview ${lightboxIdx + 1}`}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl"
              style={{ border: '1.5px solid rgba(110,86,207,0.4)', boxShadow: '0 0 60px rgba(110,86,207,0.3)' }}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
            />
            <button onClick={() => setLightboxIdx(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(110,86,207,0.3)', border: '1px solid rgba(196,181,253,0.3)', color: '#e2d9f3' }}>
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
