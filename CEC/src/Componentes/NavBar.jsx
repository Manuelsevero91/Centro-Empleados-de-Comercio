import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import "../Estilos/NavBar.css";
const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Título o Logo */}
        <Navbar.Brand href="#">Centro de Empleados de Comercio</Navbar.Brand>
        
        {/* Botón de toggle para colapsar la Navbar en pantallas pequeñas */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Links y formulario de búsqueda */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>          
            <Nav.Link href="#información">Información</Nav.Link>
            <Nav.Link href="#services">Servicios</Nav.Link>
            <Nav.Link href="#events">Noticias</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
          
          {/* Buscador */}
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
