import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import "../Estilos/Carousel.css";
import CarouselFachada from "../assets/CarouselFachada.jpg";
import CarouselNoticias from "../assets/CarouselNoticias.webp";
import CarouselAfiliate from "../assets/CarouselAfiliate.jpg";
const CustomCarousel = () => {
  return (
    <Carousel interval={3000} pause="hover" controls={true} indicators={true}>
      {/* Primer slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouselFachada} // URL de ejemplo
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
          src={CarouselNoticias}
          alt="Segundo slide"
        />
        <Carousel.Caption>
          <h3>Noticias y novedades</h3>
          <p>Conoce las últimas novedades.</p>
          <Button variant="success">Ver Noticias</Button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Tercer slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouselAfiliate}  
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
