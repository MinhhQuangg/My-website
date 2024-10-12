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
  sql,
  tailwindcss,
  UH,
  Knack,
  Unit,
} from "../assets";

export const sections = [
  { id: "About", title: "About" },
  { id: "Experience", title: "Experience" },
  { id: "Project", title: "Project" },
  { id: "Contact", title: "Contact" },
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
];

export const projects = [];

export const contacts = [
  { name: "GitHub", icon: github, to: "https://github.com/MinhhQuangg" },
  {
    name: "LinkedIn",
    icon: linkedin,
    to: "https://www.linkedin.com/in/minh-quang-lieu-563627223/",
  },
  { name: "Email", icon: email, to: "mailto:minhquang030120@gmail.com" },
  { name: "Resume", icon: resume, to: "1234" },
];

export const experiences = [
  {
    title: "Research Assistant - Research Mentor ",
    company:
      "The Uniqueness of Source Code - Software Engineer Research, University of Houston",
    borderTop: "red",
    icon: UH,
    iconBg: "white",
    date: "August 2024 - Recent",
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
      "Collaborated with a team of six interns to build a responsive virtual library website.",
      "Implemented Axios.js to fetch book information and store user data, facilitating tracking of borrowing history and book transactions.",
      "Utilized Redux and Redux Toolkit to manage application state including user information, borrowed books, and transaction history across the app.",
      "Leveraged Material UI to construct the website interface, enhancing the interaction and ensuring the user experience.",
    ],
  },
  {
    title: "Research Assistant - Research Mentor ",
    company:
      "The Uniqueness of Source Code - Software Engineer Research, University of Houston",
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
    title: "Academic tutor ",
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
];
