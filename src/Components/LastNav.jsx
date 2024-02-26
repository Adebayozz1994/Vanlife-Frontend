import axios from "axios";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

const LastNav = () => {
  const URL = 'https://vanlife-backend-3je2.onrender.com/host/vans';
  const {id} = useParams();
  useEffect(() => {
    axios.get(URL).then((response) => {
      console.log(response.data[id]);
      // setData(response.data[id]);
    });
  }, [id]);

  const lastLink = [
    {
      path: `details`,
      title: 'Details'
    },
    {
      path: `pricing`,
      title: 'Pricing'
    },
    {
      path: `photos`,
      title: 'Photos'
    },
    
  ];
  return (
    <section className="flex gap-7 lg:p-10 py-4 mt-10 ">
       {lastLink.map((link, i) => (
        <NavLink
          to={link.path}
          key={i}
          className={({ isActive }) => isActive ? "border-b-2 border-black font-bold": "text-gray-500" }
        >
          {link.title}
        </NavLink>
      ))}
    </section>
  )
}

export default LastNav