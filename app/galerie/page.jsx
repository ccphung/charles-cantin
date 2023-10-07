"use client"
import Image from "next/image";
import { useState } from "react";



const page = () => {
    // [wedding, setWedding] = useState(true)

    // const handleClick = () => {
    //     setWedding=false;
    // }



  return (
    <>
    <div class="row m-5">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div className="image-size-landscape">
                <Image 
                    src={'/images/mariage/alvaro-cvg-mW8IZdX7n8E-unsplash.jpg'}
                    fill
                    alt="wedding picture"
                />
            </div>
            <div className="image-size-portrait">
                <Image 
                    src={'/images/mariage/ed-robertson-sqLVUTFtxVs-unsplash.jpg'}
                    fill
                    alt="wedding picture"
                />
            </div>
        </div>
        <div class="col-lg-4 mb-4 mb-lg-0">
            <div className="image-size-portrait">
                <Image 
                    src={'/images/mariage/jakob-owens-jbaF5N0uO0k-unsplash.jpg'}
                    fill
                    alt="wedding picture"
                    />
            </div>
            <div className="image-size-portrait">
                <Image 
                    src={'/images/mariage/fabio-alves-BpeTaQozgN4-unsplash.jpg'}
                    fill
                    alt="wedding picture"
                />
            </div>
        </div>
        <div class="col-lg-4 mb-4 mb-lg-0">
            <div className="image-size-landscape">
                <Image 
                    src={'/images/mariage/foto-pettine-IfjHaIoAoqE-unsplash.jpg'}
                    fill
                    alt="wedding picture"
                />
        </div>
            <div className="image-size-landscape">
                <Image  
                    src={'/images/mariage/eugenivy_now-1Bs2sZ9fD2Q-unsplash.jpg'}
                    fill
                    alt="wedding picture"
                />
            </div>
        </div>
    </div>
    </>
  )
  }
export default page