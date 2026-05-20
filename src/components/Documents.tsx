import { motion } from "framer-motion";
import { FileText, FileBadge, Calendar, HardDrive, Sparkles } from "lucide-react";
import { DownloadButton } from "./DownloadButton";

const documents = [
  {
    title: "Resume / CV",
    subtitle: "ATS Friendly · Updated 2026",
    description:
      "Professional modern resume highlighting education, skills, and experience. Optimized for Applicant Tracking Systems.",
    fileUrl: "/cv/Andri-Wahidin-CV.pdf",
    fileName: "Andri-Wahidin-CV.pdf",
    size: "≈ 180 KB",
    updated: "May 2026",
    icon: FileBadge,
    accent: "from-primary/30 to-primary/5",
  },
  {
    title: "Portfolio Presentation",
    subtitle: "Professional Showcase",
    description:
      "Curated showcase of projects, UI design work, frontend stack, and branding profile in a premium PDF deck.",
    fileUrl: "/portfolio/Andri-Wahidin-Portfolio.pdf",
    fileName: "Andri-Wahidin-Portfolio.pdf",
    size: "≈ 220 KB",
    updated: "May 2026",
    icon: FileText,
    accent: "from-cyan-400/30 to-primary/5",
  },
];

export const Documents = () => {
  return (
    <section id="documents" className="py-14 md:py-20 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Professional Documents</span>
          </div>
          <h2 className="section-title">
            Resume & <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Download my latest resume and portfolio presentation — crafted for recruiters and collaborators.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {documents.map((doc, i) => {
            const Icon = doc.icon;
            return (
              <motion.article
                key={doc.fileName}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-primary/40 via-border to-transparent"
              >
                <div className="relative h-full rounded-[calc(1.5rem-1px)] bg-card/60 backdrop-blur-xl p-7 overflow-hidden">
                  {/* Floating accent */}
                  <div
                    className={`absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br ${doc.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* PDF preview mockup */}
                  <div className="relative mb-6 flex items-center gap-4">
                    <div className="relative w-20 h-24 rounded-lg bg-gradient-to-br from-background to-secondary border border-border shadow-lg flex flex-col overflow-hidden">
                      <div className="h-2 bg-primary/60" />
                      <div className="flex-1 p-2 space-y-1">
                        <div className="h-1 w-3/4 bg-muted-foreground/30 rounded" />
                        <div className="h-1 w-full bg-muted-foreground/20 rounded" />
                        <div className="h-1 w-2/3 bg-muted-foreground/20 rounded" />
                        <div className="h-1 w-1/2 bg-muted-foreground/20 rounded" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-foreground">{doc.title}</h3>
                      <p className="text-sm text-primary">{doc.subtitle}</p>
                    </div>
                  </div>

                  <p className="relative text-muted-foreground text-sm leading-relaxed mb-5">{doc.description}</p>

                  <div className="relative flex flex-wrap gap-4 text-xs text-muted-foreground mb-6">
                    <span className="inline-flex items-center gap-1.5">
                      <HardDrive className="w-3.5 h-3.5" /> {doc.size}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> Updated {doc.updated}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" /> PDF
                    </span>
                  </div>

                  <div className="relative">
                    <DownloadButton
                      fileUrl={doc.fileUrl}
                      fileName={doc.fileName}
                      label={`Download ${doc.title}`}
                      subtitle={doc.subtitle}
                      icon={Icon}
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};