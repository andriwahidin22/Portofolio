import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Greeting */}
          <motion.p
            className="text-primary font-medium mb-4 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Andri Wahidin
          </motion.h1>

          {/* Title with typewriter effect */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display">
              <span className="text-gradient glow-text">Web Developer</span>
              <span className="text-muted-foreground"> & Backend Enthusiast</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            D3 Information Management graduate from Politeknik Negeri Lampung with experience 
            in web application development. Skilled in HTML, CSS, JavaScript, 
            CodeIgniter 4, Next.js, and Express.js.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Button
              onClick={handleScrollToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-box px-8 py-6 text-lg font-medium"
            >
              Contact Me
            </Button>
            <Button
              variant="outline"
              onClick={handleScrollToProjects}
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-6 text-lg font-medium"
            >
              View Projects
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <span className="text-muted-foreground text-sm">Follow me:</span>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/andriwahidin22", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/andriwahidin", label: "LinkedIn" },
                { icon: Instagram, href: "https://instagram.com/andriwahidin_", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5, duration: 0.5 },
            y: { delay: 2, duration: 1.5, repeat: Infinity },
          }}
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
