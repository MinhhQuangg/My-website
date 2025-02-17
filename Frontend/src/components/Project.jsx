import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { textVariant } from "../utils/motion";
import { ProjectCard } from "./ProjectCard";

const Project = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have built</p>
        <h2 className={styles.sectionHeadText}>My Projects</h2>
      </motion.div>
      <div className="mt-10 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Project, "Project");
