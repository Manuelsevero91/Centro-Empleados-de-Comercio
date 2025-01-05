import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Extras = () => {
  return (
    <div className="container mt-4">
      <h1 className="custom-card-title">Servicios Extras</h1>
      <Card className="shadow h-100 custom-card1">
        <Card.Body>
          <Card.Img
            variant="top"
            src="https://wallpapers.com/images/featured/fondo-de-pantalla-hd-de-playa-b8sncabhuqz0gxrc.jpg"
            alt="Imagen de extras"
            className="card-img-custom"
          />
          <ListGroup className="mb-5">
            <ListGroup.Item>Descuentos en comercios</ListGroup.Item>
            <ListGroup.Item>Entrega de útiles escolares</ListGroup.Item>
            <ListGroup.Item>Consultorios médicos</ListGroup.Item>
            <ListGroup.Item>Subsidios por nacimiento</ListGroup.Item>
            <ListGroup.Item>Subsidios por casamiento</ListGroup.Item>
            <ListGroup.Item>Subsidio por fallecimiento</ListGroup.Item>
            <ListGroup.Item>Espacio para eventos</ListGroup.Item>
            <ListGroup.Item>Convenios con gimnasio</ListGroup.Item>
          </ListGroup>
          <Card.Text className="text-white">
            Descubre todos los beneficios extras que tenemos para ti, como descuentos, subsidios y más.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Extras;
