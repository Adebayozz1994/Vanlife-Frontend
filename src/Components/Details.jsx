import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Details = () => {
  const URL = 'https://vanlife-backend-3je2.onrender.com/api/host/vans';
  const [det, setDet] = useState([])
  const {id} = useParams();
  useEffect(() => {
    axios.get(URL).then((response) => {
      console.log(response.data[id]);
      setDet(response.data[id]);
    });
  }, [id]);
  return (
    <section>
      <p className="mt-2"><strong>Name:</strong> {det.name}</p>
      <p className="mt-2"><strong>Category:</strong> {det.type}</p>
      <p className="mt-2"><strong>Description:</strong> {det.description}</p>
      <p className="mt-2"><strong>Visibility:</strong> Public</p>     
    </section>
  )
}

export default Details