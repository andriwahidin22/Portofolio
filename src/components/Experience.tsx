import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Briefcase, Users, Calendar, MapPin, X, ChevronLeft, ChevronRight, Images, Star, ArrowUpRight } from "lucide-react";

import eticket1 from "@/assets/Experience/ETicket/1.png";
import eticket2 from "@/assets/Experience/ETicket/2.png";
import eticket3 from "@/assets/Experience/ETicket/3.png";
import { SectionAura } from "@/components/SectionAura";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
  images?: string[];
  type: "internship" | "organization";
  highlight?: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Backend Developer Intern",
    company: "CV Newus Technology",
    location: "Lampung",
    period: "Mar - Jun 2025",
    description: [
      "Developed REST APIs using Express.js for E-Ticket Museum Lampung project",
      "Designed database schema using PostgreSQL",
      "Collaborated with team on UI/UX design using Figma",
      "Implemented secure authentication and authorization systems",
    ],
    images: [eticket1, eticket2, eticket3],
    type: "internship",
  },
  {
    id: 2,
    title: "Deputy Head of Media and Information Division",
    company: "HMJ EKBIS POLINELA",
    period: "2022 - 2024",
    description: [
      "Deputy Head of Media and Information Division (2023 – 2024)",
      "Best Special Staff Award 2023",
      "Event Coordinator for the Stadium General",
      "Equipment Coordinator for the IT Seminar",
      "Volunteer for PDD Expo (LKS) National Vocational School Competition XXXII 2024",
      "Volunteer for PDD during the 40th Polinela Anniversary and Graduation Ceremony 2024",
    ],
    images: [
      "/assets/Experience/HMJ/1.jpg",
      "/assets/Experience/HMJ/2.jpg",
      "/assets/Experience/HMJ/3.jpg",
      "/assets/Experience/HMJ/4.jpg",
      "/assets/Experience/HMJ/award.png",
    ],
    type: "organization",
    highlight: "Best Special Staff Award 2023",
  },
  {
    id: 3,
    title: "Vice Chairman",
    company: "PSHT Polinela Commissariat",
    period: "2022 - 2023",
    description: [
      "Vice Chairman (2022 – 2023)",
      "Coordinator for PDD at the PSHT Polinela National Pencak Silat Championship 2023",
    ],
    images: ["/assets/Experience/PSHT/1.png"],
    type: "organization",
  },
  {
    id: 4,
    title: "Special Staff for Media Center",
    company: "LDK Albana Polinela",
    period: "2022 - 2023",
    description: [
      "Special Staff for Media Center (2022 – 2023)",
      "Managed social media and digital content",
      "Supported organizational events and documentation",
    ],
    images: ["/assets/Experience/LDK/1.png"],
    type: "organization",
  },
];

