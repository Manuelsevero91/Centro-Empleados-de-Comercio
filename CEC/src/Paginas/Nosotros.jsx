import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import NavBar from '../Componentes/NavBar';
// import 'bootstrap/dist/css/bootstrap.min.css';

const CustomInfo = () => {
  return (
    <>
      {/* Usa CustomNavbar para mantener la consistencia en todas las páginas */}
      <NavBar />
      
      <div className="container mt-4">
        {/* Contenedor de la información */}
        <Card className="mt-4 shadow">
          <div className="d-flex">
            {/* Imagen a la izquierda */}
            <Card.Img
              src="https://via.placeholder.com/200" // URL de la imagen de ejemplo
              alt="Imagen de la entidad"
              className="img-fluid m-4"
              style={{ width: '200px', height: 'auto' }}
            />
            
            {/* Contenido a la derecha */}
            <Card.Body>
              {/* Lista de autoridades */}
              <Card.Title>Autoridades</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Presidente: Juan Pérez</ListGroup.Item>
                <ListGroup.Item>Vicepresidente: Ana Martínez</ListGroup.Item>
                <ListGroup.Item>Secretario: Carlos López</ListGroup.Item>
                <ListGroup.Item>Tesorero: María González</ListGroup.Item>
              </ListGroup>
              
              {/* Párrafo de información */}
              <Card.Text className="mt-3">
                El Centro de Empleados de Comercio es una entidad comprometida con el bienestar y
                desarrollo de sus afiliados, ofreciendo una amplia gama de servicios y actividades
                para el crecimiento personal y profesional de todos los miembros.
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CustomInfo;

