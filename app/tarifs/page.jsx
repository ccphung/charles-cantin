// Importez les modules nécessaires
import './tarif.css';
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import Image from "react-bootstrap/Image";
import useSWR from "swr";
import axios from 'axios';

// Fonction pour récupérer les données depuis Strapi avec le token
const fetcherWithToken = (url, token) => {
  const authHeader = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  return axios.get(url, authHeader).then((res) => res.data);
};

const Page = () => {
  const accessToken = process.env.API_TOKEN;
  console.log("AccessToken:", accessToken);

  const { data, error } = useSWR(
    'https://charles-cantin-strapi-01d205b7c2c1.herokuapp.com/api/pricings?populate=*',
    () => fetcherWithToken('https://charles-cantin-strapi-01d205b7c2c1.herokuapp.com/api/pricings?populate=*', accessToken)
  );

  // Gestion des erreurs et du chargement
  if (error) return <div>Erreur de chargement...</div>;
  if (!data) return <div>Chargement...</div>;

  // Récupérez les données
  const datas = data.data;

  return (
    <>
      {/* Titre */}
      <main>
        <div className="title-container">
          <h2>{datas[0].attributes.Title}</h2>
        </div>
        {/* Cartes */}
        <Container>
          <Row>
            {datas.map(data => (
              <Col xs={12} md={6} lg={4} key={data.id}>
                <div className="card m-3">
                  <Image className="card-img-top" src={`https://charles-cantin-strapi-01d205b7c2c1.herokuapp.com${data.attributes.Image.data[0].attributes.url}`} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{data.attributes.Option}<span className="colored-text">{data.attributes.Price}</span> </h5>
                    <p className="card-text">{data.attributes.Description}</p>
                    <Link href="\contact"><button className="btn">{data.attributes.Button}</button></Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Page;
