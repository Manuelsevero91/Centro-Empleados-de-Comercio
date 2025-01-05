import React from 'react';
import { Card, Button } from 'react-bootstrap';
import NavBar from '../Componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const InformacionAfiliados = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-4 custom-container">
        <h1>Información para Afiliados</h1>
        <Card className="mt-4 shadow">
          <Card.Body>
            <Card.Title>¿Qué es un Afiliado?</Card.Title>
            <Card.Text>
              Ser afiliado significa tener acceso a un conjunto de servicios y beneficios diseñados
              para el bienestar de nuestros miembros. Conoce tus derechos y obligaciones como afiliado.
            </Card.Text>
            <Button variant="primary">Más Información</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default InformacionAfiliados;
