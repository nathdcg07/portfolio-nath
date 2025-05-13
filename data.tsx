import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/nathaly-dalcy-conde-gutierrez-5846a4240",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Full-Stack Creative Developer",
    subtitle: "Personal & Freelance Projects Currently",
    description:
      "I develop out of passion, creating digital experiences with attractive designs, useful features, and smooth animations that people love. Every line of code makes me happy :)",
    date: "2025",
  },
  {
    id: 2,
    title: "Medication Reminder App - Backend Area",
    subtitle: "University",
    description:
      "I designed and developed an accessible mobile app focused on the well-being of older adults. A solution designed with empathy and functionality.",
    date: "2024",
  },
  {
    id: 3,
    title: "National Basketball League System - Backend Area",
    subtitle: "University",
    description:
      "I implemented a comprehensive system for managing games, results, and statistics for a national league. The entire development was carried out with a professional approach.",
    date: "2023",
  },
  {
    id: 4,
    title: "Backend Area - European Educational Site",
    subtitle: "European Business School",
    description:
      "I collaborated for 3 months on the backend of the institutional website, optimizing structures and improving the overall efficiency of the system.",
    date: "2022",
  },
  {
    id: 5,
    title: "Customer Service & Digital Support",
    subtitle: "Freelance",
    description:
      "I supported user experience and online platform management. This role strengthened my communication skills and agile problem-solving.",
    date: "2022",
  },
  {
    id: 6,
    title: "Fullstack Dev - Online Store & Discount App",
    subtitle: "University",
    description:
      "I developed two applications: a digital store with a shopping cart and product management system, and an app for finding food discounts. I participated in design, the front-end, and the back-end.",
    date: "2021",
  },
  {
    id: 7,
    title: "First Freelance Projects",
    subtitle: "Start of My Journey",
    description:
      "In 2020, I began working with clients and building simple yet functional digital solutions. Each delivery was an opportunity to learn and grow.",
    date: "2020",
  },
  {
    id: 8,
    title: "Internships and Initial Projects",
    subtitle: "Self-Taught Exploration",
    description:
      "In 2018, I began getting involved in development projects, collaborating on small, hands-on tasks that fostered my love for programming.",
    date: "2018",
  },
];


export const dataCounter = [
    {
        id: 0,
        endCounter: 5,
        text: "Years of experience",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 2,
        endCounter: 10,
        text: "Completed Projects",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 3,
        text: "Certifications",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Development of a strong and coherent brand identity, including logo design, colors, and visual elements.",
    },
     {
        icon: <Crop />,
        title: "Intuitive Interface Design",
        description: "I create digital experiences that combine beauty and functionality. Interfaces are user-friendly, clean, and full of personality.",
    },
    {
        icon: <Computer />,
        title: "Web & App Development",
        description: "I design and develop websites and applications (web and mobile) from scratch, using modern technology and a full-stack approach.",
    },
    {
        icon: <Rocket />,
        title: "Creative Prototyping",
        description: "I transform ideas into functional prototypes with an agile approach. Ideal for quickly validating ideas and starting to build.",
    },
    {
        icon: <Pencil />,
        title: "Backend Integration",
        description: "I connect interfaces with APIs and databases, ensuring everything flows logically and efficiently.",
    },
    {
        icon: <Book />,
        title: "Documentation & UX Writing",
        description: "I clearly communicate the system's functionality and create useful microcopy that guides the user with empathy.",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Mobile App",
        image: "/proyecto1.png",
        urlGithub: "https://github.com/OnlyAbue-App/Fronted",
    },
    // {
    //     id: 2,
    //     title: "Desarrollo Web Ágil",
    //     image: "/image-2.jpg",
    //     urlGithub: "#!",
    // },
    {
        id: 3,
        title: "Creative Task Manager",
        image: "/proyecto3.png",
        urlGithub: "https://github.com/nathdcg07/gestor-tareas-react",
    },
    // {
    //     id: 4,
    //     title: "Ideas Creativas",
    //     image: "/image-4.jpg",
    //     urlGithub: "#!",
    // },
];
