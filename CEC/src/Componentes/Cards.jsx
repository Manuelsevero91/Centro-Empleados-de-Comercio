import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import HomeAfiliados from "../assets/HomeAfiliados.jpg";
import HomeServicios from "../assets/HomeServicios.jpg";

import Logo from "../assets/Logo.jpg";
const Cards = () => {
  return (
    <Row className="mt-4">
      {/* Primera tarjeta */}
      <Col lg={4} className="mb-4">
        <Card className="h-100 text-center shadow-sm border-0 rounded">
          <Card.Img
            variant="top"
            src={HomeAfiliados}
            alt="Descripción de la imagen"
            className="rounded-circle mx-auto mt-3"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Información Afiliados</Card.Title>
            <Card.Text>Toda la información legal</Card.Text>
            <Button variant="primary">Ver más</Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Segunda tarjeta con foto */}
      <Col lg={4} className="mb-4">
        <Card className="h-100 text-center shadow-sm border-0 rounded">
          <Card.Img
            variant="top"
            src={HomeServicios}
            alt="Descripción de la imagen"
            className="rounded-circle mx-auto mt-3"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Servicios</Card.Title>
            <Card.Text>
              Descubre los servicios y beneficios locales y nacionales
            </Card.Text>
            <Button variant="success">Descubrir</Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Tercera tarjeta */}
      <Col lg={4} className="mb-4">
        <Card className="h-100 text-center shadow-sm border-0 rounded">
          <Card.Img
            variant="top"
            src={Logo}
            className="rounded-circle mx-auto mt-3"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Nosotros</Card.Title>
            <Card.Text>
              Comunícate con nosotros para obtener más información o resolver
              tus dudas.
            </Card.Text>
            <Button variant="warning">Contáctanos</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Cards;
