import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../Estilos/Adicionales.css"; // Custom styles (if needed)
import "../Estilos/Licencias.css"; 
const Licencias = () => {
  return (
    <div className="licencias-page container mt-5">
      <h1 className="title text-center mb-4 text-white">Todas las licencias</h1>
      <div className="row">
        {/* Primera card */}
        <div className="col-md-6 mb-4">
          <div className="card bg-secondary"> {/* Grey background */}
            <div className="card-body">
              <h2 className="card-title text-white">
                Vacaciones
              </h2>
              <p className="card-text text-white">
                
              </p>
            </div>
          </div>
        </div>

        {/* Segunda card */}
        <div className="col-md-6 mb-4">
          <div className="card bg-secondary"> {/* Grey background */}
            <div className="card-body">
              <h2 className="card-title text-white">
                Por enfermedad
              </h2>
              <p className="card-text text-white">
              Por accidente de trabajo
              </p>
            </div>
          </div>
        </div>

        {/* Tercera card */}
        <div className="col-md-6 mb-4">
          <div className="card bg-secondary"> {/* Grey background */}
            <div className="card-body">
              <h2 className="card-title text-white">
              Por accidente de trabajo
              </h2>
              <p className="card-text text-white">
                
              </p>
            </div>
          </div>
        </div>

        {/* Cuarta card */}
        <div className="col-md-6 mb-4">
          <div className="card bg-secondary"> {/* Grey background */}
            <div className="card-body">
              <h2 className="card-title text-white">
               Otras
              </h2>
              <p className="card-text text-white">
              
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Licencias;