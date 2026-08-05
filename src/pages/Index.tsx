import { Header } from "@/components/Header";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Certificates } from "@/components/Certificates";
import { Documents } from "@/components/Documents";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <SkillsMarquee />
        <About />
        <Experience />
        <Projects />
        <Services />
        <Certificates />
        <Documents />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
