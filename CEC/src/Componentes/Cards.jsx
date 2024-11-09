import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import HomeAfiliados from "../assets/HomeAfiliados.jpg";
import HomeServicios from "../assets/HomeServicios.jpg";
import { Link } from "react-router-dom"

import Logo from "../assets/Logo.jpg";
const Cards = () => {
  return (
    <Row className="mt-4">

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
            <Link to="Informacion Afiliados">
              <Button variant="primary">Ver más</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>


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
            <Link to="/servicios">
              <Button variant="success">Descubrir</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>


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
            <Link to="/nosotros">
              <Button variant="warning">Contáctanos</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Cards;
