import { motion } from "framer-motion";
import {
  ExternalLink,
  MessageCircle,
  Gamepad2,
  CalendarCheck,
} from "lucide-react";

const projects = [
  {
    icon: MessageCircle,
    title: "Anonymous Chat App",
    tech: ["React", "NestJS", "MongoDB", "WebSocket"],
    desc: "Full-stack real-time chat with private chats, group conversations, and anonymous rooms using WebSocket communication.",
    link: "https://bunny-chat-app-frontend.vercel.app/",
    note: "Backend services are currently offline due to hosting limitations.",
  },
  {
    icon: Gamepad2,
    title: "Gamified Habit Tracker",
    tech: ["React", "NestJS", "MongoDB"],
    desc: "Task management app with a gamification engine — streaks, dynamic point awards, and a custom reward-claiming system.",
    link: "https://gamified-habit-tracker-frontend.vercel.app/",
    note: "",
  },
  {
    icon: CalendarCheck,
    title: "Marriage Hall Booking System",
    tech: ["React", "NestJS", "Prisma", "PostgreSQL"],
    desc: "Comprehensive venue booking platform with real-time availability, dynamic filters, and an admin dashboard for hall owners.",
    link: "",
    note: "Live preview is currently unavailable as the project is under active development.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30">
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
            Projects
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Things I've <span className="text-gradient">Built</span>
          </h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 shadow-card hover:shadow-glow cursor-default"
                style={{ perspective: "1000px" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring" }}
                  >
                    <project.icon className="text-primary" size={28} />
                  </motion.div>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-primary/80 hover:text-primary transition-colors"
                    >
                      Live Demo
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <motion.div
                      initial={{ x: 5, opacity: 0.5 }}
                      whileHover={{ x: 0, opacity: 1 }}
                    >
                      <ExternalLink
                        size={18}
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                      />
                    </motion.div>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {project.note && (
                  <p className="text-xs text-yellow-400/80 italic mt-2">
                    ⚠ Note: {project.note}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
