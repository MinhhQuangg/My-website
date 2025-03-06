import { styles } from "../styles";
import { sections } from "../constants/index.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import { menu, close, logo } from "../assets";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
  const { i18n, t } = useTranslation();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [languageDropDown, setLanguageDropDown] = useState(false);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div
      className={`${styles.paddingX} bg-primary w-full py-3 z-10 fixed top-0`}
    >
      <div className="w-full flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex"></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-8">
          {sections.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-bold cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{t(`nav:${link.title}`)}</a>
            </li>
          ))}
          <li
            className={`relative text-secondary hover:text-white text-[18px] font-bold cursor-pointer`}
            onMouseEnter={() => setLanguageDropDown(true)}
            onMouseLeave={() => setLanguageDropDown(false)}
          >
            {t("nav:Language")}
            {languageDropDown && (
              <div className="absolute top-full bg-primary p-2 rounded-xl shadow-lg">
                <ul className="list-none">
                  <li
                    className="text-secondary hover:text-white cursor-pointer text-[14px] py-1"
                    onClick={() => changeLanguage("en")}
                  >
                    {t("nav:English")}
                  </li>
                  <li
                    className="text-secondary hover:text-white cursor-pointer text-[14px] py-1"
                    onClick={() => changeLanguage("vi")}
                  >
                    {t("nav:Vietnamese")}
                  </li>
                </ul>
              </div>
            )}
          </li>
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
            } p-6 bg-primary absolute top-14 right-0  my-2 min-w-[140px] z-10 rounded-xl`}
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
                  }}
                >
                  <a href={`#${link.id}`}>{t(`nav:${link.title}`)}</a>
                </li>
              ))}
              <li
                className={`relative text-secondary hover:text-white
                 font-poppins font-medium cursor-pointer text-[16px]
              }`}
                onMouseEnter={() => setLanguageDropDown(true)}
                onMouseLeave={() => setLanguageDropDown(false)}
              >
                {t("nav:Language")}
                {languageDropDown && (
                  <div className="absolute top-full left-0 bg-primary p-2 rounded-xl shadow-lg">
                    <ul className="list-none">
                      <li
                        className="text-secondary hover:text-white cursor-pointer text-[15px] p-1 whitespace-nowrap"
                        onClick={() => changeLanguage("en")}
                      >
                        {t("nav:English")}
                      </li>
                      <li
                        className="text-secondary hover:text-white cursor-pointer text-[15px] p-1 whitespace-nowrap"
                        onClick={() => changeLanguage("vi")}
                      >
                        {t("nav:Vietnamese")}
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
