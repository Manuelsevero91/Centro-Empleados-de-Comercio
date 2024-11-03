import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

const Cards = () => {
  return (
    <Row className="mt-4">
      {/* Primera tarjeta */}
      <Col lg={4} className="mb-4">
        <Card className="h-100 text-center shadow-sm border-0 rounded">
          <Card.Img 
            variant="top" 
            src="https://via.placeholder.com/300x200" 
            className="rounded-circle mx-auto mt-3"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <Card.Body>
            <Card.Title>Información Afiliados</Card.Title>
            <Card.Text>
              Descubre los beneficios únicos que ofrecemos para nuestros afiliados.
            </Card.Text>
            <Button variant="primary">Ver más</Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Segunda tarjeta con foto */}
      <Col lg={4} className="mb-4">
        <Card className="h-100 text-center shadow-sm border-0 rounded">
          <Card.Img 
            variant="top" 
            src="https://via.placeholder.com/300x200/FFD700/000000?text=Beneficios"  // URL de la foto real
            className="rounded-circle mx-auto mt-3"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <Card.Body>
            <Card.Title>Servicios</Card.Title>
            <Card.Text>
              Aprovecha descuentos exclusivos en múltiples comercios y servicios.
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
            src="https://via.placeholder.com/300x200" 
            className="rounded-circle mx-auto mt-3"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <Card.Body>
            <Card.Title>Nosotros</Card.Title>
            <Card.Text>
              Comunícate con nosotros para obtener más información o resolver tus dudas.
            </Card.Text>
            <Button variant="warning">Contáctanos</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Cards;
