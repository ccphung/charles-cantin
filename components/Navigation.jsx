"use client"
import Image from "react-bootstrap/Image";
import Link from "next/link";
import { Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from "react-bootstrap/Col";
import useSWR from "swr";
import axios from 'axios';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const Navigation = () => {
  const {data, error} = useSWR('https://charles-cantin-strapi-01d205b7c2c1.herokuapp.com/api/navigations?populate=*', fetcher);


  if (error) return <div className="text-center">Erreur de chargement...</div>;
  if (!data) return <div className="text-center">Chargement...</div>;

  return (
    <>

   {/* Logo */}
   <Container className="logo-link">
    <Row>
      <Col>
        <Link href="/" >
          <Image
            src={`https://charles-cantin-strapi-01d205b7c2c1.herokuapp.com${data.data[0].attributes.logo.data.attributes.url}`}
            height="150px"
            width="150px"
            className="p-4 logo"
            alt="logo"
            /> 
        </Link>
      </Col>
    {/* Bootstrap navbar */}
     <Col>
          <Navbar sticky="top" expand="lg" className="bg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light toggle-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/" className="link-nav" id="accueil">
                    {data.data[0].attributes.menu1}
                    </Nav.Link>
                  <Nav.Link href="galerie" className="link-nav" id="galerie">
                    {data.data[0].attributes.menu2}
                    </Nav.Link>
                  <Nav.Link href="tarifs" className="link-nav" id="tarifs">
                    {data.data[0].attributes.menu3}
                    </Nav.Link>
                  <Nav.Link href="contact" className="link-nav" id="contact">
                    {data.data[0].attributes.menu4}
                    </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  </>
  )
}

export default Navigation