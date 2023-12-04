import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>
            <i className='bx bx-movie-play bx-tada main-color'></i>
            Cartelera Cine
          </Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-between">
            <LinkContainer to="/">
              <Nav.Link className="flex-fill text-center">Inicio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cartelera">
              <Nav.Link className="flex-fill text-center">Cartelera</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/compra">
              <Nav.Link className="flex-fill text-center">Compra de Boletos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="flex-fill text-center">Contacto</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about-us">
              <Nav.Link className="flex-fill text-center">Acerca de Nosotros</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/preguntas">
              <Nav.Link className="flex-fill text-center">Preguntas Frecuentes</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
