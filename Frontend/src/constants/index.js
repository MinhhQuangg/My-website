import { email, github, linkedin, resume } from "../assets";

export const sections = [
  { id: "About", title: "About" },
  { id: "Experience", title: "Experience" },
  { id: "Project", title: "Project" },
  { id: "Contact", title: "Contact" },
];

export const technologies = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "Python" },
  { name: "C++" },
  { name: "Java" },
  { name: "React JS" },
  { name: "Redux Toolkit" },
  { name: "Node.JS" },
  { name: "Tailwind CSS" },
  { name: "Material UI" },
  { name: "MongoDB" },
  { name: "git" },
];

export const experiences = [];
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
