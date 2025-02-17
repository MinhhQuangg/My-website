import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { introIcon } from "../constants";

const Intro = () => {
  const handleClick = (e, link) => {
    e.preventDefault();
    window.open(link);
  };

  return (
    <div className="mt-20">
      <div className={`${styles.headerText}`}>
        Hello, <br />
        I'm Quang
      </div>
      <div className={`${styles.headerSubText} mt-5`}>
        I am a full-stack developer <br className="sm:block hidden" />
        and a Master's student at the Georgia Institute of Technology.
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
