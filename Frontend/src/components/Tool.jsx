import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { technologies } from "../constants/index.js";
import { useState } from "react";

const Tool = () => {
  const [showTool, setShowTool] = useState(null);
  return (
    <div>
      <motion.div>
        <p className={styles.sectionSubText}>What I have used</p>
        <h2 className={styles.sectionHeadText}>Tools</h2>
      </motion.div>
      <motion.div className="flex flex-wrap gap-5 md:gap-10">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center gap-5 my-3"
            onMouseEnter={() => setShowTool(tech.name)}
            onMouseLeave={() => setShowTool(null)}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <span
              className={`absolute mt-10 sm:mt-12 pt-2 text-[12px] sm:text-[14px] ${
                showTool === tech.name ? "opacity-100" : "opacity-0"
              }`}
            >
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tool, "");
