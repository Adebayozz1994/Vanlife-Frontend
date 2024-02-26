import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import Hostlink from "./Hostlink"
import LastNav from "./LastNav";

const Dashvandetails = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const URL = 'https://vanlife-backend-3je2.onrender.com/api/host/vans';

  useEffect(() => {
    axios.get(URL).then((response) => {
      console.log(response.data[id]);
      setData(response.data[id]);
    });
  }, [id]);
  return (
    <section className="bg-orange-50 lg:p-10 p-3">
      <Link to='/host/vans' className="underline lg:px-10 p-5">Back to all vans</Link>
      <main className="lg:p-10 px-3 py-5 bg-white mt-10">
      <div className="flex gap-5">
        <div>
          <img src={data.imageUrl} alt=""  width={160}/>
        </div>
        <div className="mt-3">
          <p className="w-20 text-center text-white p-2 rounded" style={{backgroundColor: data.type === 'simple' ? 'orange' : data.type === 'luxury' ? 'black' : 'green'}}>{data.type}</p>
          <p className="font-bold mt-2 w-full" style={{fontSize: "24px"}}>{data.name}</p>
          <p className=" w-full" style={{fontSize: "17px"}}>${data.price}/Day</p>
        </div>
      </div>  
      <LastNav/>
      <Outlet/>

   </main>

    </section>
  )
}

export default Dashvandetails