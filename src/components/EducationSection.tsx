import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 md:py-32">
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
            Education
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Academic <span className="text-gradient">Background</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              {
                title: "BS Computer Science",
                school: "MNS University of Agriculture, Multan",
                period: "2022 – 2026",
                grade: "CGPA: 3.87 / 4.0",
                delay: 0,
              },
              {
                title: "FSC Pre Medical",
                school: "Emerson College, Multan",
                period: "2020 – 2022",
                grade: "75%",
                delay: 0.15,
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: edu.delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="bg-gradient-card rounded-xl p-6 border border-border shadow-card hover:shadow-glow hover:border-primary/30 transition-all duration-300"
              >
                <motion.div whileHover={{ rotate: 10 }} transition={{ type: "spring" }}>
                  <GraduationCap className="text-primary mb-3" size={28} />
                </motion.div>
                <h3 className="text-lg font-semibold">{edu.title}</h3>
                <p className="text-primary text-sm">{edu.school}</p>
                <p className="text-muted-foreground text-sm mt-1">{edu.period}</p>
                <p className="text-foreground font-mono text-sm mt-3">{edu.grade}</p>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-sm tracking-widest uppercase mb-2"
          >
            Achievements
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Awards & <span className="text-gradient">Recognition</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                title: 'Chief Minister Punjab "Honhaar" Scholarship',
                year: "2025",
                desc: "Awarded a highly competitive, merit-based scholarship for maintaining exceptional academic standing.",
              },
              {
                title: "Prime Minister's Youth Laptop Scheme Award",
                year: "2023",
                desc: "Recognized for academic excellence at the national level and awarded a laptop to support technical research.",
              },
            ].map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 8 }}
                className="flex gap-4 bg-gradient-card rounded-xl p-5 border border-border shadow-card hover:shadow-glow hover:border-primary/30 transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                >
                  <Award className="text-primary shrink-0 mt-1" size={22} />
                </motion.div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <h3 className="font-semibold">{ach.title}</h3>
                    <span className="text-xs font-mono text-primary">{ach.year}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">{ach.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
