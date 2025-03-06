import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { showUp, slideIn } from "../utils/motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div variants={slideIn("right", 3)}>
        <div className="flex flex-col items-end">
          <p className={styles.sectionSubText}>{t("Introduction")}</p>
          <h2 className={styles.sectionHeadText}>{t("About me")}</h2>
        </div>
      </motion.div>
      <motion.div
        variants={showUp()}
        className="mt-10 text-[18px] flex flex-col pl-[20%]"
      >
        <div>{t("First content")}</div>
        <div className="mt-5">{t("Second content")}</div>
        <div className="mt-5">{t("Third content")}</div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "About");
