import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, ExternalLink, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

type Category = "All" | "Professional" | "Skill" | "Organization" | "Training";

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  category: Exclude<Category, "All">;
  image: string;
}

const certificates: Certificate[] = [
  {
    title: "Junior Web Programmer",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
    year: "2024",
    category: "Professional",
    image: "/assets/Certificates/BNSP.png",
  },
  {
    title: "Sertifikat Magang / Internship",
    issuer: "Program Magang Profesional",
    year: "2024",
    category: "Professional",
    image: "/assets/Certificates/Sertifikat_Magang.png",
  },
  {
    title: "Cisco Networking Essentials",
    issuer: "Cisco Networking Academy",
    year: "2024",
    category: "Skill",
    image: "/assets/Certificates/Sertif_Skil_CIsco.png",
  },
  {
    title: "Dicoding Web Development",
    issuer: "Dicoding Indonesia",
    year: "2024",
    category: "Skill",
    image: "/assets/Certificates/Sertif_Skil_Dicoding.png",
  },
  {
    title: "Dicoding Fundamental",
    issuer: "Dicoding Indonesia",
    year: "2024",
    category: "Skill",
    image: "/assets/Certificates/Sertif_Skil_Dicoding_2.png",
  },
  {
    title: "Dicoding Backend Learning Path",
    issuer: "Dicoding Indonesia",
    year: "2024",
    category: "Skill",
    image: "/assets/Certificates/Sertif_Skil_Dicoding_3.png",
  },
  {
    title: "Best Special Staff Award",
    issuer: "HMJ EKBIS",
    year: "2023",
    category: "Organization",
    image: "/assets/Certificates/Andri_HMJ_Award.png",
  },
  {
    title: "Sertifikat Demisioner HMJ",
    issuer: "Himpunan Mahasiswa Jurusan EKBIS",
    year: "2023",
    category: "Organization",
    image: "/assets/Certificates/Sertifikat_Demisioner_HMJ.png",
  },
  {
    title: "Sertifikat Demisioner PSHT",
    issuer: "Persaudaraan Setia Hati Terate",
    year: "2023",
    category: "Organization",
    image: "/assets/Certificates/Sertifikat_Demisioner_PSHT.png",
  },
  {
    title: "Apresiasi Panitia PSHT",
    issuer: "Persaudaraan Setia Hati Terate",
    year: "2023",
    category: "Organization",
    image: "/assets/Certificates/Andri_Wahidin_Sertif_PSHT.png",
  },
  {
    title: "Pelatihan Penguatan Karakter",
    issuer: "Program Pengembangan Diri",
    year: "2023",
    category: "Training",
    image: "/assets/Certificates/SERTIF_Pelatihan_PENGUATAN_KARAKTER.png",
  },
];

const categoryStyles: Record<Exclude<Category, "All">, string> = {
  Professional: "bg-primary/15 text-primary border-primary/30",
  Skill: "bg-cyan-400/15 text-cyan-300 border-cyan-400/30",
  Organization: "bg-fuchsia-400/15 text-fuchsia-300 border-fuchsia-400/30",
  Training: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
};

const categories: Category[] = ["All", "Professional", "Skill", "Organization", "Training"];

export const Certificates = () => {
  const [filter, setFilter] = useState<Category>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = filter === "All" ? certificates : certificates.filter((c) => c.category === filter);

  const openAt = (i: number) => setActiveIndex(i);
  const close = () => setActiveIndex(null);
  const next = () =>
    setActiveIndex((i) => (i === null ? i : (i + 1) % filtered.length));
  const prev = () =>
    setActiveIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));

  const active = activeIndex !== null ? filtered[activeIndex] : null;

  return (
    <section id="certificates" className="py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Achievements & Credentials</span>
          </div>
          <h2 className="section-title">
            My <span className="text-gradient">Certificates</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A curated collection of professional certifications, skills, and organizational recognitions — verified proofs of my journey.
          </p>
        </motion.div>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                filter === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                  : "bg-card/40 text-muted-foreground border-border hover:text-foreground hover:border-primary/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, i) => (
              <motion.button
                key={cert.image}
                layout
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => openAt(i)}
                className="group relative text-left rounded-2xl p-[1px] bg-gradient-to-br from-primary/40 via-border to-transparent"
              >
                <div className="relative h-full rounded-[calc(1rem-1px)] bg-card/60 backdrop-blur-xl overflow-hidden">
                  {/* Preview */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary/40">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <span
                      className={`absolute top-3 left-3 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-md ${categoryStyles[cert.category]}`}
                    >
                      {cert.category}
                    </span>
                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/70 backdrop-blur-md border border-border flex items-center justify-center text-primary">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-display font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{cert.issuer}</p>
                    <div className="mt-4 flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{cert.year}</span>
                      <span className="inline-flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        View <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-xl overflow-y-auto p-4 md:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-card border border-border rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={close}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground border border-border flex items-center justify-center transition"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <button
                onClick={prev}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground border border-border items-center justify-center transition"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground border border-border items-center justify-center transition"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="bg-secondary/30 flex items-center justify-center p-4 md:p-8 max-h-[70vh]">
                <img
                  src={active.image}
                  alt={active.title}
                  className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-xl"
                />
              </div>
              <div className="p-6 border-t border-border">
                <span
                  className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border ${categoryStyles[active.category]}`}
                >
                  {active.category}
                </span>
                <h3 className="text-xl md:text-2xl font-display font-bold mt-3 text-foreground">
                  {active.title}
                </h3>
                <p className="text-muted-foreground mt-1">
                  {active.issuer} · <span className="text-primary">{active.year}</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};