const filters = [
  { key: "all", label: "All" },
  { key: "internship", label: "Internship" },
  { key: "organization", label: "Organization" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [filter, setFilter] = useState<FilterKey>("all");
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const visible = experienceData.filter((i) => filter === "all" || i.type === filter);

  const openModal = (experience: ExperienceItem, startIndex = 0) => {
    setSelectedExperience(experience);
    setCurrentImageIndex(startIndex);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    if (selectedExperience?.images) {
      setCurrentImageIndex((p) => (p === selectedExperience.images!.length - 1 ? 0 : p + 1));
    }
  };

  const prevImage = () => {
    if (selectedExperience?.images) {
      setCurrentImageIndex((p) => (p === 0 ? selectedExperience.images!.length - 1 : p - 1));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen, selectedExperience]);

  return (
    <section id="experience" className="py-14 md:py-20 relative" ref={ref}>
      <SectionAura variant="grid" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="section-title">
            My <span className="text-gradient-animate">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A timeline of internships and organizational leadership — with real documentation.
          </p>
        </motion.div>

        {/* Filter pills */}
        <div className="flex justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`relative px-4 py-2 rounded-full text-sm transition-colors ${
                filter === f.key ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter === f.key && (
                <motion.span
                  layoutId="exp-filter-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{f.label}</span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

          <div className="space-y-8 md:space-y-14">
            <AnimatePresence mode="popLayout">
              {visible.map((item, index) => {
                const left = index % 2 === 0;
                return (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className={`relative pl-12 md:pl-0 md:w-1/2 ${left ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
                  >
                    {/* Node */}
                    <span
                      className={`absolute top-7 left-4 md:left-auto ${
                        left ? "md:-right-[7px]" : "md:-left-[7px]"
                      } -translate-x-1/2 md:translate-x-0 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-background shadow-[0_0_18px_hsl(var(--primary)/0.8)] animate-pulse-glow`}
                    />

                    {/* Year marker on the opposite side (fills the empty column) */}
                    <motion.div
                      initial={{ opacity: 0, x: left ? 30 : -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.08 + 0.15 }}
                      className={`hidden md:flex absolute top-2 w-1/2 flex-col ${
                        left ? "left-full pl-12 items-start" : "right-full pr-12 items-end text-right"
                      }`}
                    >
                      <span className="font-display text-6xl lg:text-7xl font-bold leading-none text-transparent [-webkit-text-stroke:1px_hsl(var(--primary)/0.35)] select-none">
                        {item.period.match(/\d{4}/)?.[0] ?? "—"}
                      </span>
                      <span className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
                        {item.type === "internship" ? "Industry" : "Leadership"}
                      </span>
                      <span className="mt-3 text-sm text-muted-foreground/80 max-w-[16rem]">
                        {item.highlight ?? item.company}
                      </span>
                      <span
                        className={`mt-4 h-px w-24 bg-gradient-to-r ${
                          left ? "from-primary/60 to-transparent" : "from-transparent to-primary/60"
                        }`}
                      />
                      <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-primary/80">
                        <Images className="w-3.5 h-3.5" />
                        {item.images?.length ?? 0} photos
                      </span>
                    </motion.div>

                    <div className="glow-border shine-hover lift-hover card-gradient rounded-2xl border border-border p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-2.5 py-1 text-xs text-muted-foreground">
                          {item.type === "internship" ? <Briefcase className="w-3 h-3 text-primary" /> : <Users className="w-3 h-3 text-primary" />}
                          {item.type === "internship" ? "Internship" : "Organization"}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs text-primary">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        {item.highlight && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-yellow-500/10 px-2.5 py-1 text-xs text-yellow-500">
                            <Star className="w-3 h-3 fill-yellow-500" />
                            Award
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg md:text-xl font-display font-semibold leading-snug">{item.title}</h3>
                      <p className="mt-1 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground/80">{item.company}</span>
                        {item.location && (
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {item.location}
                          </span>
                        )}
                      </p>

                      <ul className="mt-4 space-y-1.5">
                        {item.description.slice(0, 3).map((desc, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span>{desc}</span>
                          </li>
                        ))}
                        {item.description.length > 3 && (
                          <li className="text-xs text-muted-foreground/70 pl-3.5">
                            +{item.description.length - 3} more highlights
                          </li>
                        )}
                      </ul>

                      {item.images && item.images.length > 0 && (
                        <div className="mt-5 flex items-center gap-2">
                          {item.images.slice(0, 4).map((src, i) => (
                            <button
                              key={src}
                              onClick={() => openModal(item, i)}
                              className="relative h-14 w-20 overflow-hidden rounded-lg border border-border/70 transition-transform duration-300 hover:scale-105 hover:border-primary/60"
                            >
                              <img src={src} alt={`${item.company} documentation ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
                            </button>
                          ))}
                          {item.images.length > 4 && (
                            <button
                              onClick={() => openModal(item, 4)}
                              className="h-14 w-14 rounded-lg border border-border/70 text-xs text-muted-foreground hover:border-primary/60 hover:text-primary transition-colors"
                            >
                              +{item.images.length - 4}
                            </button>
                          )}
                        </div>
                      )}

                      <button
                        onClick={() => openModal(item)}
                        className="mt-5 inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
                      >
                        <Images className="w-4 h-4" />
                        View details
                        {item.images?.length ? ` (${item.images.length} photos)` : ""}
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto p-4 lg:flex lg:items-center lg:justify-center"
            onClick={closeModal}
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-md" />

            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", duration: 0.45 }}
              className={`relative z-10 w-full overflow-y-auto bg-card rounded-2xl border border-border shadow-2xl lg:max-h-[90vh] lg:overflow-hidden ${
                selectedExperience.images?.length ? "max-w-5xl" : "max-w-2xl"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <div className={`grid gap-0 lg:h-[90vh] lg:min-h-0 ${selectedExperience.images?.length ? "lg:grid-cols-2" : "grid-cols-1"}`}>
                {selectedExperience.images && selectedExperience.images.length > 0 && (
                  <div className="relative bg-muted aspect-video lg:aspect-auto lg:h-full min-h-[300px] lg:min-h-0">
                    <img
                      src={selectedExperience.images[currentImageIndex]}
                      alt={`Documentation ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain"
                    />

                    {selectedExperience.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {selectedExperience.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`h-2 rounded-full transition-all ${
                                index === currentImageIndex ? "w-6 bg-primary" : "w-2 bg-foreground/30 hover:bg-foreground/50"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

                <div className="p-8 min-h-0 lg:overflow-y-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {selectedExperience.type === "internship" ? (
                        <Briefcase className="w-5 h-5 text-primary" />
                      ) : (
                        <Users className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {selectedExperience.type === "internship" ? "Internship" : "Organization"}
                    </span>
                    {selectedExperience.highlight && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-500/10 text-yellow-500 text-xs rounded-full">
                        <Star className="w-3 h-3 fill-yellow-500" />
                        Award
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-display font-bold mb-2">{selectedExperience.title}</h3>
                  <p className="text-lg text-muted-foreground mb-2">{selectedExperience.company}</p>

                  {selectedExperience.location && (
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedExperience.location}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-primary mb-6">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedExperience.period}</span>
                  </div>

                  <h4 className="text-sm font-semibold text-foreground mb-3">Activities &amp; Achievements:</h4>
                  <div className="space-y-2">
                    {selectedExperience.description.map((desc, i) => (
                      <div key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
