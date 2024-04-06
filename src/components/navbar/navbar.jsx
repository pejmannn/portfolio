import "./navbar.css";
import { Link } from "react-router-dom";

const navs = [
  {
    name: "home",
    link: "/",
    icon: "/icons/home.svg",
  },
  {
    name: "about",
    link: "/about-me",
    icon: "/icons/person.svg",
  },
  {
    name: "contact",
    link: "/contact-me",
    icon: "/icons/call.svg",
  },
];


const Navbar = () => {
  return (
    <nav className="fixed bottom-12 md:bottom-24 left-0 right-0 bg-nav h-12 min-w-56 max-w-72 rounded-full mx-auto py-1">
      <ul className="flex items-center justify-around">
        {navs.map((nav, index) => {
          return (
            <li key={`${nav.name}-${index}`} className="px-2 py-1">
              <Link to={nav.link}>
                <img className="h-7 w-7" src={nav.icon} alt={nav.name} />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
