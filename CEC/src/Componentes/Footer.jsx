import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar estilos de Bootstrap

const CustomFooter = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top text-white">
      {/* Sección izquierda */}
      <div className="col-md-4 d-flex align-items-center">
        <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
      </div>

      {/* Sección central con ícono */}
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <svg className="bi" width="24" height="24">
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
        </li>
      </ul>

      {/* Sección derecha con enlaces de navegación */}
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">Features</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">Pricing</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">FAQs</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">About</a>
        </li>
      </ul>
    </footer>
  );
};

export default CustomFooter;
