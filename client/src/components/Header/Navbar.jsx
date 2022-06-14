import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';



const ResponsiveAppBar = () => {
  return (
    <Navbar bg="dark" variant='dark' expand="md">
    <Container>
      <Navbar.Brand href="#home">Andre Vasquez</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Container>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Case studies</Nav.Link>
            <Nav.Link href="#link">Contact me</Nav.Link>
            </Nav>
        </Container>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};
export default ResponsiveAppBar;
