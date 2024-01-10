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
const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/pricings?populate=*`;
const authHeader = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
};

const fetcher = (apiUrl) => axios.get(apiUrl, authHeader).then((res) => res.data);

const page = () => {
  const accessToken = 'bd0c6284c3d1254599c555f0a1f78c6b72859b8f10ffd042b516e664472348e171ac5d331e461082597b464a8944123a89b926ee1eac6c5ecb73fb7393e7bca3cb6980d260f4341feaf6edb1e33cd7fbec2be111318b67a921208a91a8513d1ef2725a2ebf28edb3dfd205e5cdd612a3396b296b694237019df0bb6dfa7e183a';
  console.log(accessToken);

  const {data, error} = useSWR(apiUrl, fetcher);


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
                      <div className="card m-3">
                      <Image className="card-img-top" src={`https://charles-cantin-strapi-01d205b7c2c1.herokuapp.com${data.attributes.Image.data[0].attributes.url}`} alt="Card image cap"/>
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
  )
}

export default page