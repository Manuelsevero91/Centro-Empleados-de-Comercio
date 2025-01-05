import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  NavDropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import "../Estilos/NavBar.css";

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        {/* Título o Logo */}
        <Navbar.Brand as={NavLink} to="/">Centro de Empleados de Comercio</Navbar.Brand>

        {/* Botón de toggle para colapsar la Navbar en pantallas pequeñas */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Links y formulario de búsqueda */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link as={NavLink} to="/">Inicio</Nav.Link> */}

            {/* Dropdown para Información */}
            <NavDropdown title="Información para el afiliado" id="dropdown-informacion">
              <NavDropdown.Item as={NavLink} to="/licencias">Licencias</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/adicionales">Adicionales</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/categorias">Categorías</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/jubilacion">Jubilación</NavDropdown.Item>
            </NavDropdown>

            {/* Dropdown para Servicios */}
            <NavDropdown title="Servicios" id="dropdown-servicios">
              <NavDropdown.Item as={NavLink} to="/salud">Salud</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/turismo">Turismo</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/extras">Extras</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/Nosotros">Nosotros</Nav.Link>
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


