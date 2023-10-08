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
      <CategoryButton name="grossesse" handleClick={setCat}/>
    </div>

    <div className="container-fluid">
      <div className="row m-5">
          {filteredData.map(Data =>     
            <div key={Data.id} className="d-flex justify-content-md-center col-lg-4 mx-auto col-md-5 col-sm-6 card border-0 m-4">
                <img src={Data.img} className="w-100"/>
            </div>)}
      </div>
    </div>
    </>
  )
}

export default page