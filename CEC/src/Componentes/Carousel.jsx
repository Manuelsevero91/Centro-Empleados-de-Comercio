import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

const CustomCarousel = () => {
  return (
    <Carousel interval={3000} pause="hover" controls={true} indicators={true}>
      {/* Primer slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"  // URL de ejemplo
          alt="Primer slide"
        />
        <Carousel.Caption>
          <h3>Bienvenidos al Centro de Empleados de Comercio</h3>
          <p>Descubre los beneficios y servicios que ofrecemos.</p>
          <Button variant="primary">Más Información</Button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Segundo slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"  // URL de ejemplo
          alt="Segundo slide"
        />
        <Carousel.Caption>
          <h3>Actividades y Eventos</h3>
          <p>Conoce los próximos eventos y talleres.</p>
          <Button variant="success">Ver Eventos</Button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Tercer slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"  // URL de ejemplo
          alt="Tercer slide"
        />
        <Carousel.Caption>
          <h3>Afíliate Hoy</h3>
          <p>Únete a nuestra comunidad de empleados de comercio.</p>
          <Button variant="warning">Afiliarse</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
