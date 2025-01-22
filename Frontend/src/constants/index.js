import {
  c,
  css,
  email,
  git,
  github,
  html,
  js,
  linkedin,
  mongodb,
  mui,
  nodejs,
  python,
  reactjs,
  redux,
  resume,
  vite,
  sql,
  tailwindcss,
  UH,
  Knack,
  Unit,
  MH,
  pet,
  food,
  library,
  natour,
  mywebsite,
  uniqueness,
  pug,
  GT,
  BY,
} from "../assets";

export const sections = [
  { id: "About", title: "About" },
  { id: "Experience", title: "Experience" },
  { id: "Project", title: "Project" },
];

export const technologies = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "Python", icon: python },
  { name: "C++", icon: c },
  { name: "SQL", icon: sql },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Node.JS", icon: nodejs },
  { name: "Tailwind CSS", icon: tailwindcss },
  { name: "Material UI", icon: mui },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
  { name: "Vite.js", icon: vite },
  { name: "Pug", icon: pug },
];

export const introIcon = [
  {
    name: "LinkedIn",
    icon: linkedin,
    to: "https://www.linkedin.com/in/minh-quang-lieu-563627223/",
  },
  { name: "GitHub", icon: github, to: "https://github.com/MinhhQuangg" },
];

export const contacts = [
  {
    name: "LinkedIn",
    icon: linkedin,
    to: "https://www.linkedin.com/in/minh-quang-lieu-563627223/",
  },
  { name: "GitHub", icon: github, to: "https://github.com/MinhhQuangg" },
  { name: "Email", icon: email, to: "mailto:minhquang030120@gmail.com" },
  { name: "Resume", icon: resume, to: "1234" },
];

export const experiences = [
  {
    title: "Graduate Student",
    company:
      "Georgia Institute of Technology - Master of Science in Computer Science",
    borderTop: "Yellow",
    icon: GT,
    iconBg: "white",
    date: "August 2024 - Recent",
    descriptions: [
      "Completed courses in Database System Concepts and Design, as well as Introduction to Information Security.",
      "Maintained a 4.0/4.0 GPA with a specialization in Computing Systems.",
    ],
  },
  {
    title: "Research Assistant - Research Mentor ",
    company:
      "The Uniqueness of Source Code - Software Engineer Research, University of Houston",
    borderTop: "red",
    icon: UH,
    iconBg: "white",
    date: "January 2024 - September 2024",
    descriptions: [
      "Use the tokenize library to analyze the code patterns and structures across about + 2000 programming projects and examine their uniqueness based on the percentage of syntactic redundancy.",
      "Apply the outcomes of syntactic redundancy to generate the list of code snippets for usage.",
    ],
  },
  {
    title: "Frontend Developer Internship",
    company: "Unit Technology Corporation",
    borderTop: "#8ac5fe",
    icon: Unit,
    iconBg: "white",
    date: "May 2024 - August 2024",
    descriptions: [
      "Collaborated with a team of six interns to develop a virtual library website.",
      "Implemented Axios.js to fetch book information and store user data, facilitating tracking of borrowing history and book transactions.",
      "Utilized Redux to manage application state, including user information, borrowed books, and transaction history across the app, resulting in a 40% increase in app responsiveness.",
      "Designed AWS-based data storage solution to reduce application latency by 60% and improve 70% data retrieval.",
      "Leveraged Material UI to construct the website interface, enhancing the interaction and ensuring responsive viewport.",
    ],
  },
  {
    title: "Research Assistant",
    company:
      "Real-Time Systems Research - Machine Learning Research, University of Houston",
    borderTop: "red",
    icon: UH,
    iconBg: "white",
    date: "August 2023 - December 2023",
    descriptions: [
      "Employed the Traci Sumo library to control the vehicles and explored the dynamic user equilibrium to determine the most optimal route for avoiding traffic congestion during peak hours.",
      "Simulated virtual vehicles to optimize routes reduce over 50% of expected time and prevent traffic congestion.",
    ],
  },
  {
    title: "Academic Tutor",
    company: "Knack: College Tutoring",
    borderTop: "orange",
    icon: Knack,
    iconBg: "white",
    date: "August 2023 - Recent",
    descriptions: [
      "Assist students’ performance in science, computer science, and mathematics courses.",
      "Utilize various learning styles with simplify complex topics for ensuring the understanding of concepts and principles",
    ],
  },
  {
    title: "Undergraduate Student",
    company: "University of Houston Main Campus",
    borderTop: "red",
    icon: UH,
    iconBg: "white",
    date: "August 2019 - May 2023",
    descriptions: [
      "Graduated with a Bachelor's degree in Biochemistry, along with a minor in Mathematics, and earned Magna Cum Laude honors.",
      "Awarded the Excellent Academic Scholarship and was in the Dean's List every year",
    ],
  },
  {
    title: "Research Assistant - Research Mentor",
    company: "The Fujita Lab - Biochemistry Research, University of Houston",
    borderTop: "red",
    icon: UH,
    iconBg: "white",
    date: "August 2021 - May 2023",
    descriptions: [
      "Supervised new assistants by providing laboratory techniques and overseeing their performance.",
      "Investigated the biological and genetic aspects of Bacillus subtillis spore and biofilm formation by decoupling feedback regulation controlling gene networks and dissecting the gene networks into individual modules",
    ],
  },
  {
    title: "Front Desk",
    company: "Memorial Hermann Cypress Hospital",
    borderTop: "darkblue",
    icon: MH,
    iconBg: "white",
    date: "May 2021 - May 2022",
    descriptions: [
      "Assist with patient check-ins and guide them to the appropriate department.",
      "Facilitate patient discharges by providing room numbers and clear directions for a smooth transition.",
    ],
  },
  {
    title: "Academic Tutor",
    company:
      "Center for Academic Support and Assessment, University of Houston",
    borderTop: "red",
    icon: UH,
    iconBg: "white",
    date: "January 2021 - May 2021",
    descriptions: [
      "Dedicated tutor specializing in Calculus, Linear Algebra, and Statistics, committed to improving student understanding and confidence.",
      "Flexible math tutor offering both in-person and online sessions to accommodate diverse learning needs and schedules",
    ],
  },
  {
    title: "Undergraduate Student",
    company: "University of Houston Main Campus",
    borderTop: "red",
    icon: UH,
    iconBg: "white",
    date: "August 2019",
    descriptions: [
      "Pursued a Biochemistry major as an undergraduate at the University of Houston.",
      "Full-time student awarded the Academic Excellence Scholarship.",
    ],
  },
];

