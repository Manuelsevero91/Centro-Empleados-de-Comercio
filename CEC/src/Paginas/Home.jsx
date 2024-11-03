import React from 'react';
import CustomCarousel from '../Componentes/Carousel';

import Cards from '../Componentes/Cards';

import CustomNavbar from '../Componentes/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (

    <div className="container mt-4">
      <CustomCarousel />
      <Cards />

    <div>
      {/* Navbar */}
      <CustomNavbar />
      
      {/* Contenido principal con carrusel */}
      <div className="container mt-4">
        <CustomCarousel />
      </div>
      
      {/* Agrega aquí Cards y Footer cuando estén listos */}

    </div>
    </div>
  );
};

export default Home;