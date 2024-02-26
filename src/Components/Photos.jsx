import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Photos = () => {
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
      <img src={det.imageUrl} alt="image of a van" width={89} className='mt-4' />
    </section>
  )
}


export default Photos