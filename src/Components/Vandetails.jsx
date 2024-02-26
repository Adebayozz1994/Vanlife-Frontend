import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Vandetails = () => {
  let { id } = useParams();
  const [data, setData] = useState(null); // Initialize data as null

  useEffect(() => {
    axios.get(`https://vanlife-backend-3je2.onrender.com/api/host/vans/${id}`)
      .then(response => {
        setData(response.data); // Set data when response is received
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <section className="bg-gray-100 overflow-x-hidden">
      <main className="bg-white">
        <Link to='/vans' className="lg:p-10 p-5 underline">
          Back to all vans
        </Link>
        {data && ( 
          <div className="lg:px-32 lg:py-14 lg:flex lg:gap-32 lg:justify-between lg:align-middle p-3">
            <img src={data.imageUrl} alt="" width={400} className="rounded" />
            <div className="lg:w-50 w-50">
              <h1 style={{ fontSize: '30px' }} className="text-bold mt-3">
                {data.name}
              </h1>
              <div className="pt-2">
                <p style={{ fontSize: '20px', marginTop: '5px', fontWeight: 'bolder' }}>
                  ${data.price}<small className="font-normal">/day</small>
                </p>
              </div>
              <h4 className="mt-3 lg:w-full w-auto text-balance">
                {data.description}
              </h4>
              <div className="py-3">
                <button className="p-3 cursor-none rounded text-white font-bold" style={{ backgroundColor: data.type === 'simple' ? 'orange' : data.type === 'luxury' ? 'black' : 'green' }}>
                  {data.type}
                </button>
              </div>
              <div className="lg:py-3 py-3">
                <button className="lg:p-2 text-center bg-orange-500 text-white font-bold rounded p-2 lg:w-full w-full">Rent this van</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </section>
  );
};

export default Vandetails;
