import { motion, useScroll, useSpring } from "framer-motion";

/** Slim animated progress bar fixed at the top of the page. */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[200] bg-gradient-to-r from-primary via-sky-400 to-fuchsia-400 shadow-[0_0_14px_hsl(var(--primary)/0.7)]"
    />
  );
};