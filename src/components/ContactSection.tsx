import { useState } from 'react';
import { Send, Loader2, CheckCircle2, XCircle, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'aryan.singhh04@gmail.com',
    href: 'mailto:aryan.singhh04@gmail.com',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone',
    value: '+91 84334 19387',
    href: 'tel:+918433419387',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Location',
    value: 'Noida, India',
    href: null,
  },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/AryanSinghh07',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thearyansingh07/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/the_aryansingh_',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const inputBase: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  background: 'rgba(255,255,255,0.04)',
  border: '1.5px solid rgba(110,86,207,0.25)',
  borderRadius: '10px',
  color: '#e2d9f3',
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [honeypot, setHoneypot] = useState('');
  const [focused, setFocused] = useState<string | null>(null);
  const MESSAGE_MAX = 1000;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.id]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    if (honeypot.trim()) { setLoading(false); return; }

    const errs: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 2) errs.name = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(form.email)) errs.email = 'Please enter a valid email.';
    if (!form.subject.trim() || form.subject.trim().length < 3) errs.subject = 'Subject must be at least 3 characters.';
    if (!form.message.trim() || form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters.';
    if (form.message.length > MESSAGE_MAX) errs.message = `Message must be under ${MESSAGE_MAX} characters.`;

    if (Object.keys(errs).length) {
      setErrors(errs);
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setResult({ type: 'success', message: 'Message sent! I\'ll get back to you soon.' });
      setForm({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch {
      setResult({ type: 'error', message: 'Failed to send. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  const fieldStyle = (id: string): React.CSSProperties => ({
    ...inputBase,
    borderColor: errors[id]
      ? 'rgba(239,68,68,0.6)'
      : focused === id
      ? 'rgba(124,58,237,0.7)'
      : 'rgba(110,86,207,0.25)',
    boxShadow: focused === id && !errors[id] ? '0 0 0 3px rgba(124,58,237,0.12)' : 'none',
  });

  return (
    <section id="contact" className="py-32 relative overflow-hidden" style={{ background: '#0a0a16' }}>

      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'linear-gradient(rgba(110,86,207,1) 1px, transparent 1px), linear-gradient(90deg, rgba(110,86,207,1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(110,86,207,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20 text-center">
          <span className="text-lg font-mono tracking-[0.2em] uppercase font-bold" style={{ color: '#a78bfa' }}>Contact</span>
          <h2 className="mt-4 font-black" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#f0f0ff', lineHeight: 1.1 }}>
            Let's Build{' '}
            <span style={{
              background: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 40%, #a78bfa 70%, #e9d5ff 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Something Together
            </span>
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: '#64748b', lineHeight: 1.8 }}>
            Open to freelance, collaborations, and full-time opportunities. Drop a message and I'll get back to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left — contact info */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="lg:col-span-2 flex flex-col gap-6">

            {/* Info cards */}
            {contactInfo.map((info, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.4 + 1.2}
                className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1.5px solid rgba(110,86,207,0.2)' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(110,86,207,0.5)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(110,86,207,0.06)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(110,86,207,0.2)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
                }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(110,86,207,0.18)', color: '#a78bfa' }}>
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs font-mono tracking-wider uppercase mb-0.5" style={{ color: '#475569' }}>{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-sm font-medium transition-colors duration-200"
                      style={{ color: '#e2d9f3' }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#a78bfa'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#e2d9f3'}>
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium" style={{ color: '#e2d9f3' }}>{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Socials */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2.4}
              className="p-5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1.5px solid rgba(110,86,207,0.2)' }}>
              <p className="text-xs font-mono tracking-wider uppercase mb-4" style={{ color: '#475569' }}>Find me on</p>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{ background: 'rgba(110,86,207,0.12)', border: '1.5px solid rgba(110,86,207,0.2)', color: '#a78bfa' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(110,86,207,0.28)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(110,86,207,0.55)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(110,86,207,0.12)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(110,86,207,0.2)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    }}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1.6}
            className="lg:col-span-3 p-5 sm:p-8 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1.5px solid rgba(110,86,207,0.2)' }}>

            <h3 className="text-xl font-bold mb-6" style={{ color: '#f0f0ff' }}>Send a Message</h3>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <input type="text" id="website" value={honeypot} onChange={e => setHoneypot(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono tracking-wider uppercase mb-2" style={{ color: '#475569' }}>Name</label>
                  <input type="text" id="name" value={form.name} onChange={handleChange}
                    onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                    style={fieldStyle('name')} placeholder="Your name" />
                  {errors.name && <p className="mt-1.5 text-xs" style={{ color: '#f87171' }}>{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono tracking-wider uppercase mb-2" style={{ color: '#475569' }}>Email</label>
                  <input type="email" id="email" value={form.email} onChange={handleChange}
                    onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                    style={fieldStyle('email')} placeholder="your@email.com" />
                  {errors.email && <p className="mt-1.5 text-xs" style={{ color: '#f87171' }}>{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono tracking-wider uppercase mb-2" style={{ color: '#475569' }}>Subject</label>
                <input type="text" id="subject" value={form.subject} onChange={handleChange}
                  onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)}
                  style={fieldStyle('subject')} placeholder="What's this about?" />
                {errors.subject && <p className="mt-1.5 text-xs" style={{ color: '#f87171' }}>{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono tracking-wider uppercase mb-2" style={{ color: '#475569' }}>Message</label>
                <textarea id="message" rows={5} value={form.message} onChange={handleChange}
                  onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                  maxLength={MESSAGE_MAX}
                  style={{ ...fieldStyle('message'), resize: 'none' }}
                  placeholder="Tell me about your project or idea..." />
                <div className="mt-1 text-right text-xs" style={{ color: '#334155' }}>
                  {form.message.length}/{MESSAGE_MAX}
                </div>
                {errors.message && <p className="mt-1.5 text-xs" style={{ color: '#f87171' }}>{errors.message}</p>}
              </div>

              {result && (
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium"
                  style={{
                    background: result.type === 'success' ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)',
                    border: `1px solid ${result.type === 'success' ? 'rgba(34,197,94,0.25)' : 'rgba(239,68,68,0.25)'}`,
                    color: result.type === 'success' ? '#4ade80' : '#f87171',
                  }}>
                  {result.type === 'success'
                    ? <CheckCircle2 className="w-4 h-4 shrink-0" />
                    : <XCircle className="w-4 h-4 shrink-0" />}
                  {result.message}
                </div>
              )}

              <button type="submit" disabled={loading}
                className="relative w-full py-4 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: 'rgba(110,86,207,0.9)',
                  border: '1.5px solid rgba(196,181,253,0.4)',
                  boxShadow: '0 0 24px rgba(110,86,207,0.4)',
                }}
                onMouseEnter={e => {
                  if (!loading) {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(110,86,207,0.65)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(110,86,207,0.4)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <span className="flex items-center justify-center gap-2.5">
                  {loading ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Sending…</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
