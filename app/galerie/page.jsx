"use client"
import { useState } from "react";
import CategoryButton from "@/components/CategoryButton";
import './galerie.css'
import useSWR from "swr";
import axios from 'axios';
import Image from "react-bootstrap/Image";
import { Container, Col, Row } from "react-bootstrap";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const authHeader = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
};

const fetcher = (url) => axios.get(url, authHeader).then((res) => res.data);

const page = () => {
  const [cat, setCat] = useState('tout');
  
  const {data, error} = useSWR(apiUrl, fetcher);

  if (error) return <div className="text-center">Erreur de chargement...</div>;
  if (!data) return <div className="text-center">Chargement...</div>;

  const datas = data.data

  // Retrieve pictures data
  const picturesData = [
    datas.map(data => (
      [{
        id:data.attributes.id,
        alt:data.attributes.alt,
        className:"w-100",
        category:data.attributes.category,
        title:data.attributes.title,
        src:`https://charles-cantin-strapi-01d205b7c2c1.herokuapp.com${data.attributes.photo.data[0].attributes.url}`
      },
    ]
    ))
  ]

  const pictures = picturesData[0]

  // Filter on category
  const dataFiltered = pictures.map( 
  (picture => (picture[0])))
  .filter(
    choice => cat === 'tout' ? choice.category !=='' : choice.category === cat
  )

  return (
  <>
    {/* Header */}
    <div className="title-wrapper">
        <h2>Galerie</h2>
        <p>Découvrez quelques unes de mes photographies.</p>
    </div>

    {/* Buttons */}
    <div className="button-wrapper">
      <CategoryButton name="tout" handleClick={setCat}/>
      <CategoryButton name="bébé" handleClick={setCat}/>
      <CategoryButton name="mariage" handleClick={setCat}/>
      <CategoryButton name="portrait" handleClick={setCat}/>
      <CategoryButton name="baptème" handleClick={setCat}/>
      <CategoryButton name="couple" handleClick={setCat}/>
      <CategoryButton name="famille" handleClick={setCat}/>
      <CategoryButton name="grossesse" handleClick={setCat}/>
    </div>

    {/* Pictures   */}
    <Container>
      <Row>
        {dataFiltered.map(data => (
          <Col lg={4} md={6} xs={12}className="d-flex justify-content-md-center card border-0">
            <Image
              alt={data.alt}
              className="w-100 m-2"
              category={data.category}
              title={data.title}
              src={data.src}
            />
          </Col>
          ))}
      </Row>
    </Container>
    </>
  )
}

export default page