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

            {/* Dropdown para Información */}
            <NavDropdown title="Información" id="dropdown-informacion">
              <NavDropdown.Item href="#licencias">Licencias</NavDropdown.Item>
              <NavDropdown.Item href="#adicionales">
                Adicionales
              </NavDropdown.Item>
              <NavDropdown.Item href="#categorías">Categorías</NavDropdown.Item>
              <NavDropdown.Item href="#jubilación">Jubilación</NavDropdown.Item>
            </NavDropdown>

            {/* Dropdown para Servicios */}
            <NavDropdown title="Servicios" id="dropdown-servicios">
              <NavDropdown.Item href="#salud">Salud</NavDropdown.Item>
              <NavDropdown.Item href="#turismo">Turismo</NavDropdown.Item>
              <NavDropdown.Item href="#extras">Extras</NavDropdown.Item>
            </NavDropdown>

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
