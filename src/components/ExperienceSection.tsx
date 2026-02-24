import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "SparkoSol",
    period: "Oct 2025 – Present",
    points: [
      "Developed full-stack web features using React frontend and NestJS backend services.",
      "Designed RESTful APIs with secure authentication (JWT) integration.",
      "Contributed to database schema design and optimized queries for performance.",
      "Collaborated using Git/GitHub workflows for version control and feature rollouts.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "SparkoSol",
    period: "July 2025 – Sep 2025",
    points: [
      "Assisted in backend API development and bug fixing.",
      "Collaborated on database design for scalable backend services.",
      "Gained hands-on experience in agile practices and software lifecycle.",
      "Converted a 3-month internship into a full-time role based on strong evaluations.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-sm tracking-widest uppercase mb-2"
          >
            Experience
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Where I've <span className="text-gradient">Worked</span>
          </h2>

          <div className="relative">
            {/* Animated timeline line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-4 md:left-6 top-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent"
            />

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-12 md:pl-16"
                >
                  {/* Animated timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.25 + 0.2, type: "spring", stiffness: 300 }}
                    className="absolute left-2 md:left-4 top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center"
                  >
                    <Briefcase size={10} className="text-primary" />
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-gradient-card rounded-xl p-6 border border-border shadow-card hover:shadow-glow hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-primary text-sm">{exp.company}</p>
                      </div>
                      <span className="text-muted-foreground text-sm font-mono mt-1 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.points.map((point, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.25 + j * 0.08 + 0.3 }}
                          className="text-muted-foreground text-sm flex gap-2"
                        >
                          <span className="text-primary mt-1 shrink-0">▹</span>
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
