import { useEffect, useMemo, useState } from "react";

/**
 * Global ambient background: drifting aurora orbs, tech grid,
 * scanning beams and floating particles. Purely decorative.
 */
export const AnimatedBackground = () => {
  // The SVGator scene plays once (~7.2s); remount it to loop forever.
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => setCycle((c) => c + 1), 7600);
    return () => window.clearInterval(id);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        size: 2 + ((i * 7) % 4),
        delay: `-${(i * 1.7) % 18}s`,
        duration: `${16 + ((i * 3) % 14)}s`,
        opacity: 0.25 + ((i % 5) * 0.12),
      })),
    []
  );

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* SVGator animated scene */}
      <object
        key={cycle}
        type="image/svg+xml"
        data="/animations/hero-reveal.svg"
        aria-hidden
        tabIndex={-1}
        className="absolute inset-0 h-full w-full opacity-90 pointer-events-none mix-blend-screen"
      />

      <div className="absolute inset-0 grid-backdrop opacity-50" />

      {/* Aurora orbs */}
      <div className="absolute -top-40 -left-32 w-[620px] h-[620px] rounded-full bg-primary/12 blur-[150px] animate-aurora" />
      <div
        className="absolute top-1/3 -right-40 w-[560px] h-[560px] rounded-full bg-fuchsia-500/10 blur-[150px] animate-aurora"
        style={{ animationDelay: "-7s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[520px] h-[520px] rounded-full bg-sky-400/10 blur-[150px] animate-aurora"
        style={{ animationDelay: "-14s" }}
      />

      {/* Vertical scanning beams */}
      <div className="absolute inset-0">
        <span className="beam-v left-[18%] animate-beam-fall" style={{ animationDelay: "-2s" }} />
        <span className="beam-v left-[47%] animate-beam-fall" style={{ animationDelay: "-6s", animationDuration: "11s" }} />
        <span className="beam-v left-[78%] animate-beam-fall" style={{ animationDelay: "-9s", animationDuration: "14s" }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute bottom-[-10%] rounded-full bg-primary animate-particle-rise"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Slow rotating conic halo */}
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07] blur-3xl conic-halo animate-halo-spin" />

      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/25 to-background/60" />
    </div>
  );
};
