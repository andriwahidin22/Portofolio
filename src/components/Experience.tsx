import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Users, Calendar, MapPin, X, ChevronLeft, ChevronRight, Eye, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  // Internship
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
    images: [],
    type: "internship",
  },
  // Organizations
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
    images: [],
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
    images: [],
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
    images: [],
    type: "organization",
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const internships = experienceData.filter((item) => item.type === "internship");
  const organizations = experienceData.filter((item) => item.type === "organization");

  const openModal = (experience: ExperienceItem) => {
    setSelectedExperience(experience);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedExperience && selectedExperience.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedExperience.images!.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedExperience && selectedExperience.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedExperience.images!.length - 1 : prevIndex - 1
      );
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  const ExperienceCard = ({ item, index, delay }: { item: ExperienceItem; index: number; delay: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: delay + index * 0.1 }}
      className="card-gradient p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div className="flex items-center gap-2">
          <h4 className="text-xl font-semibold text-foreground">
            {item.title}
          </h4>
          {item.highlight && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-500/10 text-yellow-500 text-xs rounded-full">
              <Star className="w-3 h-3 fill-yellow-500" />
              Award
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 text-primary text-sm mt-2 sm:mt-0">
          <Calendar className="w-4 h-4" />
          <span>{item.period}</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground">
        <span className="font-medium">{item.company}</span>
        {item.location && (
          <div className="flex items-center gap-1 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{item.location}</span>
          </div>
        )}
      </div>

      <ul className="space-y-2 mb-4">
        {item.description.map((desc, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-muted-foreground text-sm"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>{desc}</span>
          </li>
        ))}
      </ul>

      {/* View Details Button - Always visible */}
      <Button
        onClick={() => openModal(item)}
        variant="outline"
        size="sm"
        className="mt-2 group-hover:border-primary group-hover:text-primary transition-colors"
      >
        <Eye className="w-4 h-4 mr-2" />
        View Details
        {item.images && item.images.length > 0 && ` (${item.images.length} Photos)`}
      </Button>
    </motion.div>
  );

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto">
            My journey through internships and organizations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Internship Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground">
                Internship
              </h3>
            </div>

            <div className="space-y-6">
              {internships.map((item, index) => (
                <ExperienceCard key={item.id} item={item} index={index} delay={0.3} />
              ))}
            </div>
          </motion.div>

          {/* Organization Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground">
                Organization
              </h3>
            </div>

            <div className="space-y-6">
              {organizations.map((item, index) => (
                <ExperienceCard key={item.id} item={item} index={index} delay={0.5} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Experience Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/95 backdrop-blur-md" />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className={`relative z-10 w-full max-h-[90vh] overflow-auto bg-card rounded-2xl border border-border shadow-2xl ${
                selectedExperience.images && selectedExperience.images.length > 0 
                  ? 'max-w-5xl' 
                  : 'max-w-2xl'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <div className={`grid gap-0 ${
                selectedExperience.images && selectedExperience.images.length > 0 
                  ? 'lg:grid-cols-2' 
                  : 'grid-cols-1'
              }`}>
                {/* Image Gallery - Only show if images exist */}
                {selectedExperience.images && selectedExperience.images.length > 0 && (
                  <div className="relative bg-muted aspect-video lg:aspect-auto lg:h-full min-h-[300px]">
                    <img
                      src={selectedExperience.images[currentImageIndex]}
                      alt={`Documentation ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain"
                    />

                    {/* Image Navigation */}
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

                        {/* Image Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {selectedExperience.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-all ${
                                index === currentImageIndex
                                  ? 'w-6 bg-primary'
                                  : 'bg-foreground/30 hover:bg-foreground/50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Details */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {selectedExperience.type === "internship" ? (
                        <Briefcase className="w-5 h-5 text-primary" />
                      ) : (
                        <Users className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground capitalize">
                      {selectedExperience.type === "internship" ? "Internship" : "Organization"}
                    </span>
                    {selectedExperience.highlight && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-500/10 text-yellow-500 text-xs rounded-full">
                        <Star className="w-3 h-3 fill-yellow-500" />
                        Award
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-display font-bold mb-2">
                    {selectedExperience.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-2">
                    {selectedExperience.company}
                  </p>
                  
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

                  <h4 className="text-sm font-semibold text-foreground mb-3">Activities & Achievements:</h4>
                  <div className="space-y-2">
                    {selectedExperience.description.map((desc, i) => (
                      <div key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{desc}</span>
                      </div>
                    ))}
                  </div>

                  {/* No images message */}
                  {(!selectedExperience.images || selectedExperience.images.length === 0) && (
                    <div className="mt-6 p-4 bg-muted/50 rounded-xl border border-border text-center">
                      <Award className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Documentation photos coming soon
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
