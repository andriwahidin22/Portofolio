import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink, Github, Eye, Award, Ticket, ShoppingCart, CheckCircle, Users, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  descriptionEN: string;
  category: string;
  technologies: string[];
  image: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  icon?: React.ReactNode;
  role?: string;
  duration?: string;
  context?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Ticket Museum Lampung",
    description: "Website sistem tiket digital untuk Museum Lampung dengan fitur pemesanan online, manajemen pengunjung, dan laporan statistik.",
    descriptionEN: "A digital ticketing system website for Lampung Museum featuring online booking, visitor management, and statistical reporting. Developed as a final project during internship.",
    category: "Tourism & Ticketing",
    technologies: ["Next.js", "Express.js", "PostgreSQL", "Figma", "JWT", "REST API"],
    image: "src/assets/Project/ETicket/1.png",
    images: [
      "src/assets/Project/ETicket/1.png",
      "src/assets/Project/ETicket/2.png",
      "src/assets/Project/ETicket/3.png"
    ],
    icon: <Ticket className="w-6 h-6" />,
    githubUrl: "https://github.com/andriwahidin22",
    role: "Backend Developer & UI/UX Designer",
    duration: "Mar - Jun 2025",
    context: "Final project for internship at CV Newus Technology"
  },
  {
    id: 2,
    title: "Pencak Silat Championship System",
    description: "Sistem informasi kejuaraan pencak silat dengan pendaftaran online, penjadwalan otomatis, dan penilaian digital.",
    descriptionEN: "Web-based information system for managing pencak silat competitions with online registration, automated scheduling, and digital judging system.",
    category: "Sports Management",
    technologies: ["CodeIgniter 4", "PHP", "MySQL", "JavaScript", "Bootstrap", "AJAX"],
    image: "src/assets/Project/Scoring/1.png",
    images: [
      "src/assets/Project/Scoring/1.png",
      "src/assets/Project/Scoring/2.png",
      "src/assets/Project/Scoring/3.png"
    ],
    icon: <Award className="w-6 h-6" />,
    githubUrl: "https://github.com/andriwahidin22",
    role: "Fullstack Developer",
    duration: "Academic Project 2024",
    context: "University course project (PUM - Independent General Project)"
  },
  {
    id: 3,
    title: "Student Aspiration Platform",
    description: "Platform pengaduan online untuk mahasiswa dengan sistem anonim, tracking real-time, dan dashboard admin.",
    descriptionEN: "Online complaint and suggestion platform for university students with anonymous submission, real-time tracking, and comprehensive admin dashboard.",
    category: "Campus Management",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "AJAX", "Email SMTP"],
    image: "src/assets/Project/Aspirasi/1.png",
    images: [
      "src/assets/Project/Aspirasi/1.png",
      "src/assets/Project/Aspirasi/2.png",
      "src/assets/Project/Aspirasi/3.png",
    ],
    icon: <Users className="w-6 h-6" />,
    githubUrl: "https://github.com/andriwahidin22/Project-Aspirasi",
    role: "Fullstack Developer",
    duration: "Personal Project 2025",
    context: "Personal project to help students voice concerns to campus administration"
  },
  {
    id: 4,
    title: "QR-Based Attendance System",
    description: "Sistem absensi berbasis QR code dengan generate QR harian, tracking real-time, dan report generation.",
    descriptionEN: "Web-based attendance management system using QR code technology with daily unique QR codes, real-time tracking, and comprehensive reporting.",
    category: "Attendance System",
    technologies: ["React.js", "Express.js", "Node.js", "MySQL", "QR Code", "Socket.io", "PDF Generation"],
    image: "src/assets/Project/Absensi/1.png",
    images: [
      "src/assets/Project/Absensi/1.png",
      "src/assets/Project/Absensi/2.png",
    ],
    icon: <Calendar className="w-6 h-6" />,
    githubUrl: "https://github.com/andriwahidin22",
    role: "Fullstack Developer",
    duration: "Project 2025",
    context: "Digital attendance solution for educational institutions"
  },
  {
    id: 5,
    title: "WebStore E-Commerce Platform",
    description: "Platform e-commerce lengkap dengan keranjang belanja, checkout, dan manajemen produk.",
    descriptionEN: "Complete e-commerce platform with shopping cart system, checkout process, and comprehensive product management.",
    category: "E-Commerce",
    technologies: ["CodeIgniter 4", "PHP", "MySQL", "Bootstrap", "jQuery", "REST API", "Payment Gateway"],
    image: "src/assets/Project/Webstore/1.png",
    images: [
      "src/assets/Project/Webstore/1.png",
      "src/assets/Project/Webstore/2.png",
      "src/assets/Project/Webstore/3.png",
    ],
    icon: <ShoppingCart className="w-6 h-6" />,
    githubUrl: "https://github.com/andriwahidin22/WebStore",
    role: "Fullstack Developer",
    duration: "Certification Project 2025",
    context: "BNSP Junior Web Programmer certification project"
  },
  {
    id: 6,
    title: "Project Approval System",
    description: "Sistem manajemen pengajuan proyek dengan workflow multi-level dan real-time notification.",
    descriptionEN: "Corporate project proposal and approval management system with multi-level workflow and real-time notifications.",
    category: "Business Management",
    technologies: ["React.js", "Express.js", "Node.js", "MongoDB", "JWT", "Redux", "Email Notification"],
    image: "src/assets/Project/Approve/1.png",
    images: [
      "src/assets/Project/Approve/1.png",
      "src/assets/Project/Approve/2.png",
    ],
    icon: <CheckCircle className="w-6 h-6" />,
    githubUrl: "https://github.com/andriwahidin22/",
    role: "Fullstack Developer",
    duration: "Project 2025",
    context: "Project management system for corporate environments"
  },
  {
    id: 7,
    title: "Network Configuration Project",
    description: "Konfigurasi jaringan Mikrotik dan implementasi web server Ubuntu untuk infrastruktur IT.",
    descriptionEN: "Network infrastructure configuration using Mikrotik routers and Ubuntu Server implementation for IT infrastructure.",
    category: "Network Administration",
    technologies: ["Mikrotik", "Ubuntu Server", "Linux", "Networking", "DHCP", "Routing", "Web Server"],
    image: "src/assets/Project/Networking/1.png",
    images: [
      "src/assets/Project/Networking/1.png",
      "src/assets/Project/Networking/2.png",
      "src/assets/Project/Networking/3.png"
    ],
    icon: <Shield className="w-6 h-6" />,
    githubUrl: "#",
    role: "Network Administrator",
    duration: "Internship 2022",
    context: "Internship project at LPK Bina Dharma"
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState<'id' | 'en'>('en');

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  const featuresData = {
    1: {
      id: [
        "Sistem pemesanan tiket online dengan berbagai kategori dan harga",
        "Manajemen pengunjung dan laporan statistik real-time",
        "QR code ticket untuk akses cepat di lokasi museum",
        "Dashboard admin untuk manajemen tiket dan pengunjung"
      ],
      en: [
        "Online ticket booking system with various categories and pricing",
        "Visitor management and real-time statistical reporting",
        "QR code tickets for quick access at museum location",
        "Admin dashboard for ticket and visitor management"
      ]
    },
    2: {
      id: [
        "Pendaftaran peserta online dengan upload dokumen",
        "Sistem penjadwalan pertandingan otomatis",
        "Penilaian digital oleh juri dengan skoring real-time",
        "Generasi sertifikat otomatis untuk pemenang"
      ],
      en: [
        "Online participant registration with document upload",
        "Automated match scheduling system",
        "Digital judging by jury with real-time scoring",
        "Automatic certificate generation for winners"
      ]
    },
    3: {
      id: [
        "Pengaduan anonim atau terbuka dengan pilihan kategori",
        "Tracking status pengaduan dari 'dikirim' sampai 'selesai'",
        "Notifikasi email untuk update status pengaduan",
        "Admin dashboard dengan analytics dan reporting"
      ],
      en: [
        "Anonymous or public complaints with category options",
        "Complaint status tracking from 'submitted' to 'resolved'",
        "Email notifications for status updates",
        "Admin dashboard with analytics and reporting"
      ]
    },
    4: {
      id: [
        "Generate QR code unik yang berubah setiap hari",
        "Real-time attendance tracking dengan Socket.io",
        "Report generation dalam format PDF dan Excel",
        "Sistem multi-role: Admin, Pengajar, Mahasiswa"
      ],
      en: [
        "Generate unique QR codes that change daily",
        "Real-time attendance tracking using Socket.io",
        "Report generation in PDF and Excel formats",
        "Multi-role system: Admin, Teacher, Student"
      ]
    },
    5: {
      id: [
        "Sistem keranjang belanja dengan perhitungan otomatis",
        "Checkout dengan multiple payment gateway",
        "Admin panel untuk CRUD produk, kategori, dan order",
        "Sistem rating dan review produk oleh customer"
      ],
      en: [
        "Shopping cart system with automatic calculations",
        "Checkout with multiple payment gateways",
        "Admin panel for product, category, and order CRUD operations",
        "Product rating and review system by customers"
      ]
    },
    6: {
      id: [
        "Workflow approval multi-level (Staff → Manager → Director)",
        "Real-time notification system dengan email dan in-app",
        "Document attachment support (PDF, DOC, Images)",
        "Dashboard analytics untuk monitoring project status"
      ],
      en: [
        "Multi-level approval workflow (Staff → Manager → Director)",
        "Real-time notification system via email and in-app",
        "Document attachment support (PDF, DOC, Images)",
        "Dashboard analytics for monitoring project status"
      ]
    },
    7: {
      id: [
        "Konfigurasi Mikrotik untuk manajemen jaringan kampus",
        "Implementasi DHCP Server dan IP Address Management",
        "Setup web server dengan Ubuntu Server",
        "Troubleshooting jaringan dan dokumentasi konfigurasi"
      ],
      en: [
        "Mikrotik configuration for campus network management",
        "DHCP Server implementation and IP Address Management",
        "Web server setup with Ubuntu Server",
        "Network troubleshooting and configuration documentation"
      ]
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

  // Prevent scrolling on modal open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5 -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            A collection of professional, academic, and personal projects showcasing full-stack development capabilities
          </p>
          
          {/* Language Toggle */}
          <div className="flex justify-center mt-6">
            <div className="inline-flex bg-muted rounded-full p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${language === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('id')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${language === 'id' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Bahasa Indonesia
              </button>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              {/* Project Image with Icon Overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Icon overlay */}
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center text-primary">
                    {project.icon}
                  </div>
                </div>
                {/* Role Badge */}
                {project.role && (
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-muted-foreground">
                      {project.role}
                    </div>
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    onClick={() => openModal(project)}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-full"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category and Duration */}
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                    {project.category}
                  </div>
                  {project.duration && (
                    <span className="text-xs text-muted-foreground">{project.duration}</span>
                  )}
                </div>

                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {language === 'en' ? project.descriptionEN : project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => openModal(project)}
                    className="text-foreground hover:text-primary"
                  >
                    View Gallery
                  </Button>
                  <div className="flex gap-2">
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button
            variant="outline"
            className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-6 text-lg font-medium"
            onClick={() => window.open('https://github.com/andriwahidin22', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>

      {/* Modal for Project Details & Image Gallery */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* Modal Content */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div
                className="relative bg-card border border-border rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                {/* Language Toggle in Modal */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="inline-flex bg-card/80 backdrop-blur-sm border border-border rounded-full p-1">
                    <button
                      onClick={() => setLanguage('en')}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${language === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => setLanguage('id')}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${language === 'id' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      ID
                    </button>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 h-full max-h-[90vh]">
                  {/* Left Column: Image Gallery */}
                  <div className="relative h-full min-h-[400px] lg:min-h-auto bg-muted/20">
                    {/* Main Image */}
                    <div className="relative h-full overflow-hidden rounded-l-2xl">
                      <img
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain lg:object-cover"
                      />

                      {/* Navigation Arrows */}
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight size={24} />
                      </button>

                      {/* Image Counter */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 text-sm">
                        {currentImageIndex + 1} / {selectedProject.images.length}
                      </div>

                      {/* Image Thumbnails */}
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4">
                        {selectedProject.images.map((img, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${index === currentImageIndex ? 'border-primary' : 'border-transparent'}`}
                            aria-label={`View image ${index + 1}`}
                          >
                            <img
                              src={img}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Project Details */}
                  <div className="p-6 lg:p-8 overflow-y-auto">
                    {/* Project Header */}
                    <div className="mb-6">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full">
                          {selectedProject.icon}
                          <span>{selectedProject.category}</span>
                        </div>
                        {selectedProject.duration && (
                          <span className="text-sm text-muted-foreground">{selectedProject.duration}</span>
                        )}
                      </div>
                      
                      <h3 className="text-3xl font-display font-bold mb-3">
                        {selectedProject.title}
                      </h3>
                      
                      {selectedProject.role && (
                        <div className="mb-4">
                          <span className="text-sm font-medium text-primary">Role: </span>
                          <span className="text-sm text-muted-foreground">{selectedProject.role}</span>
                        </div>
                      )}
                      
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {language === 'en' ? selectedProject.descriptionEN : selectedProject.description}
                      </p>
                    </div>

                    {/* Project Context */}
                    {selectedProject.context && (
                      <div className="mb-8 bg-muted/20 rounded-lg p-4">
                        <h4 className="text-lg font-semibold mb-2">
                          {language === 'en' ? 'Project Context' : 'Konteks Proyek'}
                        </h4>
                        <p className="text-muted-foreground">
                          {selectedProject.context}
                        </p>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-3">
                        {language === 'en' ? 'Technologies Used' : 'Teknologi yang Digunakan'}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-3">
                        {language === 'en' ? 'Key Features' : 'Fitur Utama'}
                      </h4>
                      <ul className="space-y-3">
                        {selectedProject.id in featuresData && 
                          featuresData[selectedProject.id as keyof typeof featuresData][language].map((feature: string, index: number) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))
                        }
                      </ul>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
                      {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                        <Button
                          variant="outline"
                          asChild
                          className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-6"
                        >
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            {language === 'en' ? 'View Source Code' : 'Lihat Kode Sumber'}
                          </a>
                        </Button>
                      )}
                      {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                        <Button
                          asChild
                          className="bg-primary text-primary-foreground hover:bg-primary/90 px-6"
                        >
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            {language === 'en' ? 'Live Demo' : 'Demo Langsung'}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};