import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Pricing = () => {
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
      <p className="mt-2 text-xl"><strong>${det.price}</strong> /day</p>     
    </section>
  )
}

export default Pricing