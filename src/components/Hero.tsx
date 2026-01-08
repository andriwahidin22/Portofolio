import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowDown, Briefcase, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROFILE_IMAGE_SRC = "src/assets/Profile.JPEG";

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 max-w-3xl">
            {/* Professional Badge with Animation */}
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/20 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Professional Web Developer</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            </motion.div>

            {/* Greeting */}
            <motion.p
              className="text-primary font-medium mb-2 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi, I'm
            </motion.p>

            {/* Name with Background Effect */}
            <div className="relative inline-block mb-4">
              {/* Background Highlight */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-2xl blur-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              
              {/* Name */}
              <motion.h1
                className="relative text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Andri
                <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70">
                  Wahidin
                </span>
              </motion.h1>
            </div>

            {/* Title with typewriter effect */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display">
                <span className="text-gradient glow-text">Web Developer</span>
                <span className="text-muted-foreground"> & IT Programmer</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              D3 Information Management graduate from Politeknik Negeri Lampung with experience 
              in modern web application development. Specialized in creating responsive, 
              performant, and visually appealing user interfaces with cutting-edge technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
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
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <span className="text-muted-foreground text-sm">Connect with me:</span>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/andriwahidin22", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/andri-wahidin-38b259275/", label: "LinkedIn" },
                  { icon: Instagram, href: "https://instagram.com/andri_wahidin22", label: "Instagram" },
                ].map(({ icon: Icon, href, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300"
                    aria-label={label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 1.4 + (index * 0.1),
                      duration: 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Profile Image with Animation */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Floating Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-primary/10 to-primary/5 rounded-full blur-3xl" />
              
              {/* Animated floating shapes */}
              <motion.div
                className="absolute top-10 right-10 w-8 h-8 rounded-full bg-primary/20"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute bottom-10 left-10 w-6 h-6 rounded-full bg-primary/15"
                animate={{
                  y: [0, 20, 0],
                  x: [0, 10, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Profile Image Container */}
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              animate={{
                y: [0, -15, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/20 to-primary/10 rounded-full blur-2xl" />
              
              {/* Main Image Container */}
              <div className="relative w-full h-full">
                {/* Animated Border */}
                <motion.div
                  className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-primary/50 to-transparent"
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Image Frame */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
                  {/* Profile Image with Fallback */}
                  <div className="relative w-full h-full">
                    <img
                      src={PROFILE_IMAGE_SRC}
                      alt="Andri Wahidin - Professional Web Developer"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        // Fallback jika gambar tidak ditemukan
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          // Tampilkan fallback UI
                          parent.innerHTML = `
                            <div class="w-full h-full bg-gradient-to-br from-primary/30 via-primary/10 to-background flex flex-col items-center justify-center p-8">
                              <User class="w-24 h-24 md:w-32 md:h-32 text-primary/40 mb-4" />
                              <p class="text-center text-sm text-muted-foreground">
                                Please set PROFILE_IMAGE_SRC<br />
                                in Hero.tsx
                              </p>
                            </div>
                          `;
                        }
                      }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                  </div>
                </div>
                
                {/* Badge Indicator */}
                <motion.div
                  className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Available for work
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.5 },
          y: { delay: 2.5, duration: 1.5, repeat: Infinity },
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
    </section>
  );
};