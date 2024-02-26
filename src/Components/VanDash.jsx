import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


const VanDash = () => {
  const URL = 'https://vanlife-backend-3je2.onrender.com/api/host/vans';
  const [host, setHost] = useState([])
  
  useEffect(() => {
    axios.get(URL)
      .then(response => {
        console.log(response.data);
        setHost(response.data);
         
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <main className="bg-orange-50">
      <main className="lg:p-10 py-5 p-3">
        <nav className="flex justify-between items-center pb-7">
        <h3 className="text-xl font-bold">Your listed vans</h3>

        </nav>
        <div className="lg:p-10">
          {
            host.map((hostVan)=>(
          <Link to={`/host/vans/${hostVan.id}`} className="bg-white p-3 flex items-center justify-between mt-3 mb-5" key={hostVan.id}>
            <div className="flex gap-5">
            <img src={hostVan.imageUrl} alt="image of a van" width={66} className="rounded-md"/>
            <div>
            <p >{hostVan.name}</p>
            <p className="text-gray-500">${hostVan.price}/Day</p>
            </div>
            </div>
            
          </Link>
            ))
          }
        </div>
      </main>
      </main>
  )
}

export default VanDash