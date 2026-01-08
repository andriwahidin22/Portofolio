import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3 / Tailwind", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "TypeScript", level: 85 },
  { name: "React.js", level: 90 },
  { name: "Next.js", level: 82 },
  { name: "Vue.js", level: 75 },
  { name: "Git & GitHub", level: 85 },
];

const technologies = [
  "React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion",
  "Redux", "Vue.js", "SASS", "Git", "Figma", "REST API", "GraphQL"
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Tentang <span className="text-gradient">Saya</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Mengenal lebih dekat siapa saya dan apa yang saya lakukan
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card-gradient p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">
                Frontend Developer dengan 5+ Tahun Pengalaman
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Halo! Saya Andri Wahidin, seorang Frontend Developer yang passionate 
                  dalam menciptakan pengalaman web yang luar biasa. Saya percaya bahwa 
                  sebuah website yang baik adalah kombinasi sempurna antara estetika 
                  visual dan fungsionalitas.
                </p>
                <p>
                  Dengan pengalaman lebih dari 5 tahun di industri web development, 
                  saya telah membantu berbagai klien dari startup hingga enterprise 
                  untuk mewujudkan visi digital mereka. Keahlian utama saya adalah 
                  React.js, TypeScript, dan modern CSS frameworks.
                </p>
                <p>
                  Di luar coding, saya aktif mengikuti perkembangan teknologi terbaru, 
                  berkontribusi ke open source, dan berbagi pengetahuan melalui 
                  artikel dan mentoring.
                </p>
              </div>
            </div>

            {/* Technology tags */}
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className="px-4 py-2 bg-secondary rounded-full text-sm text-muted-foreground border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-display font-semibold text-foreground mb-6">
              Skill & Expertise
            </h3>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
