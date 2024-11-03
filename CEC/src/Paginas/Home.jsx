import React from 'react';
import CustomCarousel from '../Componentes/Carousel';
import CustomNavbar from '../Componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <CustomNavbar />
      
      {/* Contenido principal con carrusel */}
      <div className="container mt-4">
        <CustomCarousel />
      </div>
      
      {/* Agrega aquí Cards y Footer cuando estén listos */}
    </div>
  );
};

export default Home;