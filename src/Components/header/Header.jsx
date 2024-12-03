import React from 'react'
import "./header.css";
import { Navbar,Container,Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <>
    <Navbar expand="lg" className="Navbar">
      <Container>
        <Navbar.Brand href="#home">Rezwan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Service</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Hire Me</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    
  )
}

export default Header