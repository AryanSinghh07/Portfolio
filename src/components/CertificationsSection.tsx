import { motion } from 'framer-motion';
import { SiAmazonwebservices, SiCisco, SiHp } from 'react-icons/si';
import { FaTrophy, FaGraduationCap } from 'react-icons/fa6';
import { CalendarDays, BadgeCheck } from 'lucide-react';
import type { FC } from 'react';

// IBM 8-bar stripe logo (not in any react-icons package)
const IbmIcon: FC<{ size?: number; color?: string }> = ({ size = 22, color = '#4d80ff' }) => {
  const bars = [0, 3, 6, 9, 12, 15, 18, 21];
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-label="IBM">
      {bars.map(y => (
        <g key={y}>
          <rect x="0"  y={y} width="4"  height="2" fill={color} />
          <rect x="6"  y={y} width="8"  height="2" fill={color} />
          <rect x="16" y={y} width="8"  height="2" fill={color} />
        </g>
      ))}
    </svg>
  );
};

interface Cert {
  id: number;
  title: string;
  issuer: string;
  date: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: FC<any>;
  accent: string;
  tag: string;
}

const certs: Cert[] = [
  {
    id: 1,
    title: 'AWS Academy Graduate – AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Sep 2025',
    Icon: SiAmazonwebservices,
    accent: '#FF9900',
    tag: 'Cloud',
  },
  {
    id: 2,
    title: 'Smart India Hackathon 2024 and 2025 Winner',
    issuer: 'Smart India Hackathon',
    date: 'Sep 2024 & Sep 2025',
    Icon: FaTrophy,
    accent: '#a78bfa',
    tag: 'Hackathon',
  },
  {
    id: 3,
    title: 'Web Development',
    issuer: 'EduSkills Academy by AICTE',
    date: 'Aug 2025',
    Icon: FaGraduationCap,
    accent: '#c4b5fd',
    tag: 'Development',
  },
  {
    id: 4,
    title: 'Cisco Certified Network Associate Cyber Ops (CCNA)',
    issuer: 'Cisco',
    date: 'Jan 2025',
    Icon: SiCisco,
    accent: '#1BA0D7',
    tag: 'Networking',
  },
  {
    id: 5,
    title: 'Machine Learning With Python',
    issuer: 'IBM',
    date: 'Jan 2025',
    Icon: IbmIcon,
    accent: '#4d80ff',
    tag: 'AI / ML',
  },
  {
    id: 6,
    title: 'AI for Beginners',
    issuer: 'HP LIFE',
    date: 'Sep 2024',
    Icon: SiHp,
    accent: '#0096D6',
    tag: 'AI / ML',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] },
  }),
};

const CertificationsSection = () => (
  <section id="certifications" className="section-auto" style={{ background: '#0a0a16', padding: '100px 0 80px' }}>
    <div className="max-w-6xl mx-auto px-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="font-mono tracking-widest uppercase mb-4"
          style={{ color: '#7c3aed', fontSize: '11px', letterSpacing: '0.2em' }}>
          Credentials
        </p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, lineHeight: 1.15, margin: 0 }}>
          <span style={{ color: '#f0f0ff' }}>Certified &amp; </span>
          <span style={{
            background: 'linear-gradient(135deg, #c4b5fd, #8b5cf6, #a78bfa)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>Recognized</span>
        </h2>
        <p className="mt-3" style={{ color: '#64748b', fontSize: '15px', maxWidth: '480px' }}>
          Professional certifications and verified credentials from industry leaders.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -5, transition: { duration: 0.22 } }}
            className="flex flex-col p-6 rounded-2xl relative overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1.5px solid rgba(110,86,207,0.25)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.border = `1.5px solid ${cert.accent}60`;
              el.style.boxShadow = `0 8px 32px rgba(0,0,0,0.35), 0 0 24px ${cert.accent}18`;
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.border = '1.5px solid rgba(110,86,207,0.25)';
              el.style.boxShadow = '0 4px 24px rgba(0,0,0,0.25)';
            }}
          >
            {/* Corner glow */}
            <div style={{
              position: 'absolute', top: 0, right: 0,
              width: '130px', height: '130px',
              background: `radial-gradient(circle at top right, ${cert.accent}18 0%, transparent 70%)`,
              pointerEvents: 'none',
            }} />

            {/* Icon + tag */}
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${cert.accent}18`, border: `1.5px solid ${cert.accent}40` }}>
                <cert.Icon size={22} color={cert.accent} />
              </div>

              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                style={{
                  background: `${cert.accent}14`,
                  border: `1px solid ${cert.accent}35`,
                  color: cert.accent,
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                }}>
                <BadgeCheck size={10} />
                {cert.tag}
              </span>
            </div>

            {/* Title */}
            <h3 className="flex-1 leading-snug mb-3"
              style={{ fontSize: '14px', fontWeight: 600, color: '#e2d9f3', lineHeight: 1.5 }}>
              {cert.title}
            </h3>

            {/* Divider */}
            <div className="mb-3" style={{ height: '1px', background: 'rgba(110,86,207,0.15)' }} />

            {/* Issuer + date */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 500 }}>
                {cert.issuer}
              </span>
              <span className="flex items-center gap-1.5 shrink-0"
                style={{ fontSize: '11px', color: '#64748b' }}>
                <CalendarDays size={11} />
                {cert.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
