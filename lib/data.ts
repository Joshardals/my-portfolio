import { faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export const socialLinks = [
  {
    href: "https://github.com/Joshardals",
    icon: faGithub,
    label: "GitHub",
    colorClass: "hover:text-gray-900",
  },
  {
    href: "https://linkedin.com/in/joshua-bamidele1",
    icon: faSquareLinkedin,
    label: "LinkedIn",
    colorClass: "hover:text-zinc-600",
  },
  {
    href: "mailto:joshuabamidele219@gmail.com",
    icon: faEnvelope,
    label: "Email",
    colorClass: "hover:text-zinc-600",
  },
];

// Images are ss with 1152 x 648

export const projects = [
  {
    title: "Student Hostel Finder System",
    tech: "Next.js, Prisma, Supabase, Pusher",
    description:
      "Platform for students to search and compare verified off-campus hostels. Includes multi-role authentication, real-time chat, and scalable pagination.",
    type: "Full-stack Application",
    demoLink: "https://havlix.vercel.app/",
    image: "/images/projects/hostel-finder-system.webp",
  },
  {
    title: "Client Invoice Management System",
    tech: "Next.js, MongoDB, Prisma",
    description:
      "Freelancer tool for managing clients, invoices, and payments with secure CRUD operations and dynamic dashboard updates.",
    type: "Full-stack Application",
    demoLink: "https://client-invoice-app-rust.vercel.app/register",
    image: "/images/projects/client-invoice-manager.webp",
  },
];

export const experience = [
  {
    company: "Cruize Easy",
    role: "Frontend Developer",
    period: "Sep 2025 – Present",
    location: "Remote",
    achievements: [
      "Collaborating with UX designers to build a responsive, user-friendly car rental platform using Next.js, TypeScript, and Tailwind CSS.",
      "Developing reusable UI components to enhance scalability, maintainability, and consistency across the platform.",
      "Integrating RESTful APIs from the backend team to deliver dynamic booking features and real-time data updates.",
      "Designed and deployed the platform’s landing page, establishing its visual identity and improving initial user engagement by 30%.",
      "Working within an agile workflow, contributing to sprint planning, code reviews, and iterative product improvements.",
    ],
  },
  {
    company: "Atoovis Technologies",
    role: "Frontend Developer Intern",
    period: "Jul 2024 – Sep 2024",
    location: "Remote",
    achievements: [
      "Built and integrated a dynamic category and subcategory system to improve product navigation and user experience.",
      "Collaborated closely with backend engineers to consume RESTful APIs and implement new frontend features with React.js and Tailwind CSS.",
      "Optimized image rendering and product display components, improving platform visual consistency and load performance by 25%.",
      "Contributed to an agile team environment, participating in weekly standups, code reviews, and sprint retrospectives",
    ],
  },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "Redux Toolkit",
      "HTML5",
      "CSS3",
      "Accessibility (WCAG)",
      "Responsive Design",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Supabase",
      "Prisma",
      "REST APIs",
      "GraphQL",
      "API Integration",
      "Authentication (JWT)",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "WebSocket",
    ],
  },
  {
    category: "Tools & Practices",
    items: [
      "React Testing Library",
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Agile Methodologies",
      "Vercel",
      "Performance Optimization",
      "SEO Optimization",
    ],
  },
];

export const navigationItems = [
  { label: "ABOUT", id: "about" },
  { label: "PROJECTS", id: "projects" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "CONTACT", id: "contact" },
];
