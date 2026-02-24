import { motion } from "framer-motion";
import { Suspense, lazy } from "react";

const FloatingShape = lazy(() => import("./FloatingShape"));

const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "C#", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "NestJS"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    title: "Tools & Concepts",
    skills: ["Git", "GitHub", "Docker", "REST APIs", "Postman", "OOP", "DSA", "DBMS"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* 3D floating shape decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-50 pointer-events-none">
        <Suspense fallback={null}>
          <FloatingShape />
        </Suspense>
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
            Skills
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Tech <span className="text-gradient">Arsenal</span>
          </h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {skillCategories.map((cat) => (
              <motion.div key={cat.title} variants={categoryVariants}>
                <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">
                  {cat.title}
                </h3>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={chipVariants}
                      whileHover={{ scale: 1.08, y: -2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="px-3 py-1.5 text-sm rounded-lg bg-muted text-foreground border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
