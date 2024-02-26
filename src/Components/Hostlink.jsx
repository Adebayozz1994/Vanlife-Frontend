
import { NavLink, Navigate } from "react-router-dom";


const Hostlink = () => {
  const hostLink = [
    {
      path: '/host/dashboard',
      title: 'Dashboard'
    },
    {
      path: '/host/income',
      title: 'Income'
    },
    {
      path: '/host/vans',
      title: 'Vans'
    },
    {
      path: '/host/reviews',
      title: 'Reviews'
    },
  ];

 
  
  return (
    <main className="flex gap-7 lg:p-10 px-5 py-10 bg-orange-50">
      {hostLink.map((link, i) => (
        <NavLink
          to={link.path}
          key={i}
          className={({ isActive }) => isActive ? "border-b-2 border-black font-bold": "text-gray-500" }
        >
          {link.title}
        </NavLink>
      ))}
    </main>
  );
};

export default Hostlink;
