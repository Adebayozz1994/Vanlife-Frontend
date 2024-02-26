import { Link } from "react-router-dom"
import starIcon from "../assets/Star3.svg"
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
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
    <section >
      <main className="lg:p-10 p-5 bg-orange-200">
        <p className="font-bold lg:text-3xl text-2xl" >Welcome!</p>

        <div className="py-5 lg:py-5 flex justify-between items-center">
          <p className="text-gray-600">Income last <u>30 days</u></p>
          <Link className="text-black">Details</Link>
        </div>
        <div>
          <h4 className="font-bold text-4xl">$2,260</h4>
        </div>
      </main>
      <main className="lg:p-10 p-5 bg-orange-300 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <strong style={{fontSize:"17px"}}>Review score</strong>
          <p className="flex items-center" style={{fontSize:"17px"}}><img src={starIcon} alt="star icon" className="me-2"/><b>5.0</b>/5</p>
        </div>
          <div>
            <p>Details</p>
          </div>
      </main>
      
      <main className="lg:p-10 py-4 bg-orange-50 p-3">
        <nav className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Your listed vans</h3>
        <Link to='/host/vans'>View all</Link>
        </nav>
        <div className="lg:p-10">
          {
            host.map((hostVan)=>(
          <div className="bg-white p-3 flex items-center justify-between mt-3 mb-2" key={hostVan.id}>
            <div className="flex gap-5">
            <img src={hostVan.imageUrl} alt="image of a van" width={66} className="rounded-md"/>
            <div>
            <p >{hostVan.name}</p>
            <p className="text-gray-500">${hostVan.price}/Day</p>
            </div>
            </div>
            <div>
            <p>Edit</p>
            </div>
          </div>
            ))
          }
        </div>
      </main>
      </section>
  )
}

export default Dashboard