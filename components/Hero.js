"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "250%+", label: "Growth in engagement" },
  { value: "180%",  label: "Faster performance"   },
  { value: "98%",   label: "Customer satisfaction" },
];

export default function Hero() {
  const sectionRef   = useRef(null);
  const headlineRef  = useRef(null);
  const statsRef     = useRef(null);
  const orbRef       = useRef(null);
  const ringRef      = useRef(null);
  const glowRef      = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const letters = headlineRef.current.querySelectorAll(".letter");
      gsap.fromTo(letters,
        { opacity: 0, y: 40, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1, stagger: 0.045, ease: "power3.out", delay: 0.25 }
      );

      const statItems = statsRef.current.querySelectorAll(".stat-item");
      gsap.fromTo(statItems,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.16, ease: "power2.out", delay: 1.1 }
      );

      gsap.fromTo(orbRef.current,
        { opacity: 0, scale: 0.55 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out", delay: 0.4 }
      );

      gsap.fromTo(ringRef.current,
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1, duration: 1.8, ease: "power2.out", delay: 0.6 }
      );

      const base = {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      };

      gsap.to(orbRef.current, {
        y: -170, scale: 1.4, ease: "none",
        scrollTrigger: base,
      });

      gsap.to(ringRef.current, {
        rotate: 200, scale: 1.6, opacity: 0, ease: "none",
        scrollTrigger: { ...base, scrub: 1.6 },
      });

      gsap.to(glowRef.current, {
        opacity: 0.08, scale: 1.8, ease: "none",
        scrollTrigger: { ...base, scrub: 2 },
      });

      gsap.to(headlineRef.current, {
        y: -70, opacity: 0.1, ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "55% top", scrub: 1 },
      });

      gsap.to(statsRef.current, {
        y: 55, opacity: 0, ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "45% top", scrub: 1 },
      });

      const pConfig = [
        { x: 30, y: -110 }, { x: -40, y: -80  },
        { x: 50, y: -130 }, { x: -30, y: -90  },
        { x:-60, y: -100 }, { x:  55, y: -95  },
      ];
      particlesRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.to(el, {
          x: pConfig[i].x, y: pConfig[i].y, opacity: 0, ease: "none",
          scrollTrigger: { ...base, scrub: 1 + i * 0.25 },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headline = "W E L C O M E   I T Z   F I Z Z";

  return (
    <>
      <div ref={sectionRef} style={{ height: "200vh" }} className="relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#080808] flex flex-col items-center justify-center">

          {/* Glow */}
          <div ref={glowRef} className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(99,102,241,0.18) 0%, transparent 70%)",
            willChange: "transform, opacity",
          }} />

          {/* Grid */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

          {/* Outer ring */}
          <div ref={ringRef} className="absolute" style={{
            width: 430, height: 430,
            border: "1px solid rgba(99,102,241,0.16)",
            borderRadius: "50%",
            willChange: "transform, opacity",
          }} />

          {/* Inner ring */}
          <div className="absolute" style={{
            width: 290, height: 290,
            border: "1px solid rgba(99,102,241,0.09)",
            borderRadius: "50%",
          }} />

          {/* Orb */}
          <div ref={orbRef} className="absolute" style={{
            width: 220, height: 220, borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, rgba(165,180,252,0.92) 0%, rgba(99,102,241,0.72) 40%, rgba(49,46,129,0.45) 75%, transparent 100%)",
            boxShadow: "0 0 80px 20px rgba(99,102,241,0.28), 0 0 160px 40px rgba(99,102,241,0.12)",
            top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            willChange: "transform, opacity",
          }}>
            <div style={{
              position: "absolute", top: "18%", left: "22%", width: "35%", height: "25%",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.55) 0%, transparent 80%)",
              filter: "blur(6px)",
            }} />
            <div style={{
              position: "absolute", top: "48%", left: "8%", right: "8%", height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            }} />
          </div>

          {/* Particles */}
          {[
            { top: "30%", left: "20%", size: 5 },
            { top: "65%", left: "15%", size: 3 },
            { top: "25%", left: "78%", size: 5 },
            { top: "70%", left: "80%", size: 3 },
            { top: "45%", left: "10%", size: 2 },
            { top: "50%", left: "88%", size: 2 },
          ].map((p, i) => (
            <div key={i} ref={el => (particlesRef.current[i] = el)} style={{
              position: "absolute", top: p.top, left: p.left,
              width: p.size, height: p.size, borderRadius: "50%",
              background: "rgba(165,180,252,0.65)",
              boxShadow: "0 0 8px 2px rgba(99,102,241,0.45)",
              willChange: "transform, opacity",
            }} />
          ))}

          {/* Headline */}
          <div ref={headlineRef} className="relative z-10 text-center px-4" style={{ willChange: "transform, opacity" }}>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(1.3rem, 3.2vw, 3rem)",
              letterSpacing: "0.22em",
              color: "#fff",
              textTransform: "uppercase",
              textShadow: "0 0 40px rgba(165,180,252,0.3)",
              lineHeight: 1.2,
            }}>
              {headline.split("").map((char, i) => (
                <span key={i} className="letter" style={{ display: "inline-block" }}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <div style={{
              margin: "2rem auto 0", width: 1, height: 48,
              background: "linear-gradient(to bottom, rgba(99,102,241,0.7), transparent)",
            }} />
          </div>

          {/* Stats */}
          <div ref={statsRef} className="relative z-10 flex gap-16 md:gap-24" style={{ marginTop: "8rem", willChange: "transform, opacity" }}>
            {stats.map((s, i) => (
              <div key={i} className="stat-item text-center" style={{ minWidth: 90 }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 300,
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  letterSpacing: "0.04em",
                  background: "linear-gradient(135deg, #e0e7ff 0%, #a5b4fc 60%, #818cf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  {s.value}
                </div>
                <div style={{
                  marginTop: "0.3rem", fontSize: "0.55rem",
                  color: "rgba(255,255,255,0.28)", textTransform: "uppercase",
                  letterSpacing: "0.18em", fontFamily: "'DM Mono', monospace",
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35">
            <span style={{ fontSize: "0.5rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.2em" }}>
              Scroll
            </span>
            <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)" }} />
          </div>

        </div>
      </div>

      {/* Below hero */}
      <div className="h-screen bg-[#080808] flex items-center justify-center">
        <p style={{ color: "rgba(255,255,255,0.15)", textTransform: "uppercase", letterSpacing: "0.3em", fontSize: "0.75rem" }}>
          Beyond the fold
        </p>
      </div>
    </>
  );
}