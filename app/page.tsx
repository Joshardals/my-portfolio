"use client";
import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Code2,
  Database,
  Server,
  MapPin,
  Calendar,
  Menu,
  X,
  Download,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  experience,
  navigationItems,
  projects,
  skills,
  socialLinks,
} from "@/lib/data";

// Animation variants for consistent motion
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Custom hook for scroll animations
function useScrollAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return { ref, isInView };
}

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("intro");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const name = "Joshua Bamidele";

  // Animation refs for each section
  const { ref: introRef, isInView: introInView } = useScrollAnimation();
  const { ref: aboutRef, isInView: aboutInView } = useScrollAnimation();
  const { ref: projectsRef, isInView: projectsInView } = useScrollAnimation();
  const { ref: experienceRef, isInView: experienceInView } =
    useScrollAnimation();
  const { ref: contactRef, isInView: contactInView } = useScrollAnimation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-mono">
      {/* Subtle cursor follower */}
      <motion.div
        className="hidden sm:block fixed w-4 h-4 bg-zinc-400 rounded-full pointer-events-none z-50 opacity-20"
        animate={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      />

      {/* Grid overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 bg-zinc-50/80 backdrop-blur-sm border-b border-zinc-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium tracking-wider uppercase">
              {name}
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex gap-8 text-sm">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  className="hover:text-zinc-600 transition-colors duration-200 tracking-wide"
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={20} className="text-zinc-600" />
              ) : (
                <Menu size={20} className="text-zinc-600" />
              )}
            </button>
          </div>

          {/* Mobile navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                key="mobile-menu"
                className="md:hidden absolute top-full left-0 right-0 bg-zinc-50/95 backdrop-blur-sm border-b border-zinc-200 overflow-hidden"
                initial={{ opacity: 0, height: 0, }}
                animate={{ opacity: 1, height: "auto",}}
                exit={{ opacity: 0, height: 0,}}
                transition={{ duration: 0.35,}}
              >
                <div className="flex flex-col px-6 py-4 space-y-4">
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      className="text-sm text-left hover:text-zinc-600 transition-colors duration-200 tracking-wide"
                      onClick={() => scrollToSection(item.id)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Main content */}
      <main className="pt-20">
        {/* Hero section */}
        <section id="intro" className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            ref={introRef}
            className="grid grid-cols-12 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate={introInView ? "animate" : "initial"}
          >
            <div className="col-span-12 lg:col-span-8">
              <div className="space-y-8">
                <motion.div className="space-y-4" variants={fadeInUp}>
                  <div className="text-sm text-zinc-500 tracking-wider">
                    FULL-STACK DEVELOPER
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-light leading-tight">
                    I build web apps that
                    <span className="block text-zinc-600">
                      scale and solve.
                    </span>
                  </h1>
                </motion.div>

                <motion.div
                  className="max-w-2xl text-lg text-zinc-700 leading-relaxed font-sans"
                  variants={fadeInUp}
                >
                  I develop full-stack web applications, architect robust
                  backend systems, and craft intuitive frontends. I focus on
                  maintainable code and seamless user experiences.
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-6 pt-4"
                  variants={fadeInUp}
                >
                  <div className="flex gap-6">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 text-lg transition-colors ${link.colorClass}`}
                        aria-label={link.label}
                      >
                        <FontAwesomeIcon icon={link.icon} />
                      </a>
                    ))}
                  </div>

                  <a
                    href="/Joshua_Bamidele_Resume.pdf"
                    download
                    className="inline-flex items-center gap-2 text-sm border border-zinc-300 px-3 py-1.5 hover:bg-zinc-100 transition-colors duration-200 w-fit cursor-pointer"
                  >
                    <Download size={14} />
                    Resume
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About section */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            ref={aboutRef}
            className="space-y-12"
            variants={staggerContainer}
            initial="initial"
            animate={aboutInView ? "animate" : "initial"}
          >
            <motion.div className="flex items-center gap-4" variants={fadeInUp}>
              <div className="text-sm text-zinc-500 tracking-wider">ABOUT</div>
              <div className="flex-1 h-px bg-zinc-200" />
            </motion.div>

            <div className="grid grid-cols-12 gap-6 lg:gap-12">
              <motion.div
                className="col-span-12 lg:col-span-8"
                variants={fadeInUp}
              >
                <div className="space-y-6 text-zinc-700 font-sans leading-relaxed">
                  <p className="text-justify">
                    I got introduced to programming back in secondary school by
                    my senior, and that moment changed everything. I started
                    with HTML and CSS, built a few small projects, then moved on
                    to Python, JavaScript, and Next.js. Since then, coding has
                    been something I&apos;ve stayed consistent with, always
                    learning and building along the way.
                  </p>

                  <p className="text-justify">
                    These days, I work across both frontend and backend, but
                    I&apos;m most drawn to frontend development. I enjoy turning
                    ideas and designs into smooth, interactive user experiences
                    that feel natural to use. Whether it&apos;s building clean,
                    responsive interfaces, optimizing performance, or making
                    sure everything connects perfectly with the backend, I like
                    creating products that not only work, but feels right.
                  </p>

                  <p className="text-justify">
                    Outside coding, I spend time watching movies, checking out
                    new tech trends, or trading. I like staying curious and
                    exploring new ideas because that mindset keeps me growing as
                    a developer.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="col-span-12 lg:col-span-4"
                variants={fadeInUp}
              >
                <div className="space-y-8">
                  {/* Skills section */}
                  <div className="space-y-6">
                    <div className="text-sm text-zinc-500 tracking-wider">
                      SKILLS
                    </div>
                    <div className="space-y-6">
                      {skills.map((skillGroup, index) => (
                        <div key={index} className="space-y-3">
                          <div className="flex items-center gap-3">
                            {index === 0 && (
                              <Server size={14} className="text-zinc-400" />
                            )}
                            {index === 1 && (
                              <Code2 size={14} className="text-zinc-400" />
                            )}
                            {index === 2 && (
                              <Database size={14} className="text-zinc-400" />
                            )}
                            <h3 className="text-xs font-medium tracking-wider">
                              {skillGroup.category}
                            </h3>
                          </div>

                          <div className="space-y-1 grid grid-cols-2">
                            {skillGroup.items.map((skill, skillIndex) => (
                              <div
                                key={skillIndex}
                                className="text-xs text-zinc-600 font-sans"
                              >
                                {skill}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Projects section */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            ref={projectsRef}
            className="space-y-12"
            variants={staggerContainer}
            initial="initial"
            animate={projectsInView ? "animate" : "initial"}
          >
            <motion.div className="flex items-center gap-4" variants={fadeInUp}>
              <div className="text-sm text-zinc-500 tracking-wider">
                SELECTED PROJECTS
              </div>
              <div className="flex-1 h-px bg-zinc-200" />
            </motion.div>

            <div className="grid gap-12">
              {projects.map((project, index) => (
                <motion.div key={index} variants={fadeInUp} className="group">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="grid grid-cols-12 gap-6 lg:gap-8">
                      {/* Project Info */}
                      <div className="col-span-12 lg:col-span-7 space-y-4 order-2 lg:order-1">
                        <div className="space-y-2">
                          <div className="text-xs text-zinc-500 tracking-wider">
                            {project.type}
                          </div>
                          <h3 className="text-2xl font-medium group-hover:text-zinc-600 transition-colors">
                            {project.title}
                          </h3>
                          <div className="text-xs text-zinc-400">
                            {project.tech}
                          </div>
                        </div>

                        <p className="text-zinc-600 font-sans leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex items-center gap-2 text-sm text-zinc-500 group-hover:text-zinc-700 transition-colors pt-2">
                          <span className="tracking-wide">View Project</span>
                          <ExternalLink size={14} />
                        </div>
                      </div>

                      {/* Project Image */}
                      <div className="col-span-12 lg:col-span-5 order-1 lg:order-2">
                        <motion.div
                          className="relative aspect-video overflow-hidden border border-zinc-200 bg-white"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-top object-cover group-hover:opacity-90 transition-opacity duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Experience section */}
        <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            ref={experienceRef}
            className="space-y-12"
            variants={staggerContainer}
            initial="initial"
            animate={experienceInView ? "animate" : "initial"}
          >
            <motion.div className="flex items-center gap-4" variants={fadeInUp}>
              <div className="text-sm text-zinc-500 tracking-wider">
                PROFESSIONAL EXPERIENCE
              </div>
              <div className="flex-1 h-px bg-zinc-200" />
            </motion.div>

            <div className="space-y-12">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-12 gap-6"
                  variants={fadeInUp}
                >
                  <div className="col-span-12 lg:col-span-3">
                    <div className="space-y-2">
                      <div className="text-sm font-medium">{job.company}</div>
                      <div className="text-xs text-zinc-500 tracking-wider">
                        {job.role}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-zinc-400">
                        <Calendar size={12} />
                        {job.period}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-zinc-400">
                        <MapPin size={12} />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  <div className="col-span-12 lg:col-span-9">
                    <div className="space-y-3">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <div
                          key={achievementIndex}
                          className="flex items-start gap-3"
                        >
                          <div className="w-1 h-1 bg-zinc-400 rounded-full mt-3 flex-shrink-0" />
                          <p className="text-zinc-600 font-sans leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact section */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            ref={contactRef}
            className="grid grid-cols-12 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate={contactInView ? "animate" : "initial"}
          >
            <motion.div
              className="col-span-12 lg:col-span-6"
              variants={fadeInUp}
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="text-sm text-zinc-500 tracking-wider">
                    GET IN TOUCH
                  </div>
                  <h2 className="text-3xl font-light">
                    Let's build something
                    <span className="block text-zinc-600">
                      impactful together.
                    </span>
                  </h2>
                </div>

                <p className="text-zinc-600 font-sans leading-relaxed max-w-lg">
                  I&apos;m always open to discussing new projects,
                  collaborations, or opportunities where technology can make a
                  real difference.
                </p>

                <div className="pt-4">
                  <motion.a
                    href="mailto:joshuabamidele219@gmail.com"
                    className="inline-flex items-center gap-2 text-sm border border-zinc-300 px-4 py-2 hover:bg-zinc-100 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    Start a conversation
                    <ExternalLink size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <motion.div
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-xs text-zinc-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="order-2 sm:order-1">
              © {new Date().getFullYear()} {name}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
