import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Users, Calendar, MapPin } from "lucide-react";

const internships = [
  {
    title: "Backend Developer Intern",
    company: "CV Newus Technology",
    location: "Lampung",
    period: "2024",
    description: [
      "Developed REST APIs using Express.js for E-Ticket Museum Lampung project",
      "Designed database schema using PostgreSQL",
      "Collaborated with team on UI/UX design using Figma",
      "Implemented secure authentication and authorization systems",
    ],
  },
];

const organizations = [
  {
    title: "Member",
    organization: "Himpunan Mahasiswa Jurusan (HMJ)",
    period: "2021 - 2024",
    description: [
      "Active member in campus organization activities",
      "Participated in various academic and social events",
      "Collaborated with fellow students on projects",
    ],
  },
  {
    title: "Volunteer",
    organization: "Tech Community Lampung",
    period: "2023",
    description: [
      "Volunteered in technology community events",
      "Helped organize workshops and seminars",
      "Networked with local tech professionals",
    ],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
              {internships.map((internship, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="card-gradient p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h4 className="text-xl font-semibold text-foreground">
                      {internship.title}
                    </h4>
                    <div className="flex items-center gap-2 text-primary text-sm mt-2 sm:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span>{internship.period}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground">
                    <span className="font-medium">{internship.company}</span>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{internship.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {internship.description.map((desc, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
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
              {organizations.map((org, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="card-gradient p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h4 className="text-xl font-semibold text-foreground">
                      {org.title}
                    </h4>
                    <div className="flex items-center gap-2 text-primary text-sm mt-2 sm:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span>{org.period}</span>
                    </div>
                  </div>

                  <p className="font-medium text-muted-foreground mb-4">
                    {org.organization}
                  </p>

                  <ul className="space-y-2">
                    {org.description.map((desc, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
