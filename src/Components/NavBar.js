import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo.svg'


const NavBar = () => {

  return (
    <>     
      <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Events</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <Nav.Link href="#link">Support</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>      
	 </>
  )
};

export default NavBar