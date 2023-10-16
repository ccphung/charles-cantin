"use client"
import './tarif.css'
import Link from "next/link"
import Container from "react-bootstrap/Container"
import Col  from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row';
import Image from "react-bootstrap/Image";
import useSWR from "swr";
import axios from 'axios';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const page = () => {
  const {data, error} = useSWR('http://127.0.0.1:1337/api/pricings?populate=*', fetcher);

  if (error) return <div>Error loading data...</div>;
  if (!data) return <div>Loading...</div>;

    const datas = data.data

  return (
  <>
  {console.log(datas[0].attributes.Image.data[0].attributes.url)}
        <main>
            <div className="title-container">
                <h2>{datas[0].attributes.Title}</h2>
            </div>

            <Container>
                <Row>
                    {datas.map(data => (
                    <Col xs={12} md={6} lg={4}>
                          <div class="card m-3">
                          <Image class="card-img-top" src={`http://127.0.0.1:1337${data.attributes.Image.data[0].attributes.url}`} alt="Card image cap"/>
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