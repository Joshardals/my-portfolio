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
    href: "https://linkedin.com/in/yourusername",
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

export const projects = [
  {
    title: "Student Hostel Finder System",
    tech: "Next.js, Prisma, Supabase, Pusher",
    description:
      "Platform for students to search and compare verified off-campus hostels. Includes multi-role authentication, real-time chat, and scalable pagination.",
    type: "Full-stack Application",
    demoLink: "https://havlix.vercel.app/",
  },
  {
    title: "Client Invoice Management System",
    tech: "Next.js, MongoDB, Prisma",
    description:
      "Freelancer tool for managing clients, invoices, and payments with secure CRUD operations and real-time dashboard updates.",
    type: "Full-stack Application",
    demoLink: "https://client-invoice-app-rust.vercel.app/register",
  },
  // {
  //   title: "API Gateway Middleware",
  //   tech: "Node.js, TypeScript, gRPC",
  //   description:
  //     "Microservices orchestration with rate limiting and circuit breakers.",
  //   type: "Infrastructure",
  //   demoLink: "https://gateway-demo.example.com",
  // },
];

export const experience = [
  {
    company: "Cruize Easy",
    role: "Frontend Developer",
    period: "Sep 2025 – Present",
    location: "Remote",
    achievements: [
      "Collaborating with designers to build a responsive, user-friendly car-rental platform based on Figma designs.",
      "Developing reusable components with Next.js and Tailwind CSS to boost development speed and maintain consistency.",
      "Integrating RESTful APIs to deliver dynamic booking and content features.",
      "Designed and deployed the landing page, establishing the platform’s visual identity and brand foundation.",
    ],
  },
  {
    company: "Atoovis Technologies",
    role: "Frontend Developer Intern",
    period: "Jul 2024 – Sep 2024",
    location: "Remote",
    achievements: [
      "Implemented a dynamic category and subcategory system to enhance product navigation and UX.",
      "Collaborated with the backend team to consume APIs and develop new interactive features.",
      "Optimized product images and layout for visual consistency across the platform.",
    ],
  },
];

export const skills = [
  {
    category: "Backend",
    items: ["Node.js", "Prisma", "Supabase", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: "Core Concepts",
    items: [
      "RESTful APIs",
      "Authentication & Authorization",
      "CRUD Operations",
      "Responsive Web Design",
      "Agile Development",
    ],
  },
];

export const navigationItems = [
  { label: "ABOUT", id: "about" },
  { label: "PROJECTS", id: "projects" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "CONTACT", id: "contact" },
];
