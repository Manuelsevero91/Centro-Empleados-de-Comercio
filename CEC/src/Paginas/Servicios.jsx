import React from "react";
import NavBar from "../Componentes/NavBar"; // Navbar reutilizable
import { Card, Button, Row, Col, ListGroup } from "react-bootstrap";

const Servicios = () => {
  return (
    <>
      {/* Navbar */}
      <NavBar />

      {/* Título y párrafo */}
      <div className="container mt-4">
        <h1 className="custom-card-title">Nuestros Servicios</h1>
        <p class="text-white small-title">
          Descubre todos los beneficios, servicios y oportunidades que el Centro
          de Empleados de Comercio tiene para ofrecerte.
        </p>

        {/* Contenedor de las cards */}
        <div className="d-flex justify-content-center">
          <Row className="w-85">
            {/* Primera Card */}
            <Col md={4} className="mb-4 ">
              <Card className="shadow h-100 custom-card1">
                <Card.Body>
                  <h4 class="text-white small-title">Turismo</h4>
                  <Card.Img
                    variant="top"
                    src="https://wallpapers.com/images/featured/fondo-de-pantalla-hd-de-playa-b8sncabhuqz0gxrc.jpg"
                    alt="Imagen de hoteles"
                    className="card-img-custom"
                  />
                  <ListGroup className="mb-5">
                    <ListGroup.Item action href="#hotel1">
                      Hotel Buenos Aires
                    </ListGroup.Item>
                    <ListGroup.Item action href="#hotel2">
                      Hotel Córdoba
                    </ListGroup.Item>
                    <ListGroup.Item action href="#hotel3">
                      Hotel Mendoza
                    </ListGroup.Item>
                  </ListGroup>
                  <Card.Text class= "text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur eget eros vitae ex vehicula consequat. Aenean
                    commodo justo in nisi auctor, a tincidunt erat cursus. Proin
                    ac nunc nec urna elementum sollicitudin. Nulla eu orci nec
                    elit pharetra vulputate. Etiam venenatis.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Segunda Card */}
            <Col md={4} className="mb-4">
              <Card className="shadow h-100 custom-card1">
                <Card.Body>
                  <h4 class="text-white small-title">Salud</h4>
                  <Card.Img
                    variant="top"
                    src="https://img.freepik.com/fotos-premium/diversidad-atencion-medica-manos-medicos-asociacion-trabajo-equipo-exito-medicina-apoyo-motivacion-trabajadores-medicos-gesto-mano-mision-ayuda-solidaria-objetivos-colaboracion_590464-153584.jpg"
                    alt="Imagen de hoteles"
                    className="card-img-custom"
                  />
                  <ListGroup className="mb-5">
                    <ListGroup.Item>Descuento en farmacia</ListGroup.Item>
                    <ListGroup.Item>Programas de Salud</ListGroup.Item>
                    <ListGroup.Item>Reintegros</ListGroup.Item>
                    <ListGroup.Item>Recreación Familiar</ListGroup.Item>
                    <ListGroup.Item>Ajuar por nacimiento</ListGroup.Item>
                    <ListGroup.Item>6 meses de pañales gratis</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            {/* Tercera Card */}
            <Col md={4} className="mb-4">
              <Card className="shadow h-100 custom-card1 ">
                <Card.Body>
                  <h4 class="text-white small-title">Extras</h4>
                  <Card.Img
                    variant="top"
                    src="https://wallpapers.com/images/featured/fondo-de-pantalla-hd-de-playa-b8sncabhuqz0gxrc.jpg"
                    alt="Imagen de hoteles"
                    className="card-img-custom"
                  />
                  <ListGroup className="mb-5">
                    <ListGroup.Item>Descuentos en comercios</ListGroup.Item>
                    <ListGroup.Item>Entrega de útiles escolares</ListGroup.Item>
                    <ListGroup.Item>Consultorios médicos</ListGroup.Item>
                    <ListGroup.Item>Subsidios por nacimiento</ListGroup.Item>
                    <ListGroup.Item>Subsidios por casamiento</ListGroup.Item>
                    <ListGroup.Item>Ajuar por nacimiento</ListGroup.Item>
                    <ListGroup.Item>Espacio para eventos</ListGroup.Item>
                   
                    <ListGroup.Item>Convenios con gimnasio</ListGroup.Item>                    
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Servicios;
