import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar estilos de Bootstrap
import "../Estilos/Footer.css"; // Importar estilos personalizados
import LogoPixelia from "../assets/LogoPixelia.jpg"; // Asegúrate de que la ruta a tu logo sea correcta

const CustomFooter = () => {
  return (
    <footer className="footer py-3 my-4 border-top">
      <div className="container">
        <div className="row justify-content-center">
          {/* Información para el afiliado */}
          <div className="col-md-3 text-left ">
            <h5 className="text-body-secondary">Información para el afiliado</h5>
            <ul className="list-unstyled">
              <li><a href="/licencias" className="nav-link text-body-secondary">Licencias</a></li>
              <li><a href="/adicionales" className="nav-link text-body-secondary">Adicionales</a></li>
              <li><a href="/categorias" className="nav-link text-body-secondary">Categorías</a></li>
              <li><a href="/jubilacion" className="nav-link text-body-secondary">Jubilación</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="col-md-2 text-left ">
            <h5 className="text-body-secondary">Servicios</h5>
            <ul className="list-unstyled">
              <li><a href="/salud" className="nav-link text-body-secondary">Salud</a></li>
              <li><a href="/turismo" className="nav-link text-body-secondary">Turismo</a></li>
              <li><a href="/extras" className="nav-link text-body-secondary">Extras</a></li>
            </ul>
          </div>

          {/* Cómo afiliarse */}
          <div className="col-md-2 text-left ">
            <h5 className="text-body-secondary">Cómo afiliarse</h5>
            
          </div>
       
      

      {/* Marca de desarrolladora */}
      <div className="col-md-3 text-center ">
        <span className="text-body-secondary">Desarrollado por </span>
        <img src={LogoPixelia} alt="Logo" className="footer-logo" />
      </div>
      </div>
      </div>
    </footer>
  );
};

export default CustomFooter;