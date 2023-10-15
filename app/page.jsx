import Image from "next/image"
import Link from "next/link"

const Home = () => {
  return (
  <>
  <section className="home-page">
    {/* Background */}
    <div>
    <Image
        src="/Images/Background/hisu-lee-FTW8ADj5igs-unsplash.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority="false"
        className="home-background"
          />
    </div>
    

    {/* Title */}
    <h1 className="title text-center">Charles Cantin</h1>

    {/* Sub title  */}
    <div className="spin-wrapper">
      <span className="static-text text-center">Photographe </span> <span className="dynamic-text"></span>
    </div>

    {/* Socials */}
    <div className="socials text-center">
          <Image
            src="/Images/Logo/facebook.svg"
            width={30}
            height={30}
            color="white"
            alt="facebook logo"
          />

          <Image
            src="/Images/Logo/instagram.svg"
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