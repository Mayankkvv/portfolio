import { motion } from 'framer-motion'
import './CarAnimation.css'

function CarAnimation() {
  return (
    <motion.div
      className="car-track-wrapper"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <a
        href="https://codolio.com/profile/Mayank231"
        target="_blank"
        rel="noreferrer"
        className="car-interactive-link"
        title="Click to view Codolio Profile"
      >
        <div className="car-moving-container">
          {/* Floating Banner */}
          <div className="car-banner">
            <span className="car-banner-pulse" />
            <span>Stop me 🏎️</span>
          </div>

          {/* Supercar SVG */}
          <div className="car-body-wrapper">
            <svg
              viewBox="0 0 240 80"
              className="supercar-svg"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Headlight Cone Glow */}
              <polygon
                points="215,52 260,35 260,65"
                fill="url(#headlightGlow)"
                opacity="0.6"
              />

              {/* Speed Lines */}
              <line x1="0" y1="52" x2="28" y2="52" stroke="#6366f1" strokeWidth="2" strokeDasharray="6 4" />
              <line x1="8" y1="42" x2="38" y2="42" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="8 4" />

              {/* Main Sleek Body */}
              <path
                d="M20 56 L35 38 L75 24 L145 22 L185 36 L215 48 L225 56 L220 62 L15 62 Z"
                fill="#0f172a"
                stroke="#6366f1"
                strokeWidth="2"
              />

              {/* Roof & Windshield Glass */}
              <path
                d="M75 25 L105 10 L145 10 L170 25 Z"
                fill="rgba(56, 189, 248, 0.25)"
                stroke="#38bdf8"
                strokeWidth="1.5"
              />

              {/* Side Window Window Film */}
              <path d="M108 12 L142 12 L162 23 L110 23 Z" fill="rgba(99, 102, 241, 0.35)" />

              {/* Neon Cyan Underglow */}
              <path d="M30 62 L205 62" stroke="#38bdf8" strokeWidth="3" filter="drop-shadow(0 0 6px #38bdf8)" />

              {/* Aerodynamic Side Curves */}
              <path d="M95 28 L115 54 M125 28 L150 54" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
              <path d="M40 45 Q100 35 190 48" stroke="#818cf8" strokeWidth="2" />

              {/* LED Headlight */}
              <circle cx="218" cy="52" r="3" fill="#38bdf8" filter="drop-shadow(0 0 6px #38bdf8)" />
              {/* LED Taillight */}
              <rect x="18" y="48" width="4" height="8" rx="2" fill="#ef4444" filter="drop-shadow(0 0 6px #ef4444)" />

              {/* Front Alloy Wheel */}
              <g className="front-wheel">
                <circle cx="175" cy="62" r="14" fill="#090d16" stroke="#6366f1" strokeWidth="2.5" />
                <circle cx="175" cy="62" r="8" fill="#1e293b" />
                <line x1="175" y1="48" x2="175" y2="76" stroke="#38bdf8" strokeWidth="1.5" />
                <line x1="161" y1="62" x2="189" y2="62" stroke="#38bdf8" strokeWidth="1.5" />
                <circle cx="175" cy="62" r="3" fill="#ffffff" />
              </g>

              {/* Rear Alloy Wheel */}
              <g className="rear-wheel">
                <circle cx="65" cy="62" r="14" fill="#090d16" stroke="#6366f1" strokeWidth="2.5" />
                <circle cx="65" cy="62" r="8" fill="#1e293b" />
                <line x1="65" y1="48" x2="65" y2="76" stroke="#38bdf8" strokeWidth="1.5" />
                <line x1="51" y1="62" x2="79" y2="62" stroke="#38bdf8" strokeWidth="1.5" />
                <circle cx="65" cy="62" r="3" fill="#ffffff" />
              </g>

              {/* Light Beam Gradient */}
              <defs>
                <linearGradient id="headlightGlow" x1="215" y1="52" x2="260" y2="52" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </a>

      {/* Road Track Line */}
      <div className="car-road-line" />
    </motion.div>
  )
}

export default CarAnimation
