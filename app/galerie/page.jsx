"use client"
import Data from "@/components/Data"
import { useEffect, useState } from "react";
import CategoryButton from "@/components/CategoryButton";
import './galerie.css'

const page = () => {
    const[cat, setCat] = useState('tout');
    const[filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        cat === 'tout' ? setFilteredData(Data) : setFilteredData(Data.filter(val => val.category === cat))
    },[cat])

  return (
  <>
    <div className="title-wrapper">
        <h2>Galerie</h2>
        <p>Découvrez quelques unes de mes photographies.</p>
    </div>
    <div className="button-wrapper">
      <CategoryButton name="tout" handleClick={setCat}/>
      <CategoryButton name="bébé" handleClick={setCat}/>
      <CategoryButton name="mariage" handleClick={setCat}/>
      <CategoryButton name="portrait" handleClick={setCat}/>
      <CategoryButton name="baptème" handleClick={setCat}/>
      <CategoryButton name="couple" handleClick={setCat}/>
      <CategoryButton name="famille" handleClick={setCat}/>
    </div>

    <div className="container">
      <div className="row">
          {filteredData.map(Data =>     
            <div key={Data.id} className=" justify-content-center col-lg-3 col-md-4 col-sm-6 card border-0 m-4">
                <img src={Data.img}/>
            </div>)}.
      </div>
    </div>
    </>
  )
}

export default page