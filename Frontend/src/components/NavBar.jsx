import { styles } from "../styles";
import { sections } from "../constants/index.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import { menu, close } from "../assets";

export const NavBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`${styles.paddingX} bg-primary w-full py-5 z-10`}>
      <div className="w-full flex justify-between">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Minh Quang
          </p>
        </Link>
        <ul className="hidden sm:flex flex-row gap-10">
          {sections.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              {link.title}
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            onClick={() => setToggle(!toggle)}
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            alt="menu"
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-primary absolute top-14 right-0  my-2 min-w-[140px] z-10 arounded-x1`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {sections.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]
              }`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
