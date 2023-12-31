"use client"
import Image from "next/image";
import Link from "next/link"
import useSWR from "swr";
import axios from 'axios';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const Home = () => {
  const {data, error} = useSWR('http://127.0.0.1:1337/api/homes?populate=*', fetcher);

  if (error) return <div className="text-center">Erreur de chargement...</div>;
  if (!data) return <div className="text-center">Chargement...</div>;

  console.log('data', data.data)
  return (

  <>
    {/* Background */}
    <div style = {{
          backgroundImage:`url("http://127.0.0.1:1337${data.data[0].attributes.background.data.attributes.url}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position:'fixed',
          top:'0%',
          filter: 'brightness(90%)'
        }}/>

    {/* Title */}
    <h1 className="title text-center">{data.data[0].attributes.title}</h1>

    {/* Sub title  */}
    <div className="spin-wrapper">
      <span className="static-text text-center">{data.data[0].attributes.subtitle}</span> 
      <span className="dynamic-text"></span>
    </div>

    {/* Socials */}
    <div className="socials text-center">
          <Image
            src={`http://127.0.0.1:1337${data.data[0].attributes.socials.data[0].attributes.url}`}
            width={30}
            height={30}
            color="white"
            alt="facebook logo"
          />
          <Image
            src={`http://127.0.0.1:1337${data.data[0].attributes.socials.data[1].attributes.url}`}
            width={30}
            height={30}
            color="white"
            alt="instagram logo"
          />
      </div>
      <Link href="/galerie">
        <div className="clickable-text text-center">Découvrir</div>
      </Link>
  </>
  )
}   

export default Home