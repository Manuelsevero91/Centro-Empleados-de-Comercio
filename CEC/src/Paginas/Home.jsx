import React from 'react';
import CustomCarousel from '../Componentes/Carousel';
import Cards from '../Componentes/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="container mt-4">
      <CustomCarousel />
      <Cards />
    </div>
  );
};

export default Home;
