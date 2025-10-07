"use client";
import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Server,
  MapPin,
  Calendar,
  Menu,
  X,
} from "lucide-react";

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("intro");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      title: "Distributed Cache System",
      tech: "Go, Redis, Docker",
      description:
        "High-performance caching layer with automatic failover and consistent hashing.",
      type: "Backend Architecture",
    },
    {
      title: "Real-time Analytics Dashboard",
      tech: "React, WebSocket, D3.js",
      description:
        "Live data visualization platform processing 100k+ events per second.",
      type: "Full-stack Application",
    },
    {
      title: "API Gateway Middleware",
      tech: "Node.js, TypeScript, gRPC",
      description:
        "Microservices orchestration with rate limiting and circuit breakers.",
      type: "Infrastructure",
    },
  ];

  const experience = [
    {
      company: "TechFlow Systems",
      role: "Senior Full-Stack Engineer",
      period: "2023 - Present",
      location: "San Francisco, CA",
      achievements: [
        "Architected microservices platform serving 50M+ daily requests",
        "Reduced deployment time by 80% through automated CI/CD pipelines",
        "Led team of 5 engineers in rebuilding legacy monolith",
      ],
    },
    {
      company: "DataStream Inc",
      role: "Backend Engineer",
      period: "2021 - 2023",
      location: "Remote",
      achievements: [
        "Built real-time data processing system handling 1TB+ daily",
        "Optimized database queries reducing response time by 60%",
        "Implemented monitoring infrastructure with 99.9% uptime",
      ],
    },
    {
      company: "StartupLab",
      role: "Full-Stack Developer",
      period: "2020 - 2021",
      location: "New York, NY",
      achievements: [
        "Developed MVP from concept to 10k users in 6 months",
        "Created responsive web app with React and Node.js",
        "Integrated payment systems and third-party APIs",
      ],
    },
  ];

  const skills = [
    {
      category: "Backend",
      items: ["Go", "Node.js", "Python", "PostgreSQL", "Redis"],
    },
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind", "WebGL"],
    },
    {
      category: "Infrastructure",
      items: ["Docker", "Kubernetes", "AWS", "Terraform", "GraphQL"],
    },
  ];

  const navigationItems = [
    { label: "ABOUT", id: "about" },
    { label: "WORK", id: "work" },
    { label: "EXPERIENCE", id: "experience" },
    { label: "CONTACT", id: "contact" },
  ];

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
      <div
        className="fixed w-4 h-4 bg-zinc-400 rounded-full pointer-events-none z-50 opacity-20 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: "translate3d(0, 0, 0)",
        }}
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
      <nav className="fixed top-0 left-0 right-0 z-40 bg-zinc-50/80 backdrop-blur-sm border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium tracking-wider">ALEX CHEN</div>

            {/* Desktop navigation */}
            <div className="hidden md:flex gap-8 text-sm">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  className="hover:text-zinc-600 transition-colors duration-200 tracking-wide"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
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
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-50/95 backdrop-blur-sm border-b border-zinc-200">
              <div className="flex flex-col px-6 py-4 space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    className="text-sm text-left hover:text-zinc-600 transition-colors duration-200 tracking-wide"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main content */}
      <main className="pt-20">
        {/* Hero section */}
        <section id="intro" className="max-w-6xl mx-auto px-6 py-20 ">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="text-sm text-zinc-500 tracking-wider">
                    FULL-STACK DEVELOPER
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-light leading-tight">
                    I build systems that
                    <span className="block text-zinc-600">
                      scale and endure.
                    </span>
                  </h1>
                </div>

                <div className="max-w-2xl text-lg text-zinc-700 leading-relaxed font-sans">
                  Focused on architecting robust backend systems and crafting
                  intuitive user experiences. I believe in code that speaks for
                  itself and interfaces that feel inevitable.
                </div>

                <div className="flex gap-6 pt-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm hover:text-zinc-600 transition-colors"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm hover:text-zinc-600 transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm hover:text-zinc-600 transition-colors"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <div className="bg-white rounded-sm border border-zinc-200 p-6 space-y-4">
                <div className="text-sm text-zinc-500 tracking-wider">
                  CURRENT STATUS
                </div>
                <div className="space-y-3">
                  <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-1">
                    <span className="text-sm">Location</span>
                    <span className="text-sm text-zinc-600">
                      San Francisco, CA
                    </span>
                  </div>
                  <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-1">
                    <span className="text-sm">Availability</span>
                    <span className="text-sm text-green-600">
                      Open to opportunities
                    </span>
                  </div>
                  <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-1">
                    <span className="text-sm">Focus</span>
                    <span className="text-sm text-zinc-600">
                      Backend & DevOps
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-20">
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <div className="text-sm text-zinc-500 tracking-wider">ABOUT</div>
              <div className="flex-1 h-px bg-zinc-200" />
            </div>

            <div className="grid grid-cols-12 gap-6 lg:gap-12">
              <div className="col-span-12 lg:col-span-8">
                <div className="space-y-6 text-zinc-700 font-sans leading-relaxed">
                  <p className=" text-justify">
                    I'm a systems thinker who found their calling in the
                    intersection of elegant code and scalable architecture. My
                    journey began with curiosity about how things work under the
                    hood, which naturally led me to backend engineering and the
                    fascinating world of distributed systems.
                  </p>

                  <p className="text-justify">
                    Over the past five years, I've had the privilege of working
                    with teams that value craftsmanship and impact. Whether it's
                    designing APIs that feel intuitive to use, optimizing
                    databases for performance, or building CI/CD pipelines that
                    engineers actually trust—I'm drawn to problems that require
                    both technical depth and user empathy.
                  </p>

                  <p className="text-justify">
                    When I'm not coding, you'll find me reading about
                    distributed systems design, experimenting with new
                    programming languages, or contributing to open source
                    projects. I believe the best solutions emerge from
                    understanding the problem deeply and iterating with
                    intention.
                  </p>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-4">
                <div className="space-y-8">
                  {/* Skills section moved here */}
                  <div className="space-y-6">
                    <div className="text-sm text-zinc-500 tracking-wider">
                      CAPABILITIES
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

                          <div className="space-y-1">
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

                  {/* Additional info */}
                  <div className="bg-white rounded-sm border border-zinc-200 p-4 space-y-3">
                    <div className="text-xs text-zinc-500 tracking-wider">
                      INTERESTS
                    </div>
                    <div className="space-y-2 text-xs text-zinc-600 font-sans">
                      <div>Distributed Systems</div>
                      <div>Developer Tooling</div>
                      <div>Open Source</div>
                      <div>Systems Architecture</div>
                      <div>Performance Optimization</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section id="work" className="max-w-6xl mx-auto px-6 py-20">
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <div className="text-sm text-zinc-500 tracking-wider">
                SELECTED WORK
              </div>
              <div className="flex-1 h-px bg-zinc-200" />
            </div>

            <div className="grid gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group">
                  <div className="grid grid-cols-12 gap-6 p-6 hover:bg-white transition-colors duration-300 rounded-sm">
                    <div className="col-span-12 lg:col-span-3">
                      <div className="space-y-2">
                        <div className="text-xs text-zinc-500 tracking-wider">
                          {project.type}
                        </div>
                        <div className="text-xs text-zinc-400">
                          {project.tech}
                        </div>
                      </div>
                    </div>

                    <div className="col-span-12 lg:col-span-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-medium group-hover:text-zinc-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-zinc-600 font-sans leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="col-span-12 lg:col-span-3 flex justify-end items-start">
                      <ExternalLink
                        size={16}
                        className="text-zinc-400 group-hover:text-zinc-600 transition-colors"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience section */}
        <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <div className="text-sm text-zinc-500 tracking-wider">
                PROFESSIONAL EXPERIENCE
              </div>
              <div className="flex-1 h-px bg-zinc-200" />
            </div>

            <div className="space-y-12">
              {experience.map((job, index) => (
                <div key={index} className="grid grid-cols-12 gap-6">
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-6">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="text-sm text-zinc-500 tracking-wider">
                    GET IN TOUCH
                  </div>
                  <h2 className="text-3xl font-light">
                    Let's build something
                    <span className="block text-zinc-600">
                      meaningful together.
                    </span>
                  </h2>
                </div>

                <p className="text-zinc-600 font-sans leading-relaxed max-w-lg">
                  Always interested in discussing challenging problems,
                  innovative solutions, and opportunities to create impact
                  through technology.
                </p>

                <div className="pt-4">
                  <a
                    href="mailto:alex@example.com"
                    className="inline-flex items-center gap-2 text-sm border border-zinc-300 px-4 py-2 hover:bg-zinc-100 transition-colors duration-200"
                  >
                    Start a conversation
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-50 hidden">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center text-xs text-zinc-400">
            <div>© 2025 Alex Chen</div>
            <div className="tracking-wider">
              DESIGNED & BUILT WITH INTENTION
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
