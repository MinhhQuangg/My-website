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
  chat,
  robot,
  dynamodb,
} from "../assets";

export const sections = [
  { id: "About", title: "About" },
  { id: "Experience", title: "Experience" },
  { id: "Project", title: "Project" },
];

export const technologies = [
  { name: "Python", icon: python },
  { name: "JavaScript", icon: js },
  { name: "C++", icon: c },
  { name: "React", icon: reactjs },
  { name: "Node.js", icon: nodejs },
  { name: "Vite.js", icon: vite },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "Tailwind CSS", icon: tailwindcss },
  { name: "Material UI", icon: mui },
  { name: "SQL", icon: sql },
  { name: "MongoDB", icon: mongodb },
  { name: "DynamoDB", icon: dynamodb },
  { name: "Git", icon: git },
  { name: "Pug", icon: pug },
  { name: "Redux Toolkit", icon: redux },
];

export const introIcon = [
  {
    name: "LinkedIn",
    icon: linkedin,
    to: "https://www.linkedin.com/in/minh-quang-lieu-563627223/",
  },
  { name: "Resume", icon: resume, to: "/Resume.pdf" },
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
  { name: "Resume", icon: resume, to: "/Resume.pdf" },
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
      "Maintained a <b>4.0 GPA</b> with a specialization in Computing Systems.",
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
      "Worked in a group of two under the supervision of Dr. Amin Alipour and PhD student Aftab Hussain",
      "Use the tokenize library to analyze the code patterns and structures across more than <b>1,000 public Github projects</b> and examine their uniqueness based on the percentage of syntactic redundancy.",
      "Apply the outcomes of syntactic redundancy to generate the list of code snippets for usage.",
    ],
    tags: [python],
  },
  {
    title: "Frontend Developer Internship",
    company: "Unit Technology Corporation",
    borderTop: "#8ac5fe",
    icon: Unit,
    iconBg: "white",
    date: "May 2024 - August 2024",
    descriptions: [
      "Collaborated with six interns to develop a virtual library website featuring <b>2000</b> online books.",
      "Implemented Axios.js to fetch book information and store user data, facilitating tracking of borrowing history and book transactions.",
      "Utilized Redux to manage application state, including user information, borrowed books, and transaction history across the app, resulting in a <b>40%</b> increase in app responsiveness.",
      "Designed AWS-based data storage solution to reduce application latency by <b>30%</b> and improve <b>50%</b> data retrieval.",
      "Leveraged Material UI to construct the website interface, enhancing the interaction and ensuring responsive viewport.",
    ],
    tags: [reactjs, js, css, redux, html, mui],
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
      "Worked in a group of two under the supervision of Dr. Albert Chang and PhD student Thomas Carroll",
      "Employed the Traci Sumo library to control the vehicles and explored the dynamic user equilibrium to determine the most optimal route for avoiding traffic congestion during peak hours.",
      "Simulated virtual vehicles to optimize routes reduce <b>over 20%</b> of expected time and prevent traffic congestion.",
    ],
    tags: [python],
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
    src_link: "https://github.com/MinhhQuangg/Open-Library",
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
    name: "ChatLas",
    description:
      "Chat Application - Real-time translation and messaging platform\n",
    gif: chat,
    tags: [reactjs, nodejs, sql, tailwindcss],
    demo_link:
      "https://devpost.com/software/chatlas?ref_content=user-portfolio&ref_feature=in_progress",
  },
  {
    name: "Social Sim",
    description:
      "Simulator App - Helping neurodivergent students practicing conversations\n",
    gif: robot,
    tags: [vite, nodejs, dynamodb, tailwindcss],
    demo_link:
      "https://devpost.com/software/socialsim?ref_content=user-portfolio&ref_feature=in_progress",
  },
  {
    name: "Minh Quang Lieu",
    description: "This Portfolio \n",
    gif: mywebsite,
    tags: [reactjs, tailwindcss],
    demo_link: "https://minhquanglieu.com/",
    src_link: "https://github.com/MinhhQuangg/My-website",
  },
];
