import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Figma, Layout, Sparkles, ExternalLink } from 'lucide-react';

const tools = [
  { name: 'Figma', icon: <Figma className="w-5 h-5" />, color: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-500/30' },
  { name: 'Adobe XD', icon: <Layout className="w-5 h-5 text-pink-400" />, color: 'from-pink-500/20 to-rose-500/20', border: 'border-pink-500/30' },
  { name: 'Canva', icon: <Palette className="w-5 h-5 text-cyan-400" />, color: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-500/30' },
];

const designHighlights = [
  {
    title: 'Responsive Web Interfaces',
    description: 'Pixel-perfect, mobile-first designs that translate seamlessly into code.',
    color: 'from-purple-500/20 to-blue-500/20',
    border: 'border-purple-500/30',
    glow: 'hover:shadow-purple-500/20',
    icon: '🖥️',
  },
  {
    title: 'Design Systems',
    description: 'Consistent component libraries and style guides for scalable products.',
    color: 'from-pink-500/20 to-purple-500/20',
    border: 'border-pink-500/30',
    glow: 'hover:shadow-pink-500/20',
    icon: '🎨',
  },
  {
    title: 'User Research & Wireframes',
    description: 'Low and high-fidelity prototypes informed by user behaviour insights.',
    color: 'from-cyan-500/20 to-teal-500/20',
    border: 'border-cyan-500/30',
    glow: 'hover:shadow-cyan-500/20',
    icon: '📐',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const IllustrationsSection = () => {
  return (
    <section id="design" className="py-24 bg-cosmic-dark relative overflow-hidden">
      <div className="grid-pattern absolute inset-0 opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-12, 12, -12] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 right-10 w-24 h-24 bg-gradient-to-r from-pink-500/15 to-purple-500/15 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-2xl"
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-sm font-medium text-pink-300">UI/UX Design</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Designing with</span>
            <br />
            <span className="text-white">Purpose & Precision</span>
          </h2>

          <p className="text-xl text-cosmic-text/80 max-w-2xl mx-auto leading-relaxed">
            Beyond writing code, I craft thoughtful visual experiences — from wireframes
            to polished prototypes — keeping users at the centre of every decision.
          </p>
        </motion.div>

        {/* Highlight cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {designHighlights.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -6, transition: { duration: 0.2 } }}
              className={`cosmic-card p-6 bg-gradient-to-br ${item.color} border ${item.border} hover:shadow-xl ${item.glow} transition-all duration-300 cursor-default`}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-cosmic-text/70 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools + CTA row */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8 cosmic-card p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Design Toolbox</h4>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${tool.color} border ${tool.border} rounded-full text-sm text-cosmic-text/90 font-medium`}
                >
                  {tool.icon}
                  {tool.name}
                </div>
              ))}
            </div>
          </div>

          <a
            href="https://www.figma.com/@aryansingh"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-pink-500/25 hover:-translate-y-1 hover:scale-105 transition-all duration-300 border border-pink-500/50 shrink-0"
          >
            <Figma className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            View Figma Profile
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default IllustrationsSection;
