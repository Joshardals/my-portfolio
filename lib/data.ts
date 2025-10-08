import { faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export const socialLinks = [
  {
    href: "https://github.com/yourusername",
    icon: faGithub,
    label: "GitHub",
    colorClass: "hover:text-gray-900",
  },
  {
    href: "https://linkedin.com/in/yourusername",
    icon: faSquareLinkedin,
    label: "LinkedIn",
    colorClass: "hover:text-zinc-600",
  },
  {
    href: "mailto:youremail@example.com",
    icon: faEnvelope,
    label: "Email",
    colorClass: "hover:text-zinc-600",
  },
];

export const projects = [
  {
    title: "Distributed Cache System",
    tech: "Go, Redis, Docker",
    description:
      "High-performance caching layer with automatic failover and consistent hashing.",
    type: "Backend Architecture",
    demoLink: "https://cache-demo.example.com",
  },
  {
    title: "Real-time Analytics Dashboard",
    tech: "React, WebSocket, D3.js",
    description:
      "Live data visualization platform processing 100k+ events per second.",
    type: "Full-stack Application",
    demoLink: "https://analytics-demo.example.com",
  },
  {
    title: "API Gateway Middleware",
    tech: "Node.js, TypeScript, gRPC",
    description:
      "Microservices orchestration with rate limiting and circuit breakers.",
    type: "Infrastructure",
    demoLink: "https://gateway-demo.example.com",
  },
];

export const experience = [
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

export const skills = [
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

export const navigationItems = [
  { label: "ABOUT", id: "about" },
  { label: "WORK", id: "work" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "CONTACT", id: "contact" },
];
