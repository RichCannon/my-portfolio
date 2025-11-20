import ProjectCUImg from "@/assets/images/Project_CU.png";
import ProjectEDTImg from "@/assets/images/Project_EDT.png";
import ProjectKImg from "@/assets/images/Project_K.png";
import ProjectPBImg from "@/assets/images/Project_PB.png";
import ProjectContraImg from "@/assets/images/Project_Contra.png";
import ProjectClickTrip from "@/assets/images/Project_ClickTrip.png";

import GithubIcon from "@/assets/icons/GithubIcon";
import LinkedinIcon from "@/assets/icons/LinkedinIcon";
import MailIcon from "@/assets/icons/MailIcon";
import TelegramIcon from "@/assets/icons/TelegramIcon";
import { MapPin } from "lucide-react";

export const HERO_FLIP_WORDS = [
  "Next.js",
  "React.js",
  "Svelte",
  "React Native",
];

export const COPYRIGHT_YEAR = new Date().getFullYear();

export const MY_EMAIL = "syndicateua@gmail.com";
export const MY_EMAIL_MAILTO = `mailto:${MY_EMAIL}`;

export const MY_FIRST_NAME = "Volodymyr";
export const MY_LAST_NAME = "Kucher";
export const MY_FULL_NAME = `${MY_FIRST_NAME} ${MY_LAST_NAME}`;

export const TELEGRAM_LINK = "https://t.me/Volod_K";
export const GITHUB_LINK = "https://github.com/RichCannon";
export const LINKEDIN_LINK = "https://www.linkedin.com/in/richcannon4";

export const TELEGRAM_USERNAME = "@Volod_K";
export const GITHUB_USERNAME = "@RichCannon";
export const LINKEDING_USERNAME = "/in/richcannon4";

export const SOCIAL_MEDIA = [
  {
    name: "Github",
    Icon: GithubIcon,
    href: GITHUB_LINK,
  },
  {
    name: "Linkedin",
    Icon: LinkedinIcon,
    href: LINKEDIN_LINK,
  },
  {
    name: "Telegram",
    Icon: TelegramIcon,
    href: TELEGRAM_LINK,
  },
  {
    name: "Email",
    Icon: MailIcon,
    href: MY_EMAIL_MAILTO,
  },
];

export const FOLLOW_ME_LINKS = [
  {
    name: "Github",
    Icon: GithubIcon,
    href: GITHUB_LINK,
    username: GITHUB_USERNAME,
  },
  {
    name: "Linkedin",
    Icon: LinkedinIcon,
    href: LINKEDIN_LINK,
    username: LINKEDING_USERNAME,
  },
];

export const CONTACT_INFO = [
  {
    icon: MailIcon,
    label: "Email",
    value: MY_EMAIL,
    href: MY_EMAIL_MAILTO,
  },
  {
    icon: TelegramIcon,
    label: "Telegram",
    value: TELEGRAM_USERNAME,
    href: TELEGRAM_LINK,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kyiv, Ukraine",
    href: "#",
  },
];

export const FUN_FACTS = [
  `☕ Coffee Enthusiast`,
  `🎮 Gamer`,
  `📚 Continuous Learner`,
  `🧗 Climbing Enjoyer`,
];

export const SKILLS_CATEGORIES = [
  {
    title: "Frontend Technologies",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Svelte.js", level: 80 },
      { name: "JavaScript (ES6+)", level: 90 },
    ],
  },
  {
    title: "Styling & Design",
    skills: [
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Sass/SCSS", level: 85 },
      { name: "Figma", level: 80 },
      { name: "HTML", level: 95 },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Webpack/Vite", level: 80 },
      { name: "Jest/Testing Library", level: 75 },
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 75 },
    ],
  },
];

export const TECHS_LIST = [
  "React.js",
  "TypeScript",
  "Next.js",
  "Svelte.js",
  "JavaScript (ES6+)",
  "Node.js",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Framer Motion",
  "GraphQL",
  "REST APIs",
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "Vercel",
  "Git",
  "Docker",
  "Jest",
  "Figma",
];

