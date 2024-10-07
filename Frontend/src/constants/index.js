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
    title: "Undergraduate Student",
    company: "University of Houston - Main Campus",
    borderTop: "red",
    icon: UH,
    iconBg: "white",
    date: "August 2019 - May 2023",
    descriptions: [
      "A full-time student major in Biochemistry and minor in Mathematics.",
      "Graduated in May-2023 with GPA of 3.73 and Cum Lauda honors.",
      "Active member for various organizations such as Alpha Epsilon Delta, Cougar CS, and Code Coogs.",
    ],
  },
];
