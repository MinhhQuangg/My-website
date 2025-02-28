import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { introIcon } from "../constants";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();
  const handleClick = (e, link) => {
    e.preventDefault();
    window.open(link);
  };

  return (
    <div className="mt-20">
      <div className={`${styles.headerText}`}>
        {t("intro:Hello")}, <br />
        {t("intro:Iam")}
      </div>
      <div className={`${styles.headerSubText} mt-5`}>
        {t("intro:full-stack")} <br className="sm:block hidden" />
        {t("intro:Master-student")}
      </div>
      <div className="flex gap-5">
        {introIcon.map((contact) => (
          <img
            src={contact.icon}
            key={contact.name}
            className="w-10 h-10 cursor-pointer mt-5"
            onClick={(e) => handleClick(e, contact.to)}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Intro);
