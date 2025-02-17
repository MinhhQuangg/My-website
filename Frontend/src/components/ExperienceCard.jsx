import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#ffffff",
      color: "black",
      borderTop: `3px solid ${experience.borderTop}`,
      boxShadow:
        "-2px 2px 5px rgba(0, 0, 0, 0.2), 2px 2px 5px rgba(0, 0, 0, 0.2)",
    }}
    contentArrowStyle={{ borderRight: "7px solid  black" }}
    date={
      <span style={{ color: "black", fontWeight: "bold" }}>
        {experience.date}
      </span>
    }
    iconStyle={{
      background: experience.iconBg,
      border: "2px solid black",
      justifyItems: "center",
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={`${experience.company_name} logo`}
          className="w-[60%] h-[60%]"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-[24px] font-bold">{experience.title}</h3>
      <h4 className="text-black-100 text-[14px]font-semibold">
        {experience.company}
      </h4>
    </div>
    <ul className="mt-2 list-disc ml-5 space-y-2">
      {experience.descriptions.map((description, index) => (
        <li key={index} className="text-[15px] ">
          {description}
        </li>
      ))}
    </ul>
    {experience.tags && (
      <div className="flex gap-4 mt-2 ml-5">
        {experience.tags.map((tag, index) => (
          <img key={index} src={tag} alt={tag} className="h-8 w-8" />
        ))}
      </div>
    )}
  </VerticalTimelineElement>
);

export default ExperienceCard;
