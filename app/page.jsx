import  Image  from "react-bootstrap/Image";
import Link from "next/link"

// const getHomeData = async () =>  {
//   const reqOptions = {
//       headers: {
//         'Authorization': `Bearer ${process.env.API_TOKEN}`,
//         'Content-Type': 'application/json',
//       },
//       cache: 'no-store',
//       method: 'GET',

//     };

//   const request = await fetch(`http://127.0.0.1:1337/api/homes?populate=*`, reqOptions)
//   const response = await request.json()
//   return await response
// }

const Home = async({response}) => {
  // const homes = await getHomeData()


  return (
  <>
  <section className="home-page">
    {/* Background */}
    <div>
    <Image
        src={`http://127.0.0.1:1337${response.data[0].attributes.background.data.attributes.url}`}
        layout="fill"
        objectFit="cover"
        quality={100}
        priority="false"
        className="home-background"
        alt="wedding picture"
          />
    </div>

    {/* Title */}
    {/* <h1 className="title text-center">{homes.data[0].attributes.title}</h1> */}

    {/* Sub title  */}
    <div className="spin-wrapper">
      {/* <span className="static-text text-center">{homes.data[0].attributes.subtitle}</span>  */}
      <span className="dynamic-text"></span>
    </div>

    {/* Socials */}
    <div className="socials text-center">
          <Image
            // src={`http://127.0.0.1:1337${homes.data[0].attributes.socials.data[0].attributes.url}`}
            width={30}
            height={30}
            color="white"
            alt="facebook logo"
          />
          <Image
            // src={`http://127.0.0.1:1337${homes.data[0].attributes.socials.data[1].attributes.url}`}
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
Home.getInitialProps = async ctx => {
  try {
    // Parses the JSON returned by a network request
    const parseJSON = resp => (resp.json ? resp.json() : resp);
    // Checks if a network request came back fine, and throws an error if not
    const checkStatus = resp => {
      if (resp.status >= 200 && resp.status < 300) {
        return resp;
      }

      return parseJSON(resp).then(resp => {
        throw resp;
      });
    };

    const headers = {
      'Content-Type': 'application/json',
    };

    const response = await fetch('http://127.0.0.1:1337/api/homes?populate=*', {
      method: 'GET',
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);

    return { response };
  } catch (error) {
    return { error };
  }
};

export default Home