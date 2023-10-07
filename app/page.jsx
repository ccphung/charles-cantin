import Image from "next/image"

const Home = () => {
  return (
  <>
  <section className="home-background">
    <h1 className="title">Charles Cantin</h1>

    <div className="spin-wrapper">
      <span className="static-text">Photographe </span> <span className="dynamic-text"></span>
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
    </section>
  </>
  )
}   

export default Home