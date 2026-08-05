const stack = [
  "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "REST API", "JWT Auth",
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Docker", "Linux VPS",
  "Google Cloud", "BigQuery", "Git & GitHub", "Figma",
];

/** Infinite horizontal ticker of the tech stack. */
export const SkillsMarquee = () => {
  const items = [...stack, ...stack];

  return (
    <section aria-label="Tech stack" className="py-6 border-y border-border/60 bg-card/20 backdrop-blur-sm">
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="shrink-0 inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-2 text-sm text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};