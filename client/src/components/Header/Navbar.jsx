import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector, useDispatch } from 'react-redux';
import { setIsEnglish,setIsSpanish } from '../../lib/reducers/slices/languageSlice';



const ResponsiveAppBar = () => {
  const isEnglish = useSelector((state)=>state.language.isEnglish);
  const isSpanish = useSelector((state)=> state.language.isSpanish);
  const dispatch = useDispatch();
  return (
    <>
    <Navbar bg="dark" variant='dark' expand="md">
    <Container>
      <Navbar.Brand href="#home">Andre Vasquez</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Container>
            <Nav className="me-auto">
            <Nav.Link href="#home">{isEnglish ? 'Home' : 'Hogar' }</Nav.Link>
            <Nav.Link href="#link">{isEnglish ? 'Case Studies' : 'estudios de caso' }</Nav.Link>
            <Nav.Link href="#link">{isEnglish ? 'Contact Me': 'Contáctame'}</Nav.Link>
            </Nav>
        </Container>
        <NavDropdown title={isEnglish ? 'Change Language':'Cambiar Idioma'} id="basic-nav-dropdown">
          <NavDropdown.Item href="#" onClick={()=>dispatch(setIsEnglish(true))}>{isEnglish ? 'English' : 'Ingles'}</NavDropdown.Item>
          <NavDropdown.Item href="#" onClick={()=>dispatch(setIsSpanish(true))}>{isEnglish ? 'Spanish' : 'Espanol'}</NavDropdown.Item>
          <NavDropdown.Item href="#" onClick={()=>console.log(isEnglish,isSpanish)}>Show State</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  );
};
export default ResponsiveAppBar;
