import Image from "next/image"

const Home = () => {
  return (
  <>
  
    <div className="title">
      <h1>Charles Cantin</h1>
      <span>Photographe <span className="spin"></span></span>
    </div>


    <div className="socials text-center">
        <Image
          src="images/logo/facebook.svg"
          width={30}
          height={30}
          color="white"
          alt="facebook logo"
        />
        <Image
          src="images/logo/instagram.svg"
          width={30}
          height={30}
          color="white"
          alt="instagram logo"
        />
      </div>

    <div className="clickable-text text-center">Découvrir</div>


  </>
  )

}   

export default Home