export const projects = [
  {
    name: "Omnifood",
    description:
      "Food Introduciton Template - Meal Plan Lists and Recipe Collections ",
    gif: food,
    tags: [html, css],
    web_link: "#",
    demo_link: "https://omnifood-fawn-mu.vercel.app/#",
    src_link: "https://github.com/MinhhQuangg/Omnifood",
  },
  {
    name: "Pet HomeKeeper",
    description:
      "Virtual Tamagotchi - Pet Customization and Social Interaction ",
    gif: pet,
    tags: [c],

    src_link: "https://github.com/MinhhQuangg/Pet-HomeKeeper",
  },
  {
    name: "Source Code Uniqueness",
    description:
      "Source Code - Code Pattern Analysis and Syntactic Redundancy Measurement",
    gif: uniqueness,
    tags: [python],

    src_link: "https://github.com/MinhhQuangg/Uniqueness-of-source-code",
  },
  {
    name: "Natour",
    description: "Tour Booking Sytem - Tour Lists and Guide Profiles",
    gif: natour,
    tags: [nodejs, mongodb, pug],
    demo_link:
      "https://natours-app-minhhquangg-minhhquanggs-projects.vercel.app/",
    src_link: "https://github.com/MinhhQuangg/Backend-Natours",
  },
  {
    name: "Open Library",
    description: "Library Platform - Book Catalog and Borrowing System",
    gif: library,
    tags: [nodejs, mongodb, reactjs, mui],
    src_link: "https://github.com/",
  },
  {
    name: "Beyond Journey",
    description:
      "Real-word booking platform - tour based on my personal road trip experience ",
    gif: BY,
    tags: [nodejs, mongodb, reactjs, tailwindcss],
    src_link: "https://github.com/MinhhQuangg/Beyond-Journey/",
  },
  {
    name: "Minh Quang Lieu",
    description: "This Portfolio \n",
    gif: mywebsite,
    tags: [vite, tailwindcss],
    src_link: "https://github.com/MinhhQuangg/My-website",
  },
];
