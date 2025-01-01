import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../Estilos/Salud.css"; // Custom styles (if needed)

const Salud = () => {
  return (
    <div className="salud-page container-fluid mt-1">
      <h1 className="title text-center mb-2 text-white custom-title">
        Servicios de Salud
      </h1>
      <div className="row">
        {/* Primera card */}
        <div className="col-md-6 mb-4">
          <div className="card bg-secondary h-100 custom-card">
            {" "}
            {/* Grey background */}
            <div className="card-body">
              <h2 className="card-title text-white">Consultas Médicas</h2>
              <ul className="card-text text-white">
                <li>Consultas generales y especializadas.</li>
                <li>Atención de urgencias y emergencias.</li>
                <li>Seguimiento de enfermedades crónicas.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Segunda card */}
        <div className="col-md-6 mb-4">
          <div className="card bg-secondary h-100 custom-card">
            {" "}
            {/* Grey background */}
            <div className="card-body">
              <h2 className="card-title text-white">Exámenes Médicos</h2>
              <ul className="card-text text-white">
                <li>Exámenes de laboratorio.</li>
                <li>Radiografías y ecografías.</li>
                <li>Chequeos médicos completos.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tercera card */}
        <div className="col-md-6 mb-4">
          <div className="card bg-secondary h-100 custom-card">
            {" "}
            {/* Grey background */}
            <div className="card-body">
              <h2 className="card-title text-white">Vacunación</h2>
              <ul className="card-text text-white">
                <li>Vacunas para niños y adultos.</li>
                <li>Campañas de vacunación estacionales.</li>
                <li>Vacunas obligatorias y recomendadas.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cuarta card */}
        <div className="col-md-6 mb-4">
          <div className="card bg-secondary h-100 custom-card">
            {" "}
            {/* Grey background */}
            <div className="card-body">
              <h2 className="card-title text-white">Servicios Adicionales</h2>
              <ul className="card-text text-white">
                <li>Rehabilitación y fisioterapia.</li>
                <li>Atención psicológica.</li>
                <li>Programas de nutrición y dietética.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salud;