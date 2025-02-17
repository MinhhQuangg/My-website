import { Link } from "react-router-dom";
import { contacts } from "../constants/index.js";
import { styles } from "../styles";
import { logo } from "../assets/index.js";

export const Footer = () => {
  const handleContactClick = (e, link) => {
    e.preventDefault();
    window.open(link);
  };

  return (
    <div className={`${styles.paddingX} w-full text-white bg-primary py-5`}>
      <div className="text-center items-center justify-center justify-between md:flex">
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 object-contain cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          />
        </div>

        <div className="text-secondary flex flex-wrap justify-center md:justify-between gap-3 py-1">
          {contacts.map((contact, index) => (
            <Link
              key={contact.name}
              to={contact.to}
              className="hover:text-white"
              onClick={(e) => handleContactClick(e, contact.to)}
            >
              {contact.name} &nbsp;{index < contacts.length - 1 && "|"}
            </Link>
          ))}
        </div>

        <div className="text-secondary text-[14px]">© 2025 Minh Quang</div>
      </div>
    </div>
  );
};
{
  /* <div className="flex justify-between gap-5">
{contacts.map((contact) => (
  <img
    key={contact.name}
    src={contact.icon}
    alt={contact.name}
    className="w-8 h-8 object-contain"
  />
))}
</div> */
}
