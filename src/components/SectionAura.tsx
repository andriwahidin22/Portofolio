import { useEffect, useMemo, useState } from "react";

type Variant = "grid" | "orbit" | "mesh" | "rings" | "waves" | "cubes";

/**
 * Decorative animated backdrop rendered behind a section.
 * Purely presentational — no pointer events, hidden from a11y tree.
 * Perf: only mounts on wide screens without reduced-motion preference.
 */
export const SectionAura = ({ variant = "grid" }: { variant?: Variant }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 768px)").matches;
    setShow(!reduce && wide);
  }, []);

  const dots = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        top: `${(i * 29) % 100}%`,
        left: `${(i * 53) % 100}%`,
        delay: `-${(i * 1.3) % 9}s`,
        dur: `${7 + ((i * 2) % 8)}s`,
      })),
    []
  );

  if (!show) return null;

  return (
    <div aria-hidden className="aura-layer pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {variant === "grid" && (
        <>
          <div className="absolute inset-x-0 bottom-0 h-2/3 perspective-grid" />
          <div className="absolute inset-x-0 top-0 h-1/2 perspective-grid rotate-180" />
        </>
      )}

      {variant === "orbit" && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {[420, 640, 880].map((size, i) => (
            <div
              key={size}
              className="gpu-layer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15 animate-orbit-spin"
              style={{
                width: size,
                height: size * 0.34,
                animationDuration: `${28 + i * 12}s`,
                animationDirection: i % 2 ? "reverse" : "normal",
                transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
              }}
            >
              <span className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
            </div>
          ))}
        </div>
      )}

      {variant === "mesh" && (
        <>
          <div className="aurora-orb absolute -top-24 left-1/4 h-[420px] w-[420px] rounded-full bg-primary/10 animate-aurora" />
          <div
            className="aurora-orb absolute bottom-0 right-1/4 h-[380px] w-[380px] rounded-full bg-fuchsia-500/10 animate-aurora"
            style={{ animationDelay: "-9s" }}
          />
          <div className="absolute inset-0 dot-matrix opacity-40" />
        </>
      )}

      {variant === "rings" && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 animate-ripple"
              style={{ animationDelay: `${i * 1.6}s` }}
            />
          ))}
        </div>
      )}

      {variant === "waves" && <div className="absolute inset-0 wave-lines opacity-60" />}

      {variant === "cubes" && (
        <div className="absolute inset-0">
          {dots.map((d) => (
            <span
              key={d.id}
              className="absolute h-6 w-6 border border-primary/20 animate-tilt-float"
              style={{ top: d.top, left: d.left, animationDelay: d.delay, animationDuration: d.dur }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
