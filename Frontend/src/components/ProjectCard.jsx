import { github, demo } from "../assets";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

export const ProjectCard = ({
  index,
  name,
  description,
  tags,
  src_link,
  gif,
  demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.25)}>
      <div className="p-5 rounded-2xl h-[100%] md:w-[360px] sm:w-[500px] xs:w-[400px] border-solid border-2">
        <div className="relative w-full h-[200px]">
          <img
            src={gif}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-col justify-between h-[40%]">
          <div className="flex flex-col justify-between">
            <div className="mt-5">
              <h3 className=" font-bold text-[24px]">{name}</h3>
              <p className="mt-2  text-[16px]">{description}</p>
            </div>
          </div>
          <div className="mt-4 flex justify-between w-full">
            <div className="flex gap-3">
              {tags.map((tag, index) => (
                <div key={index} className="flex">
                  <img src={tag} alt={tag} className="h-8 w-8" />
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              {demo_link && (
                <img
                  src={demo}
                  alt="Demo"
                  className="h-8 w-8 cursor-pointer"
                  onClick={() => window.open(demo_link, "_blank")}
                />
              )}
              <div onClick={() => window.open(src_link, "_blank")}>
                <img
                  src={github}
                  alt="GitHub"
                  className="h-8 w-8 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
