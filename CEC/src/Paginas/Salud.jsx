import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Salud = () => {
  return (
    <div className="container mt-4">
      <h1 className="custom-card-title">Servicios de Salud</h1>
      <Card className="shadow h-100 custom-card1">
        <Card.Body>
          <Card.Img
            variant="top"
            src="https://img.freepik.com/fotos-premium/diversidad-atencion-medica-manos-medicos-asociacion-trabajo-equipo-exito-medicina-apoyo-motivacion-trabajadores-medicos-gesto-mano-mision-ayuda-solidaria-objetivos-colaboracion_590464-153584.jpg"
            alt="Imagen de salud"
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
          <Card.Text className="text-white">
            Aquí encontrarás los servicios de salud que ofrecemos, desde descuentos hasta programas especiales para toda la familia.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Salud;
