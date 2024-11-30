import React from "react";
import CustomCarousel from "../Componentes/Carousel";
// import Cards from "../Componentes/Cards";
import CustomNavbar from "../Componentes/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <CustomNavbar />

      <div className="container mt-4">
        <CustomCarousel />
        <div className="Home2"></div>
        {/* <Cards /> */}
      </div>
    </div>
  );
};

export default Home;
