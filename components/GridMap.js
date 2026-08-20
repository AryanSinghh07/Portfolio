'use client';

// Fixed, site-wide animated map background.
// All motion is CSS-driven (rotating contour rings, blinking markers),
// so it never depends on scroll positions and can sit behind every section.
export default function GridMap() {
  return (
    <div className="gridmap" aria-hidden="true">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
        {/* dashed grid */}
        <g className="gm-grid">
          {[120, 300, 480, 660, 840, 1020, 1200, 1330].map((x) => (
            <line key={`v${x}`} x1={x} y1="0" x2={x} y2="900" />
          ))}
          {[130, 290, 450, 610, 770].map((y) => (
            <line key={`h${y}`} x1="0" y1={y} x2="1440" y2={y} />
          ))}
        </g>

        {/* outer contour rings — slow clockwise */}
        <g className="gm-rings">
          <circle cx="720" cy="450" r="330" />
          <circle cx="720" cy="450" r="270" />
          <circle cx="720" cy="450" r="210" />
          <path className="gm-arrow" d="M720 112 l-10 14 M720 112 l10 14" />
          <path className="gm-arrow" d="M1050 450 l-14 -10 M1050 450 l-14 10" />
          <path className="gm-arrow" d="M720 788 l-10 -14 M720 788 l10 -14" />
        </g>

        {/* inner rings — counter-rotate */}
        <g className="gm-rings-inner">
          <circle cx="720" cy="450" r="150" />
          <circle cx="720" cy="450" r="90" />
          <path className="gm-arrow" d="M720 300 l-9 12 M720 300 l9 12" />
          <path className="gm-arrow" d="M720 600 l-9 -12 M720 600 l9 -12" />
        </g>

        {/* scattered blinking markers */}
        <g className="gm-marks">
          <rect x="292" y="122" width="16" height="16" />
          <rect x="1012" y="282" width="14" height="14" />
          <rect x="472" y="602" width="16" height="16" />
          <rect x="1192" y="762" width="14" height="14" />
          <rect x="832" y="142" width="12" height="12" />
          <rect x="152" y="442" width="14" height="14" />
          <rect x="1322" y="122" width="12" height="12" />
        </g>

        {/* crosshair ticks at grid intersections */}
        <g className="gm-cross">
          <path d="M480 290 h-16 M472 282 v16" />
          <path d="M1020 610 h-16 M1012 602 v16" />
          <path d="M300 770 h-16 M292 762 v16" />
          <path d="M1200 290 h-16 M1192 282 v16" />
        </g>
      </svg>
    </div>
  );
}
