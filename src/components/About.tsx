import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "HTML & CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "CodeIgniter 4", level: 80 },
  { name: "Next.js", level: 75 },
  { name: "Express.js", level: 80 },
  { name: "PostgreSQL & MySQL", level: 78 },
  { name: "Figma (UI/UX)", level: 75 },
  { name: "Git & GitHub", level: 80 },
];

const technologies = [
  "HTML", "CSS", "JavaScript", "CodeIgniter 4", "Next.js", "Express.js",
  "PostgreSQL", "MySQL", "Figma", "Git", "REST API", "Ubuntu Server", "Mikrotik"
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
                Fresh Graduate D3 Manajemen Informatika
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Halo! Saya Andri Wahidin, lulusan Politeknik Negeri Lampung dengan 
                  IPK 3.65/4.00. Saya memiliki passion dalam pengembangan aplikasi 
                  berbasis web dan memiliki pengalaman PKL di CV Newus Technology.
                </p>
                <p>
                  Selama PKL, saya berperan sebagai Backend Developer pada proyek 
                  E-Tiket Museum Lampung, mengembangkan API menggunakan Express.js, 
                  dan terlibat dalam desain UI/UX menggunakan Figma.
                </p>
                <p>
                  Saya juga memiliki sertifikasi BNSP sebagai Junior Web Programmer 
                  dan sertifikat NDG Linux Essentials dari Cisco Networking Academy.
                  Terampil dalam komunikasi, kerja sama tim, dan pemecahan masalah.
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
