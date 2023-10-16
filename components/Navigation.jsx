"use client"
import Image from "next/image";
import Link from "next/link";
import { Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from "react-bootstrap/Col";

const Navigation = () => {

  return (
    <>

   {/* Logo */}
   <Container className="logo-link">
    <Row>
      <Col>
        <Link href="/" >
          <Image
            src="/Images/Logo/logo.png"
            height="150"
            width="150"
            className="p-4 logo "
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
                    Accueil
                    </Nav.Link>
                  <Nav.Link href="galerie" className="link-nav" id="galerie">
                    Galerie
                    </Nav.Link>
                  <Nav.Link href="tarifs" className="link-nav" id="tarifs">
                    Tarifs
                    </Nav.Link>
                  <Nav.Link href="contact" className="link-nav" id="contact">
                    Contact
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