export const PROJECTS = [
  {
    title: "ClickTrip",
    description:
      "Your journey starts with one click! Millions of hotel options, zero hassle. Booking a hotel room never felt better. Find your best deal now.",
    image: ProjectClickTrip,
    technologies: ["React", "Redux", "TypeScript", "Mui", "Antd"],
    url: "https://clicktrip.com",
    featured: true,
  },
  {
    title: "Kinetik",
    description:
      "Kinetik delivers a synchronized ecosystem specifically engineered to provide interoperability between technologies used by all stakeholders including health plans, members, transportation brokers, healthcare providers, and transportation providers.",
    image: ProjectKImg,
    technologies: ["React", "TypeScript", "Mui", "Google Map"],
    url: "https://kinetik.care/",
    featured: true,
  },
  {
    title: "EdTripper | Educational trip planning",
    description:
      "All-in-one school experience bookings: discover, manage and book educational activities. Book your next school activity with thousands of programs.",
    image: ProjectEDTImg,
    technologies: ["React.js", "TypeScript", "Mui", "Google Map"],
    url: "https://edtripper.com/",
    featured: true,
  },

  {
    title: "ClientUp | Get More Customers",
    description:
      "We connect insurers, lenders, and distribution partners to consumers who are ready to purchase insurance.",
    image: ProjectCUImg,
    technologies: [
      "React.js",
      "TypeScript",
      "Styled Components",
      "Redux/RTK Query",
    ],
    url: "https://clientup.io/",
    featured: true,
  },
  // NON_FEATURED
  {
    title: "Pleasant Plumbers",
    description:
      "Pleasant Plumbers is more than just a plumbing and heating company - it's a promise of reliability, transparency, and unwavering customer focus. Join us as we strive to revolutionize an industry that has been marred by deceit and lack of accountability.",
    image: ProjectPBImg,
    technologies: [
      "React.js",
      "TypeScript",
      "Next.js",
      "MobX",
      "Prismic.io",
      "vanila-extract",
    ],
    url: "https://pleasantplumbers.com/",
  },
  {
    title: "Contra",
    description: "Learning PIXI.js through recreating the old Contra game",
    image: ProjectContraImg,
    technologies: ["PIXI.js", "TypeScript"],
    githubUrl: "https://github.com/RichCannon/contra-game",
  },
];

export const EXPERIENCES = [
  {
    title: "Mobile developer",
    duration: "Oct 2020 - Nov 2021",
    description:
      "Worked on a variety of exciting projects where I honed my skills in mobile design by creating interfaces from Figma, implementing the FLUX architecture with React and Redux, building chat applications, and developing simple interactive games like the Schulte table, among others.",
    achievements: [
      "Turned Figma layouts into pixel-perfect React Native UIs.",
      "Applied FLUX + Redux for scalable codebases.",
      "Shipped a real-time chat with persistence and pushes.",
      "Built a fast, engaging Schulte-table game.",
    ],
    technologies: ["React.js", "TypeScript", "React Native", "GraphQL"],
  },
  {
    title: "Full-stack developer",
    duration: "Dec 2021 - Dec 2022",
    description:
      "Gained valuable experience working on full-stack projects, including handling legacy code and developing project generators for blank templates. I also worked extensively with databases such as MongoDB and PostgreSQL, and utilized the Express.js framework to build efficient and scalable backend solutions.",
    achievements: [
      "Refactored and extended legacy full‑stack codebases.",
      "Built project generators to speed up new setups.",
      "Designed schemas and queries for MongoDB & PostgreSQL.",
      "Developed scalable APIs with Express.js.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "PostgreSQL",
    ],
  },
  {
    title: "Front-end developer",
    duration: "Dec 2022 - Aug 2024",
    description:
      "In this role, I gained hands-on experience working with a wide range of projects and technologies. These experiences provided me with a strong foundation in project leadership, CMS management, and delivering user-focused solutions.",
    achievements: [
      "Built and maintained content-rich sites using Sanity.io and Prismic.",
      "Led front-end dev on SvelteKit and Next.js platforms.",
      "Delivered high-converting landing pages and lead-gen tools.",
      "Collaborated globally on a large-scale product for over a year.",
      "Developed a self-serve platform with lead filtering, ROI tracking, table data caching, and policy management.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "SvelteKit",
      "Redux/RTKq",
      "React Charts",
    ],
  },
  {
    title: `Front-end developer`,
    duration: `Sep 2024 - Nov 2025`,
    description:
      "Developed and maintained the user interface for a hotel booking platform and its associated admin panel using a modern stack including React, Redux, Mui, and Antd. The work encompassed building a complex, customer-facing booking site and designing intuitive data management tables for the internal administration tool.",
    achievements: [
      `Improved website load speed by 15% for the main hotel booking platform by optimizing Redux state management and implementing React lazy loading`,
      `Increased administrator efficiency by 25% by redesigning key data tables in the admin panel using Tanstack React-Table, added proper data caching, enabled faster filtering, sorting, and bulk editing of critical hotel and reservation data`,
    ],
    technologies: ["React.js", "Redux", "Antd", "Mui", "@tanstack/react-table"],
  },
];

export const EDUCATIONS = [
  {
    degree: "Bachelor, Avionics, Institute of Aerospace Technology",
    school: "Igor Sikorsky Kyiv Polytechnic Institute (KPI)",
    location: "Kyiv, Ukraine",
    duration: "2017 - 2021",
    description:
      "Used to program microcontrollers for the quadrocopters. Gained a lot of knowledge about math, physics, and low-level programming",
  },
];

export const CONTACTS_FORM_URL =
  "https://formsubmit.co/adf287d23425f8b5203c79ba6d572684";

export const RESUME_URL = `https://cv.djinni.co/f0/a2075fedc1f0a0e7c55250defea0b3/CV_Front_Kucher.pdf`;
