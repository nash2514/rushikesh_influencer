"use client";

import { useEffect, useRef, useState } from "react";
import GradientWaves from "@/components/GradientWaves";

type Program = {
  id: string;
  number: string;
  title: string;
  duration: string;
  description: string;
  image: string;
};

const programs: Program[] = [
  {
    id: "foundation",
    number: "01",
    title: "The Foundation",
    duration: "12-Week Program",
    description: "Build strength, improve endurance and create lasting habits.",
    image:
      "https://images.unsplash.com/photo-1772450014674-5b2035852e39?auto=format&fit=crop&fm=jpg&q=90&w=1600",
  },
  {
    id: "muscle",
    number: "02",
    title: "Muscle Build",
    duration: "16-Week Program",
    description: "A complete hypertrophy guide for serious gains.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: "shred",
    number: "03",
    title: "Shred & Define",
    duration: "12-Week Program",
    description: "Get lean, stay strong. A structured fat loss blueprint.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=90",
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 12h15M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Instagram() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.5" cy="6.7" r="1" fill="currentColor" />
    </svg>
  );
}

function YouTube() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M21 8.2a2.8 2.8 0 0 0-2-2c-1.7-.4-7-.4-7-.4s-5.3 0-7 .4a2.8 2.8 0 0 0-2 2A27 27 0 0 0 2.6 12c0 1.3.1 2.6.4 3.8a2.8 2.8 0 0 0 2 2c1.7.4 7 .4 7 .4s5.3 0 7-.4a2.8 2.8 0 0 0 2-2c.3-1.2.4-2.5.4-3.8s-.1-2.6-.4-3.8Z"
        fill="currentColor"
      />
      <path d="m10 9 5 3-5 3V9Z" fill="#050606" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 4h3.5l3.7 5.1L16.5 4H19l-5.7 6.5L19.5 20H16l-4.1-5.7L7 20H4.5l5.9-6.9L5 4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Spotify() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" fill="currentColor" />
      <path
        d="M7.3 9.3c3.2-1 7-.75 9.7.48M7.8 12c2.7-.75 5.7-.52 8.1.5M8.3 14.7c2.1-.48 4.4-.3 6.3.4"
        fill="none"
        stroke="#050606"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Logo() {
  return (
    <div className="logo">
      <div className="logoName">Rishikesh</div>
      <div className="logoTagline">
        FITNESS · DISCIPLINE · A BETTER YOU
      </div>
    </div>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("isVisible");
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={
        {
          "--reveal-delay": `${delay}ms`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

function Header({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <header className="header">
      <a className="headerLogo" href="#home" aria-label="Rishikesh home">
        <Logo />
      </a>

      <nav className="desktopNav" aria-label="Primary navigation">
        <a href="#programs">Programs</a>
        <a href="#join">Join</a>
      </nav>

      <div className="headerActions">
        <a className="joinButton" href="#join">
          Join Now
        </a>

        <button
          className="menuButton"
          type="button"
          onClick={onToggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={open ? "hamburger h1" : "hamburger"} />
          <span className={open ? "hamburger h2" : "hamburger"} />
          <span className={open ? "hamburger h3" : "hamburger"} />
        </button>
      </div>

      <nav className={open ? "mobileNav show" : "mobileNav"}>
        <a href="#home" onClick={onToggle}>
          Home
        </a>
        <a href="#programs" onClick={onToggle}>
          Programs
        </a>
        <a href="#join" onClick={onToggle}>
          Join Now
        </a>
      </nav>
    </header>
  );
}

function HeroContent() {
  return (
    <div className="heroTextContent">
      <div className="eyebrow">
        <span>STRONGER</span>
        <span>DISCIPLINED</span>
        <span>KINDER</span>
      </div>

      <h1>
        <span>A FITTER</span>
        <span>YOU</span>
        <em>A KINDER</em>
        <em>WORLD</em>
      </h1>

      <div className="orangeLine" />

      <div className="marathi">
        <span>पुढे</span>
        <span>चालत रहा.</span>
      </div>

      <blockquote>
        “FITNESS IS A TOOL
        <br />
        FOR A BETTER TOMORROW.”
        <cite>— RISHIKESH</cite>
      </blockquote>

      <a href="#programs" className="primaryButton">
        <span>START YOUR JOURNEY</span>
        <Arrow />
      </a>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="heroBg" />

      <div className="heroInner">
        {/* Mobile: image comes FIRST */}
        <Reveal className="heroVisual" delay={50}>
          <div className="heroPhoto">
            <img
              src="/images/rushikesh.png"
              alt="Rishikesh"
              fetchPriority="high"
            />
            <div className="heroPhotoOverlay" />
          </div>

          <div className="slogan">
            <span>Same</span>
            <span>Mind,</span>
            <span>Higher</span>
            <span>Standards</span>
            <i />
          </div>
        </Reveal>

        {/* Mobile: all text/content follows the image */}
        <Reveal className="heroCopy" delay={120}>
          <HeroContent />
        </Reveal>
      </div>
    </section>
  );
}

function ProgramCard({
  program,
  index,
}: {
  program: Program;
  index: number;
}) {
  return (
    <Reveal className="programReveal" delay={index * 100}>
      <article className="programCard">
        <div className="programImage">
          <img src={program.image} alt="" loading="lazy" />
          <div className="programShade" />

          <span className="number">{program.number}</span>

          <span className="topArrow">
            <Arrow />
          </span>
        </div>

        <div className="programBody">
          <h3>{program.title}</h3>
          <span className="duration">{program.duration}</span>

          <p>{program.description}</p>

          <a
            className="roundButton"
            href="#join"
            aria-label={`Learn more about ${program.title}`}
          >
            <Arrow />
          </a>
        </div>
      </article>
    </Reveal>
  );
}

function Programs() {
  return (
    <section className="programs" id="programs">
      <div className="programsInner">
        <Reveal className="programHeadingReveal">
          <div className="programHeading">
            <div>
              <div className="sectionEyebrow">PROGRAMS</div>

              <h2>
                Train with <em>Purpose</em>
              </h2>
            </div>

            <a href="#join" className="viewAll">
              <span>View All</span>
              <Arrow />
            </a>
          </div>
        </Reveal>

        <div
          className="programGrid"
          aria-label="Training programs"
          tabIndex={0}
        >
          {programs.map((program, index) => (
            <ProgramCard
              key={program.id}
              program={program}
              index={index}
            />
          ))}
        </div>

        <div className="swipeHint" aria-hidden="true">
          <span>SWIPE</span>
          <span className="swipeArrow">
            <Arrow />
          </span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="join">
      <div className="footerInner">
        <Reveal className="joinContent">
          <div className="sectionEyebrow">START TODAY</div>

          <h2>
            Build the body.
            <br />
            <em>Become the person.</em>
          </h2>

          <p>
            Your next chapter starts with one decision. Train with purpose and
            move forward every day.
          </p>

          <a href="mailto:hello@rishikesh.fit" className="primaryButton">
            <span>JOIN THE COMMUNITY</span>
            <Arrow />
          </a>
        </Reveal>

        <Reveal className="footerBrandReveal" delay={100}>
          <div className="footerBrand">
            <Logo />

            <div className="socials">
              <a href="#instagram" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#youtube" aria-label="YouTube">
                <YouTube />
              </a>
              <a href="#x" aria-label="X">
                <XIcon />
              </a>
              <a href="#spotify" aria-label="Spotify">
                <Spotify />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="footerBottomReveal" delay={180}>
          <div className="footerBottom">
            <span>© 2024 Rishikesh. All rights reserved.</span>
            <span>Stronger People. Kinder World.</span>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}


export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Rushikesh";

    const faviconHref =
      "data:image/svg+xml," +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <rect width="64" height="64" fill="#050606"/>
          <text x="32" y="29" text-anchor="middle"
            font-family="Arial, Helvetica, sans-serif"
            font-size="15" font-weight="700" fill="#ffffff">Rishikesh</text>
          <text x="32" y="40" text-anchor="middle"
            font-family="Arial, Helvetica, sans-serif"
            font-size="4.2" letter-spacing="0.8" fill="#ffffff">
            FITNESS · DISCIPLINE · A BETTER YOU
          </text>
        </svg>`,
      );

    let favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');

    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }

    favicon.type = "image/svg+xml";
    favicon.href = faviconHref;
  }, []);

  return (
    <div className="site">
      {/* One continuous animated background for the entire webpage. */}
      <div className="siteBackground" aria-hidden="true">
        <GradientWaves
          horizonColor="#050303"
          waveColor="#5c180b"
          crestColor="#ff5b17"
          speed={0.25}
          amplitude={2.4}
          waveScale={0.68}
          waveRatio={0.9}
          swell={34}
          turbulence={19}
          tilt={1.11}
          zoom={1}
          height={5.5}
          fogDepth={17}
          detail="medium"
          brightness={0.82}
          opacity={0.88}
          mouseInteraction={true}
          parallaxStrength={0.45}
          grain={true}
          grainIntensity={0.035}
        />
        <div className="siteBackgroundOverlay" />
      </div>


          <style>{`
            /* Desktop hero: full viewport, with a much smaller portrait. */
            @media (min-width: 769px) {
              .hero {
                height: 100svh;
                min-height: 100svh;
                max-height: 100svh;
                overflow: hidden;
                background: transparent !important;
              }

              .heroBg {
                background: transparent !important;
              }

              .heroInner {
                height: calc(100svh - var(--header-h, 84px));
                min-height: calc(100svh - var(--header-h, 84px));
                align-items: center;
              }

              .heroVisual,
              .heroPhoto {
                background: transparent !important;
                box-shadow: none !important;
                border: 0 !important;
              }

              .heroPhoto {
                overflow: visible !important;
              }

              .heroPhoto img {
                display: block;
                width: auto !important;
                height: min(84svh, 860px) !important;
                max-width: 100% !important;
                object-fit: contain !important;
                object-position: center center !important;
                background: transparent !important;
                position: relative;
                top: 130px;
                box-shadow: none !important;
                border: 0 !important;
                filter: none !important;
                /* Visually blends a black/dark image rectangle into the
                   continuous dark page background without adding a panel. */
                mix-blend-mode: screen;
              }

              .heroPhotoOverlay {
                display: none !important;
                background: transparent !important;
              }

              /* Desktop only: shift the left hero copy right by 30px
                 and make the complete content substantially smaller. */
              .heroCopy {
                position: relative;
                left: 140px;
                transform: scale(0.45);
                transform-origin: top left;
                width: max-content;
                max-width: 100%;
              }

              .heroTextContent {
                transform: none;
              }

              /* Desktop only: reduce the main hero headline substantially. */
              .heroTextContent h1 {
                transform: scale(0.62);
                transform-origin: top left;
                margin-bottom: -70px !important;
              }

              /* Pull the orange divider closer to the scaled headline. */
              .heroTextContent .orangeLine {
                margin-top: 0 !important;
              }

              /* Desktop only: move the slogan much farther left. */
              .slogan {
                position: relative;
                left: -140px;
              }
            }

            /* Move the hero slogan 50px left without changing the
               rest of the hero layout. */
            .slogan {
              position: relative;
              left: -50px;
            }

            /* Mobile: keep the existing image size/placement and bring all
               hero copy upward so it slightly overlaps the image. */
            @media (max-width: 768px) {
              .hero,
              .heroInner,
              .heroVisual,
              .heroPhoto {
                overflow: visible !important;
              }

              .heroVisual {
                position: relative;
                left: 88px;
                top: 50px;
                width: 125%;
                margin-left: -12.5%;
              }

              .heroPhoto {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                background: transparent !important;
                overflow: visible !important;
              }

              .heroPhoto img {
                width: 125% !important;
                max-width: none !important;
                height: auto !important;
                object-fit: contain !important;
                object-position: center top !important;
                background: transparent !important;
                display: block;
              }

              .heroCopy {
                position: relative;
                z-index: 3;
                margin-top: -11rem !important;
              }

              .heroTextContent {
                position: relative;
                z-index: 4;
              }

              .heroPhoto,
              .heroVisual {
                background: transparent !important;
                box-shadow: none !important;
                border: 0 !important;
              }

              .heroPhotoOverlay {
                display: none !important;
                background: transparent !important;
              }
            }
          `}</style>


          <style>{`
            .programImage {
              position: relative;
              overflow: hidden;
              background: transparent !important;
            }

            .programImage img {
              position: relative;
              z-index: 1;
              display: block;
              width: 100%;
              height: 100%;
              min-height: 260px;
              object-fit: cover;
              object-position: center;
              opacity: 1 !important;
              visibility: visible !important;
            }

            .programImage .number,
            .programImage .topArrow {
              z-index: 3;
            }

            .programImage .programShade {
              position: absolute;
              z-index: 2;
              inset: 0;
              pointer-events: none;
            }
          `}</style>

      <div className="siteContent">
        <Header
          open={menuOpen}
          onToggle={() => setMenuOpen((current) => !current)}
        />

        <Hero />

        <Programs />

        <Footer />
      </div>
    </div>
  );
}
