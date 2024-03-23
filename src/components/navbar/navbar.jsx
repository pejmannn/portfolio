import "./navbar.css";
import { Link } from "react-router-dom";

const navs = [
  {
    name: "home",
    link: "/",
    icon: "/icons/Home.svg",
  },
  {
    name: "about",
    link: "/about-me",
    icon: "/icons/person.svg",
  },
  {
    name: "contact",
    link: "/contact-me",
    icon: "/icons/Call.svg",
  },
];


// "
// flex justify-around items-center m-auto 2xl:w-1/4 2xl:h-20 bg-nav rounded-full fixed left-0 right-0 bottom-12
//     xl:h-12 xl:w-1/4
//     lg:h-10 lg:w-1/4
//     md:h-9 md:w-1/4
//     sm:h-8 sm:w-1/4
// "

const Navbar = () => {
  return (
    <nav
      className="fixed bottom-24 left-0 right-0 bg-nav h-12 min-w-56 max-w-72 rounded-full mx-auto py-1"
    >
      <ul className="flex justify-around">
        {navs.map((nav, index) => {
          return (
            <li key={`${nav.name}-${index}`}>
              <Link to={nav.link}>
              <img className="h-8 w-h-8" src={nav.icon} alt={nav.name} />
              </Link>
            </li>
          );
        })}
      </ul>

    
    </nav>
  );
};

export default Navbar;
