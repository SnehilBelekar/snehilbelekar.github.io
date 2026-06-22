import React from 'react';

export default function ResumeHero() {
  return (
    <section className="resume-hero" aria-labelledby="hero-name">
      <div className="resume-hero__mesh" aria-hidden="true">
        <svg viewBox="0 0 1200 600" role="presentation" focusable="false">
          <g stroke="var(--cv-accent)" strokeWidth="1.2" fill="none" opacity="0.34">
            <path d="M80 420 L250 290 L430 340 L620 220 L770 280 L950 170 L1120 250" />
            <path d="M120 180 L320 120 L470 210 L690 140 L860 220 L1050 150" />
            <path d="M60 520 L240 470 L390 520 L590 440 L810 500 L1040 420" />
            <path d="M190 80 L300 220 L510 110 L700 260 L890 120 L1110 210" />
          </g>

          <g fill="var(--cv-accent-soft)" opacity="0.45">
            <circle cx="80" cy="420" r="4" />
            <circle cx="250" cy="290" r="3.6" />
            <circle cx="430" cy="340" r="4.4" />
            <circle cx="620" cy="220" r="4" />
            <circle cx="770" cy="280" r="3.8" />
            <circle cx="950" cy="170" r="4" />
            <circle cx="1120" cy="250" r="3.6" />
            <circle cx="320" cy="120" r="3.5" />
            <circle cx="690" cy="140" r="3.8" />
            <circle cx="860" cy="220" r="3.4" />
            <circle cx="240" cy="470" r="3.6" />
            <circle cx="590" cy="440" r="3.8" />
            <circle cx="810" cy="500" r="3.5" />
          </g>
        </svg>
      </div>

      <div className="resume-hero__content">
        <h1 id="hero-name">Snehil Belekar</h1>
        <h2>
          Senior Technical Architect — Multi-Cloud · DevSecOps · Security & Compliance ·
          FinOps · Digital Twin/IoT
        </h2>
        <p className="resume-hero__value">
          Building secure, compliant, and cost-efficient cloud platforms that move complex
          products from architecture to reliable production.
        </p>

        <div className="resume-hero__actions">
          <a href="https://www.linkedin.com/in/snehilbelekar" target="_blank" rel="noreferrer">
            Connect on LinkedIn
          </a>
          <a href="/resume" className="resume-hero__action-secondary">
            View Resume
          </a>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@500;700&family=Manrope:wght@400;500;700&display=swap');

        :root {
          --cv-bg: #2b2d42;
          --cv-bg-elev: #343754;
          --cv-accent: #00aaaa;
          --cv-accent-soft: #62d4d1;
          --cv-text: #edf2f4;
          --cv-muted: #b9c2d0;
          --cv-focus: #9bf7f2;
          --cv-shadow: rgba(0, 0, 0, 0.28);
        }

        .resume-hero {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          color: var(--cv-text);
          background:
            radial-gradient(circle at 12% 18%, rgba(0, 170, 170, 0.14), transparent 40%),
            radial-gradient(circle at 90% 78%, rgba(0, 170, 170, 0.1), transparent 46%),
            linear-gradient(160deg, var(--cv-bg) 0%, var(--cv-bg-elev) 100%);
          border-radius: 1.25rem;
          box-shadow: 0 18px 40px var(--cv-shadow);
          padding: clamp(1.35rem, 4.2vw, 3.4rem);
          min-height: clamp(300px, 56vh, 520px);
          display: flex;
          align-items: center;
        }

        .resume-hero__mesh {
          position: absolute;
          inset: -6% -4%;
          opacity: 0.28;
          pointer-events: none;
          z-index: -1;
        }

        .resume-hero__mesh svg {
          width: 100%;
          height: 100%;
          transform: translate3d(0, 0, 0);
          animation: meshDrift 18s ease-in-out infinite alternate;
        }

        .resume-hero__content {
          max-width: 70ch;
        }

        .resume-hero h1 {
          margin: 0;
          font-family: 'Sora', sans-serif;
          font-size: clamp(2rem, 7vw, 4rem);
          line-height: 1.03;
          letter-spacing: 0.02em;
          text-wrap: balance;
        }

        .resume-hero h2 {
          margin: 0.9rem 0 0;
          font-family: 'Sora', sans-serif;
          font-size: clamp(1rem, 2.15vw, 1.42rem);
          line-height: 1.42;
          color: var(--cv-text);
          text-wrap: balance;
        }

        .resume-hero__value {
          margin: 1rem 0 0;
          font-family: 'Manrope', sans-serif;
          font-size: clamp(0.98rem, 1.55vw, 1.2rem);
          line-height: 1.55;
          color: var(--cv-muted);
          max-width: 58ch;
        }

        .resume-hero__actions {
          margin-top: 1.35rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
        }

        .resume-hero__actions a {
          font-family: 'Manrope', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          color: #022726;
          background: var(--cv-accent);
          border: 1px solid transparent;
          border-radius: 999px;
          padding: 0.58rem 1rem;
        }

        .resume-hero__actions a:hover {
          background: #19bcbc;
        }

        .resume-hero__action-secondary {
          color: var(--cv-text) !important;
          background: transparent !important;
          border-color: var(--cv-accent) !important;
        }

        .resume-hero__action-secondary:hover {
          background: rgba(0, 170, 170, 0.12) !important;
        }

        .resume-hero__actions a:focus-visible {
          outline: 3px solid var(--cv-focus);
          outline-offset: 3px;
        }

        @keyframes meshDrift {
          from {
            transform: translate3d(-1.4%, -1.2%, 0) scale(1);
          }
          to {
            transform: translate3d(1.2%, 1.1%, 0) scale(1.015);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .resume-hero__mesh svg {
            animation: none;
          }
        }

        @media (max-width: 640px) {
          .resume-hero {
            min-height: 360px;
            align-items: flex-start;
            padding: 1.2rem;
          }

          .resume-hero h2 {
            margin-top: 0.7rem;
          }

          .resume-hero__value {
            margin-top: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}
