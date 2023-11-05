"use client"
import './tarif.css'
import Link from "next/link"
import Container from "react-bootstrap/Container"
import Col  from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row';
import Image from "react-bootstrap/Image";
import useSWR from "swr";
import axios from 'axios';

// Fetching the data from Strapi
const fetcher = (url) => axios.get(url).then((res) => res.data);

const page = () => {
  const {data, error} = useSWR('https://charles-cantin-strapi-01d205b7c2c1.herokuapp.com/api/pricings?populate=*', fetcher);

  if (error) return <div>Erreur de chargement...</div>;
  if (!data) return <div>Chargement...</div>;

    const datas = data.data

  return (
  <>
  {/*Title*/}
    <main>
        <div className="title-container">
            <h2>{datas[0].attributes.Title}</h2>
        </div>
  {/* Card */}
        <Container>
            <Row>
                {datas.map(data => (
                <Col xs={12} md={6} lg={4}>
                      <div class="card m-3">
                      <Image class="card-img-top" src={`https://charles-cantin-strapi-01d205b7c2c1.herokuapp.com${data.attributes.Image.data[0].attributes.url}`} alt="Card image cap"/>
                      <div class="card-body">
                          <h5 class="card-title">{data.attributes.Option}<span className="colored-text">{data.attributes.Price}</span> </h5>
                          <p class="card-text">{data.attributes.Description}</p>
                          <Link href="\contact"><button className="btn">{data.attributes.Button}</button></Link>
                      </div>
                  </div>
                </Col>
                ))}
            </Row>
        </Container>
    </main>
  </>
  )
}

export default page