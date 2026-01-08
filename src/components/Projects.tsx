import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "Dashboard analitik untuk platform e-commerce dengan visualisasi data real-time dan manajemen produk.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind", "Recharts"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Travel Booking App",
    description: "Aplikasi pemesanan travel dengan fitur pencarian destinasi, booking hotel, dan itinerary planner.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management System",
    description: "Sistem manajemen tugas kolaboratif dengan fitur real-time sync, drag & drop, dan notifikasi.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["React", "Redux", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media Dashboard",
    description: "Dashboard untuk mengelola multiple social media accounts dengan scheduling dan analytics.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "Vuex", "Node.js", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Fitness Tracking App",
    description: "Aplikasi tracking workout dan nutrisi dengan goal setting, progress chart, dan workout plans.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Restaurant POS System",
    description: "Point of Sale system untuk restoran dengan order management, kitchen display, dan reporting.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    technologies: ["React", "Electron", "SQLite", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-1/2 -right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Project <span className="text-gradient">Terbaru</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Beberapa project yang telah saya kerjakan dengan penuh dedikasi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="card-gradient rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                      aria-label="View live site"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground hover:scale-110 transition-transform"
                      aria-label="View source code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight 
                      size={20} 
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                    />
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-secondary rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
