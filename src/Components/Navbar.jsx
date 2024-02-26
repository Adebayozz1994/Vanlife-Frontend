import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/vanlife.svg";

const Navbar = () => {
  const activeLink = [
    {
      path: "/host",
      title: "Host",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/vans",
      title: "Vans",
    },
    // {
    //   path: "/signin",
    //   title: "Sign in",
    // },
  ];

  return (
    <nav className="flex justify-between lg:p-10 p-5 bg-orange-50">
      <div>
        <Link to="/Home">
          <img src={logo} alt="" width={100} />
        </Link>
      </div>
      <div className="flex lg:gap-5 gap-5">
        {activeLink.map((link, index) => (
          <NavLink key={index} to={link.path} className={({ isActive }) => (isActive ? "border-b-2 border-black font-bold" : "text-gray-500")}>
            {link.title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
