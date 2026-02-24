import { motion } from "framer-motion";
import { Code2, Server, Database } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Frontend", desc: "React, TypeScript, Tailwind CSS" },
  { icon: Server, label: "Backend", desc: "NestJS, Node.js, Express" },
  { icon: Database, label: "Database", desc: "PostgreSQL, MongoDB, Prisma" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-sm tracking-widest uppercase mb-2"
          >
            About Me
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Crafting Digital <span className="text-gradient">Experiences</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-muted-foreground max-w-3xl text-lg leading-relaxed mb-12"
          >
            Results-driven Software Engineer and final-year Computer Science student with hands-on 
            industry experience building production-level full-stack applications. Successfully 
            transitioned from a 3-month internship to a full-time role at SparkoSol, specializing 
            in scalable REST APIs with NestJS and dynamic frontends with React.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {highlights.map((item) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                whileHover={{ y: -8, borderColor: "hsl(175 80% 50% / 0.5)" }}
                className="bg-gradient-card rounded-xl p-6 border border-border transition-all duration-300 shadow-card hover:shadow-glow cursor-default"
              >
                <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: "spring" }}>
                  <item.icon className="text-primary mb-4" size={28} />
                </motion.div>
                <h3 className="font-semibold text-lg mb-1">{item.label}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
