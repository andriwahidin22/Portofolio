import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Smartphone, Zap, Palette, Code2, LineChart } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Building modern websites with CodeIgniter 4, Next.js, and Express.js tailored to your needs.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Optimal design on all devices, from mobile to desktop with a mobile-first approach.",
  },
  {
    icon: Zap,
    title: "Backend Development",
    description: "API and backend development using Express.js with PostgreSQL/MySQL database integration.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive and attractive interfaces using Figma with a focus on user experience.",
  },
  {
    icon: Code2,
    title: "Database Management",
    description: "Management and optimization of PostgreSQL and MySQL databases for web applications.",
  },
  {
    icon: LineChart,
    title: "Network Configuration",
    description: "Mikrotik configuration, Ubuntu Server, and computer network management.",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-1/3 -left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Solutions I offer to help bring your digital projects to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group"
              >
                <div className="h-full card-gradient p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
