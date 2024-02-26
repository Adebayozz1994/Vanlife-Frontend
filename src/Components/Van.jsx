import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Van = () => {
  const [vans, setVans] = useState([]);
  const [filteredVans, setFilteredVans] = useState([]);
  const URL = 'https://vanlife-backend-3je2.onrender.com/api/vans';
  

  useEffect(() => {
    axios.get(URL)
      .then(response => {
        setVans(response.data);
        setFilteredVans(response.data); 
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filterVansByType = (type) => {
    let filtered = [];
    if (type === 'simple') {
      filtered = vans.filter(van => van.type.toLowerCase() === 'simple');
    } else if (type === 'luxury') {
      filtered = vans.filter(van => van.type.toLowerCase() === 'luxury');
    } else if (type === 'rugged') {
      filtered = vans.filter(van => van.type.toLowerCase() === 'rugged');
    }
    setFilteredVans(filtered);
  };

  const clearFilter = () => {
    setFilteredVans(vans); 
  };

  return (
    <main>
      <div className="font-bold lg:text-3xl lg:px-10 text-2xl p-5">
        <h1>Explore our van options</h1>
      </div>
      <nav className="lg:px-10 lg:my-10 flex justify-between px-3 pb-7">
        <div className="flex lg:gap-10 gap-3">
          <button className="p-3 lg:w-36 w-15 flex justify-center rounded bg-orange-200"  onClick={() => filterVansByType('simple')}>
            Simple
          </button>
          <button className="p-3 lg:w-36 w-15 flex justify-center rounded bg-orange-200"   onClick={() => filterVansByType('luxury')}>
            Luxury
          </button>
          <button className="p-3 lg:w-36 w-15 flex justify-center rounded bg-orange-200"   onClick={() => filterVansByType('rugged')}>
            Rugged
          </button>
        </div>
        <div>
          <button className="border-b-2 border-black p-1" onClick={clearFilter}>
            clear filter
          </button>
        </div>
      </nav>

      <div className="lg:grid   lg:grid-cols-3  lg:gap-10 lg:px-10 lg:py-5 py-3  rounded flex flex-wrap">
        {
          filteredVans.map((van) => (
            <Link key={van.id} to={`/api/vans/${van.id}`} className="p-5">
              <img src={van.imageUrl} alt={van.name} className="lg:w-full mb-2 rounded-md w-36" />
              <h2 className="text-xl font-bold">{van.name}</h2>
              <p className="text-gray-600">${van.price}</p>
              <button className="p-3 rounded text-white font-bold" style={{backgroundColor: van.type === 'simple' ? 'orange' : van.type === 'luxury' ? 'black' : 'green'}}>
                {van.type}
              </button>
            </Link>
          ))
        }
      </div>
    </main>
  );
};

export default Van;
