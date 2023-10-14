import Image from "next/image"
import Link from "next/link"

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
            src="/public/images/logo/facebook.svg"
            width={30}
            height={30}
            color="white"
            alt="facebook logo"
          />

          <img src="/public/images/logo/facebook.svg"></img>
          <Image
            src="../public/images/logo/instagram.svg"
            width={30}
            height={30}
            color="white"
            alt="instagram logo"
          />
      </div>
      <Link href="/galerie">
        <div className="clickable-text text-center">Découvrir</div>
      </Link>
    </section>
  </>
  )
}   

export default Home