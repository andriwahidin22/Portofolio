import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Smartphone, Zap, Palette, Code2, LineChart } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Membangun website modern dan responsif dengan teknologi terkini seperti React, Next.js, dan Vue.js.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Desain yang optimal di semua perangkat, dari mobile hingga desktop dengan pendekatan mobile-first.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimasi kecepatan loading, Core Web Vitals, dan pengalaman pengguna yang seamless.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Merancang interface yang intuitif dan menarik dengan fokus pada user experience.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Kode yang terstruktur, mudah di-maintain, dan mengikuti best practices industri.",
  },
  {
    icon: LineChart,
    title: "SEO Friendly",
    description: "Optimasi mesin pencari untuk meningkatkan visibility dan ranking website Anda.",
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
            Layanan <span className="text-gradient">Saya</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Solusi yang saya tawarkan untuk membantu mewujudkan project digital Anda
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
