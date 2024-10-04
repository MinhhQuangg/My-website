import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { technologies } from "../constants/index.js";

const Tool = () => {
  return (
    <div>
      <motion.div>
        <p className={styles.sectionSubText}>What I have used</p>
        <h2 className={styles.sectionHeadText}>Tools</h2>
      </motion.div>
      <motion.div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <img
            src={tech.icon}
            key={tech.name}
            alt={tech.name}
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tool, "");
