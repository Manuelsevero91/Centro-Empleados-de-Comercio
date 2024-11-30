import React from 'react';
import { Card, Button } from 'react-bootstrap';
import NavBar from '../Componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Servicios = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <h1>Servicios</h1>
        <Card className="mt-4 shadow">
          <Card.Body>
            <Card.Title>Beneficios para Afiliados</Card.Title>
            <Card.Text>
              Ofrecemos una variedad de servicios para nuestros afiliados, incluyendo asesoría legal,
              acceso a talleres de formación, y programas de salud.
            </Card.Text>
            <Button variant="primary">Más Información</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Servicios;
