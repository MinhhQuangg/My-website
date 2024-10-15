import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const [moreButton, setMoreButton] = useState(true);
  const handleClick = () => {
    setMoreButton(!moreButton);
  };
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>My Journey</p>
        <h2 className={styles.sectionHeadText}>
          Education and Work Experience
        </h2>
      </motion.div>
      <div className="mt-10 flex flex-col ">
        <VerticalTimeline lineColor="black">
          {experiences.map((experience, index) =>
            moreButton ? (
              index < 4 && (
                <ExperienceCard key={index} experience={experience} />
              )
            ) : (
              <ExperienceCard key={index} experience={experience} />
            )
          )}
        </VerticalTimeline>
      </div>
      <div
        className={`${styles.sectionSubText} text-center mt-3 text-black-200 hover:text-black`}
      >
        <button
          className="rounded-full border-2 border-black px-3 "
          onClick={handleClick}
        >
          {moreButton ? "More" : "Less"}
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "Experience");
