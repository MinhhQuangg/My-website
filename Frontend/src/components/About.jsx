import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { showUp, slideIn } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={slideIn("right", 3)}>
        <div className="flex flex-col items-end">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>About me</h2>
        </div>
      </motion.div>
      <motion.div
        variants={showUp()}
        className="mt-10 text-[18px] flex flex-col pl-[20%]"
      >
        <div>
          I am a full-stack developer based in Houston, Texas. I hold a Bachelor
          of Science in Biochemistry from the University of Houston, where I
          also minored in Mathematics. Driven by my passion for coding and
          problem-solving, I decided to explore more and pursue a career in
          Computer Science, transitioning from my background in Biochemistry.
        </div>
        <div className="mt-5">
          To deepen my knowledge in computer science, I am currently pursuing my
          Master's degree at the Georgia Institute of Technology. I combine
          technical expertise with a strong foundation in sciences, and my
          diverse educational background equips me with unique problem-solving
          skills and a keen analytical mindset.
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "About");
