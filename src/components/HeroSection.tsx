import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
} from "lucide-react";
import { Suspense, lazy } from "react";

const ParticleField = lazy(() => import("./ParticleField"));

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Particle Background */}
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>

      <div className="absolute inset-0 bg-gradient-hero opacity-60" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-primary font-mono text-sm uppercase mb-4"
          >
            Software Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          >
            Abdul{" "}
            <motion.span
              className="text-gradient inline-block"
              animate={{
                backgroundSize: ["100%", "200%", "100%"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Basit
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
          >
            Full-stack developer specializing in the MERN stack. Building
            scalable, high-performance web solutions with React & NestJS.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <motion.a
              href="/Abdul_Basit_Software_Engineer_CV.pdf"
              download="Abdul_Basit_Software_Engineer_CV.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm text-white overflow-hidden transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(280, 80%, 55%) 100%)",
                boxShadow: "0 4px 20px hsla(var(--primary), 0.4)",
              }}
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Download
                size={18}
                className="relative z-10 group-hover:animate-bounce"
              />
              <span className="relative z-10">Download CV</span>
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:shadow-glow"
            >
              <ExternalLink size={18} />
              <span>View Projects</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center justify-center gap-5 mb-12"
          >
            {[
              { href: "https://github.com/", icon: Github, label: "GitHub" },
              {
                href: "https://linkedin.com/",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "mailto:abdulbasitofficial.dev@gmail.com",
                icon: Mail,
                label: "Email",
              },
            ].map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noreferrer" : undefined}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 text-muted-foreground hover:shadow-glow"
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1.2, duration: 0.5 },
              y: { repeat: Infinity, duration: 2, delay: 1.2 },
            }}
            className="inline-block text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
