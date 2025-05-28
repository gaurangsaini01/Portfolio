import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  codequotient_logo,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  nikeStore,
  abilityex,
  nextjs,
  studynotion,
  buysellplatform,
  cineview
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name:"Next.Js",
    icon:nextjs
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer Trainee",
    company_name: "CodeQuotient",
    icon:   codequotient_logo,
    iconBg: "#fff",
    date: "Dec 2024 - March 2025",
    points: [
      "Played crucial role in development of an AI-powered interview portal where AI conducts technical interviews, storing chat history in Redis for efficient retrieval.",
      " Worked in the migration of the company's EJS-based website to React, developing reusable components and optimizing performance.",
      "Designed and implemented a custom Tags Component for multi-email input, improving usability and user experience."
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "AbilityEx",
    icon: abilityex,
    iconBg: "#E6DEDD",
    date: "July 2024 - Aug 2024",
    points: [
      "Built the entire dashboard for their Learning Management System (LMS) using ReactJS.",
      "Developed fully customized multi-step sign-in and login forms without using any external libraries, integrating features like Google Sign-In via OAuth 2.0.",
      "Collaborated with the designer to develop a pixel-perfect website matching the design specifications."
    ],
  },
];



const projects = [
  {
    name: "StudyNotion",
    livelink:"https://study-notion-ed-t.vercel.app",
    description:
      "Built a full-featured EdTech platform enabling instructors to create and sell courses, and students to learn and review them. Integrated features like video streaming, Razorpay payments, secure OTP-based authentication, and dynamic dashboards.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name:"cloudinary",
        color:"blue-text-gradient"
      }
    ],
    image: studynotion,
    source_code_link: "https://github.com/gaurangsaini01/StudyNotion",
  },
   {
    name: "Buy-Sell Platform",
    livelink:null,
    description:
      "A comprehensive E-commerce  platform that allows the students of IIIT to exchange/sell their goods within their college. Implemented features like JWT-based authentication, role-based access, real-time search and filtering, and OTP-verified order confirmation.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: buysellplatform,
    source_code_link: "https://github.com/gaurangsaini01/Buyer-Seller-Portal",
  },
  {
    name: "Cineview",
    livelink:"https://cineview-app.netlify.app/",
    description:
      "CineView, a movie and TV show exploration platform using ReactJS and Tailwind CSS, integrated with an external API to display trending content. Features include genre-based filtering, search with debouncing, pagination, and a fully responsive design for smooth user experience across devices.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {name:"TmdbApi",
        color:"text-green-500"
      }
    ],
    image: cineview,
    source_code_link: "https://github.com/gaurangsaini01/CineView-App",
  },
  {
    name: "Nike Store",
    livelink:"https://nikeshopease.netlify.app/",
    description:
      "Developed a responsive Nike Store clone using ReactJS, Tailwind CSS, and Redux Toolkit, featuring a dynamic product catalog, shopping cart functionality, and seamless state management for an enhanced user experience.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nikeStore,
    source_code_link: "https://github.com/gaurangsaini01/Nike_Store",
  },
];

export {  technologies, experiences, projects };
