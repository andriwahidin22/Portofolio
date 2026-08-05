/**
 * Global ambient background: drifting aurora orbs + subtle tech grid.
 * Purely decorative, fixed behind all content.
 */
export const AnimatedBackground = () => {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-backdrop opacity-70" />

      <div className="absolute -top-40 -left-32 w-[620px] h-[620px] rounded-full bg-primary/12 blur-[150px] animate-aurora" />
      <div
        className="absolute top-1/3 -right-40 w-[560px] h-[560px] rounded-full bg-fuchsia-500/10 blur-[150px] animate-aurora"
        style={{ animationDelay: "-7s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[520px] h-[520px] rounded-full bg-sky-400/10 blur-[150px] animate-aurora"
        style={{ animationDelay: "-14s" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
    </div>
  );
};