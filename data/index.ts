export const NAV_ITEMS_IDS = {
  ABOUT: "about",
  PROJECTS: "projects",
  TESTIMONIALS: "testimonials",
  WORK_EXPERIENCE: "work_experience",
  CONTACT: "contact",
};

export const navItems = [
  { name: "About", link: `#${NAV_ITEMS_IDS.ABOUT}` },
  { name: "Projects", link: `#${NAV_ITEMS_IDS.PROJECTS}` },
  // { name: "Testimonials", link: `#${NAV_ITEMS_IDS.TESTIMONIALS}` },
  { name: "Work Experience", link: `#${NAV_ITEMS_IDS.WORK_EXPERIENCE}` },
  { name: "Contact", link: `#${NAV_ITEMS_IDS.CONTACT}` },
];

export const MY_EMAIL = "syndicateua@gmail.com";
export const MY_FIRST_NAME = "Volodymyr";
export const MY_LAST_NAME = "Kucher";
export const MY_FULL_NAME = `${MY_FIRST_NAME} ${MY_LAST_NAME}`;

export const TECH_STACK_1 = ["Javascript", "Next.js", "Svelte"];
export const TECH_STACK_2 = ["React", "Typescript", "HTML"];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 h-52",
    imgClassName: "",
    spareImgClassName: "h-32",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "By using best code practices",
    description: "Passionate about building readable and structured code",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    // img: "/b5.svg",
    // spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Kinetik",
    des: "Kinetik delivers a synchronized ecosystem specifically engineered to provide interoperability between technologies used by all stakeholders including health plans, members, transportation brokers, healthcare providers, and transportation providers.",
    img: "/Project_K.png",
    iconLists: ["/re.svg", "/ts.svg", "/mui-icon.svg", "/google-map-icon.svg"],
    link: "https://kinetik.care/",
  },
  {
    id: 2,
    title: "EdTripper | Educational trip planning",
    des: "All-in-one school experience bookings: discover, manage and book educational activities. Book your next school activity with thousands of programs.",
    img: "/Project_EDT.png",
    iconLists: [
      "svelte-icon.svg",
      "tail.svg",
      "ts.svg",
      "google-map-icon.svg",
      "supabse-icon.svg",
    ],
    link: "https://edtripper.com/",
  },
  {
    id: 3,
    title: "Pleasant Plumbers",
    des: "Pleasant Plumbers is more than just a plumbing and heating company - it's a promise of reliability, transparency, and unwavering customer focus. Join us as we strive to revolutionize an industry that has been marred by deceit and lack of accountability.",
    img: "/Project_PB.png",
    iconLists: [
      "/re.svg",
      "/next.svg",
      "/vanila-extract-icon.svg",
      "/ts.svg",
      "/mobx-icon.svg",
      "/prismic-io-icon.png",
    ],
    link: "https://pleasantplumbers.com/",
  },
  {
    id: 4,
    title: "ClientUp | Get More Customers",
    des: "We connect insurers, lenders, and distribution partners to consumers who are ready to purchase insurance.",
    img: "/Project_CU.png",
    iconLists: [
      "/re.svg",
      "/styled-components-icon.png",
      "/ts.svg",
      "/redux-icon.svg",
    ],
    link: "https://clientup.io/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    name: "Github",
    img: "/git.svg",
    href: "https://github.com/RichCannon",
  },
  {
    name: "Linkedin",
    img: "/link.svg",
    href: "https://www.linkedin.com/in/richcannon4",
  },
  {
    name: "Telegram",
    img: "/telegram.svg",
    href: "https://t.me/Volod_K",
  },
];

export const WORK_TIMELINE = [
  {
    timeline: `Oct 2020 - Jun 2021`,
    title: `Mobile developer`,
    highlightTitle: ` (React, React Native)`,
    description: `I have worked on a variety of exciting projects where I honed my skills in mobile design by creating interfaces from Figma, implementing the FLUX architecture with React and Redux, building chat applications, and developing simple interactive games like the Schulte table, among others.`,
  },
  {
    timeline: `Jun-Nov 2021`,
    title: `Full-stack developer`,
    highlightTitle: ` (React, Node.js)`,
    description: `In this role, I gained valuable experience working on full-stack projects, including handling legacy code and developing project generators for blank templates. I also worked extensively with databases such as MongoDB and PostgreSQL, and utilized the Express.js framework to build efficient and scalable backend solutions.`,
  },
  {
    timeline: `Nov 2021 - Aug 2024`,
    title: `Front-end develoepr`,
    highlightTitle: ` (React, Next, Svelte)`,
    description: `In this role, I gained hands-on experience working with a wide range of projects and technologies, including`,
    list: [
      `CMS (Sanity.io) for managing content efficiently`,
      `Developing simple yet effective landing pages`,
      `Contributing to a large-scale project over the span of a year, collaborating with a global team`,
      `Serving as the lead front-end developer for a company’s lead generation product`,
      `Leading the SvelteKit front-end development for a platform that allowed teachers to book trips for their students`,
      `Building a self-serve platform where agents could purchase and filter leads, track ROI, manage policies, and pipelines, and integrate with their existing tools`,
      `Creating a website for booking plumbers in London, utilizing Zoho CRM and Prismic.io.`,
    ],
    afterList: `These experiences provided me with a strong foundation in project leadership, CMS management, and delivering user-focused solutions.`,
  },
];

export const APPROACH = [
  {
    title: "Planning & Strategy",
    order: `Phase 1`,
    description: `We’ll work together to outline your website’s objectives, target audience, and essential features. We’ll cover details like site layout, navigation, and content needs.`,
    animationSpeed: 5.1,
    containerClassName: "bg-emerald-900",
  },
  {
    title: "Development & Progress Update",
    order: `Phase 2`,
    description: `Once we finalize the plan, I cue my lofi playlist and dive into coding, keeping you updated throughout the process—from wireframes to the final code.`,
    animationSpeed: 3,
    containerClassName: "bg-black",
    colors: [
      [236, 72, 153],
      [232, 121, 249],
    ],
  },
  {
    title: "Development & Launch",
    order: `Phase 3`,
    description: `This is where your vision comes to life! Using the approved design, I’ll code and build your website from the ground up, ensuring it’s fully functional and tailored to your needs.`,
    animationSpeed: 3,
    containerClassName: "bg-sky-600",
    colors: [[125, 211, 252]],
    dotSize: 2,
  },
];
