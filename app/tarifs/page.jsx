import './tarif.css'
import Link from "next/link"
import Container from "react-bootstrap/Container"
import Col  from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row';
import Image from "react-bootstrap/Image"
import getPricingData from '../features/getPricingData';

const page = async () => {
    const pricing = await getPricingData()
    const prices = pricing.data
  return (
  <>
  {console.log(prices[0].attributes.Image.data[0].attributes.url)}
        <main>
            <div className="title-container">
                <h2>{prices[0].attributes.Title}</h2>
            </div>

            <Container>
                <Row>
                    {prices.map(price => (
                    <Col xs={12} md={6} lg={4}>
                          <div class="card m-3">
                          <Image class="card-img-top" src={`http://127.0.0.1:1337${price.attributes.Image.data[0].attributes.url}`} alt="Card image cap"/>
                          <div class="card-body">
                              <h5 class="card-title">{price.attributes.Option}<span className="colored-text">{price.attributes.Price}</span> </h5>
                              <p class="card-text">{price.attributes.Description}</p>
                              <Link href="\contact"><button className="btn">{price.attributes.Button}</button></Link>
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