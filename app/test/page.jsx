"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'



const page = () => {

const [data, setData] = useState(null);

useEffect(() => {
  const fetchData = async() => {
    const data = await axios.get('http://localhost:1337/api/homes?populate=*');
    let response = data.data.data;
    setData(response);
    console.log(response)
  };
  fetchData();
}, []);

  console.log(data)

  {data?.map((item, index))}
  return (
    <div>
      <img src={`http://localhost:1337/${attributes.image.data.attributes.url}`} alt="" />
    </div>
  )
}

export default page