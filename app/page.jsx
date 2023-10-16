import Image from "next/image"
import Link from "next/link"

const getHomeData = async () =>  {
  const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
      cache: 'no-store',
    };

  const response = await fetch(`http://127.0.0.1:1337/api/homes?populate=*`, reqOptions)

  if(!response.ok) {
      throw new Error('failed to fetch data')
  }

  return await response.json()
}


const Home = async() => {
  const homes = await getHomeData()
  return (
  <>
  <section className="home-page">
    {/* Background */}
    <div>
    <Image
        src={`http://127.0.0.1:1337${homes.data[0].attributes.background.data.attributes.url}`}
        layout="fill"
        objectFit="cover"
        quality={100}
        priority="false"
        className="home-background"
        alt="wedding picture"
          />
    </div>

    {/* Title */}
    <h1 className="title text-center">{homes.data[0].attributes.title}</h1>

    {/* Sub title  */}
    <div className="spin-wrapper">
      <span className="static-text text-center">{homes.data[0].attributes.subtitle}</span> 
      <span className="dynamic-text"></span>
    </div>

    {/* Socials */}
    <div className="socials text-center">
          <Image
            src={`http://127.0.0.1:1337${homes.data[0].attributes.socials.data[0].attributes.url}`}
            width={30}
            height={30}
            color="white"
            alt="facebook logo"
          />
          <Image
            src={`http://127.0.0.1:1337${homes.data[0].attributes.socials.data[1].attributes.url}`}
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