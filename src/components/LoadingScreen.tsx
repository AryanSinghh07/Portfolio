import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Match portfolio palette exactly
const BG      = '#0a0a16';
const LAVENDER = '#c4b5fd';
const PURPLE   = '#a78bfa';
const MID      = '#7c3aed';
const DEEP     = '#4c1d95';

// Deterministic stars — golden-ratio spread, no Math.random
const STARS = Array.from({ length: 110 }, (_, i) => ({
  id:  i,
  x:   ((i * 127.31 + 13) % 96) + 2,
  y:   ((i * 83.71  +  9) % 68) + 2,
  w:   i % 7 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
  op:  0.3 + (i % 8) * 0.08,
  del: (i * 0.41) % 4.5,
  dur: 1.2 + (i % 6) * 0.35,
  tint: i % 9 === 0,   // lavender-tinted star
}));

interface Props { onComplete: () => void }

const LoadingScreen = ({ onComplete }: Props) => {
  const [phase,   setPhase  ] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const t1 = setTimeout(() => setPhase(1),  150);   // moon + hills rise
    const t2 = setTimeout(() => setPhase(2),  950);   // character fades in
    const t3 = setTimeout(() => setPhase(3), 1200);   // text fades in
    const t4 = setTimeout(() => {
      setVisible(false);
      setTimeout(() => { document.body.style.overflow = ''; onComplete(); }, 700);
    }, 3500);

    return () => { [t1,t2,t3,t4].forEach(clearTimeout); document.body.style.overflow = ''; };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
          style={{ position: 'fixed', inset: 0, zIndex: 9999, background: BG, overflow: 'hidden' }}
        >

          {/* ── Background grid (matches site) ───────────────────── */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: `
              linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />

          {/* ── Ambient radial glow (top-center) ─────────────────── */}
          <div style={{
            position: 'absolute', top: '-10%', left: '50%',
            transform: 'translateX(-50%)',
            width: '600px', height: '400px',
            background: 'radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 70%)',
            filter: 'blur(40px)', pointerEvents: 'none',
          }} />

          {/* ── Stars ────────────────────────────────────────────── */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            {STARS.map(s => (
              <motion.div
                key={s.id}
                style={{
                  position: 'absolute',
                  left: `${s.x}%`, top: `${s.y}%`,
                  width: s.w, height: s.w,
                  background: s.tint ? '#e9d5ff' : '#ffffff',
                  imageRendering: 'pixelated',
                }}
                animate={{ opacity: [s.op, s.op * 0.08, s.op] }}
                transition={{ duration: s.dur, delay: s.del, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
          </div>

          {/* ── SVG pixel-art scene ──────────────────────────────── */}
          <svg
            viewBox="0 0 760 480"
            preserveAspectRatio="xMidYMid meet"
            shapeRendering="crispEdges"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          >
            <defs>
              <radialGradient id="ld-moon" cx="40%" cy="35%" r="60%">
                <stop offset="0%"   stopColor="#e9d5ff" />
                <stop offset="55%"  stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#6d28d9" />
              </radialGradient>
              <radialGradient id="ld-terrain-l" cx="70%" cy="0%" r="120%">
                <stop offset="0%"   stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#5b21b6" />
              </radialGradient>
              <radialGradient id="ld-terrain-r" cx="30%" cy="0%" r="120%">
                <stop offset="0%"   stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#5b21b6" />
              </radialGradient>
              <filter id="ld-glow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="16" />
              </filter>
            </defs>

            {/* Soft glow halo behind moon */}
            <motion.circle cx="380" cy="278" r="160" fill={PURPLE}
              filter="url(#ld-glow)"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={phase >= 1 ? { opacity: 0.22, scale: 1 } : {}}
              transition={{ duration: 1.8 }}
            />

            {/* Moon body */}
            <motion.circle cx="380" cy="278" r="130" fill="url(#ld-moon)"
              initial={{ opacity: 0, y: 50 }}
              animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Moon craters + surface details */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={phase >= 1 ? { opacity: 1 } : {}}
              transition={{ delay: 0.55, duration: 0.8 }}
            >
              <circle cx="322" cy="238" r="24" fill="none" stroke={DEEP} strokeWidth="3.5" opacity="0.7"  />
              <circle cx="322" cy="238" r="5"  fill={DEEP}  opacity="0.8" />
              <circle cx="428" cy="308" r="15" fill="none" stroke={DEEP} strokeWidth="2.5" opacity="0.65" />
              <circle cx="428" cy="308" r="3"  fill={DEEP}  opacity="0.7" />
              <circle cx="362" cy="318" r="9"  fill="none" stroke={DEEP} strokeWidth="2"   opacity="0.55" />
              <circle cx="410" cy="244" r="7"  fill="none" stroke={DEEP} strokeWidth="1.8" opacity="0.5"  />
              <rect x="350" y="268" width="4" height="4" fill={DEEP} opacity="0.6"  />
              <rect x="396" y="282" width="3" height="3" fill={DEEP} opacity="0.55" />
              <rect x="352" y="344" width="3" height="3" fill={DEEP} opacity="0.45" />
              <rect x="446" y="266" width="2" height="2" fill={DEEP} opacity="0.5"  />
              <rect x="308" y="298" width="2" height="2" fill={DEEP} opacity="0.45" />
            </motion.g>

            {/* Pixel character silhouette on top of moon */}
            <motion.g transform="translate(380, 148)"
              initial={{ opacity: 0, y: -12 }}
              animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <rect x="-4" y="-28" width="8"  height="8"  fill={BG} />
              <rect x="-5" y="-20" width="10" height="12" fill={BG} />
              <rect x="-9" y="-18" width="4"  height="7"  fill={BG} />
              <rect x="5"  y="-18" width="4"  height="7"  fill={BG} />
              <rect x="-5" y="-8"  width="4"  height="9"  fill={BG} />
              <rect x="1"  y="-8"  width="4"  height="9"  fill={BG} />
            </motion.g>

            {/* Left stepped pixel hill */}
            <motion.polygon
              fill="url(#ld-terrain-l)"
              points="
                0,480 0,424 16,424 16,408 32,408 32,392 48,392
                48,374 64,374 64,356 80,356 80,338 96,338
                96,318 112,318 112,298 128,298 128,278 144,278
                144,264 158,264 158,274 170,274 170,292 186,292
                186,314 202,314 202,338 220,338 220,364 240,364
                240,394 264,394 264,428 292,428 292,480
              "
              initial={{ opacity: 0, y: 28 }}
              animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.18 }}
            />

            {/* Right stepped pixel hill (mirror) */}
            <motion.polygon
              fill="url(#ld-terrain-r)"
              points="
                760,480 760,424 744,424 744,408 728,408 728,392 712,392
                712,374 696,374 696,356 680,356 680,338 664,338
                664,318 648,318 648,298 632,298 632,278 616,278
                616,264 602,264 602,274 590,274 590,292 574,292
                574,314 558,314 558,338 540,338 540,364 520,364
                520,394 496,394 496,428 468,428 468,480
              "
              initial={{ opacity: 0, y: 28 }}
              animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.18 }}
            />
          </svg>

          {/* ── "Portfolio Day" text ──────────────────────────────── */}
          <AnimatePresence>
            {phase >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  position: 'absolute', top: '13%', width: '100%',
                  textAlign: 'center', pointerEvents: 'none',
                }}
              >
                <span style={{
                  fontFamily: "'Press Start 2P', 'Courier New', monospace",
                  fontSize: 'clamp(13px, 2.5vw, 26px)',
                  color: LAVENDER,
                  letterSpacing: '4px',
                  textShadow: `0 0 32px rgba(167,139,250,0.7), 0 0 8px rgba(167,139,250,0.4)`,
                }}>
                  Portfolio Day
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Pixel progress bar ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              position: 'absolute', bottom: '7%',
              left: '50%', transform: 'translateX(-50%)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
            }}
          >
            <div style={{
              width: '180px', height: '4px',
              background: 'rgba(124,58,237,0.15)',
              outline: '1px solid rgba(124,58,237,0.25)',
            }}>
              <motion.div
                style={{
                  height: '100%',
                  background: `linear-gradient(to right, ${MID}, ${PURPLE}, ${LAVENDER})`,
                  originX: 0,
                  boxShadow: `0 0 12px rgba(167,139,250,0.8)`,
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 3.1, ease: 'easeInOut' }}
              />
            </div>

            <motion.span
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '7px',
                color: MID,
                letterSpacing: '3px',
              }}
            >
              LOADING...
            </motion.span>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
