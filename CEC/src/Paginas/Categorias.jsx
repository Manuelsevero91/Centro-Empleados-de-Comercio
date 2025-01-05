import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// import "../Estilos/Categorias.css"; // Custom styles (if needed)
// import "../Estilos/Cards.css";

const Categorias = () => {
  return (
    <div className="categorias-page container-fluid mt-1">
      <h1 className="text-center mb-2 text-white custom-title">
        Todas las categorías de empleados de comercio
      </h1>
      <div className="row justify-content-center">
        {/* Primera card */}
        <div className="col-md-6 mb-4">
          <div className="card bg-secondary h-100 custom-card">
            {" "}
            {/* Grey background */}
            <div className="card-body">
              <h2 className="card-title text-white">Personal de Maestranza y Servicios</h2>
              <ul className="card-text text-white">
                <li>Categoría A: Incluye tareas generales de limpieza y mantenimiento básico.</li>
                <li>Categoría B: Responsabilidades de limpieza que requieren mayor especialización o manejo de maquinaria específica.</li>
                <li>Categoría C: Supervisión de equipos de limpieza y coordinación de tareas de mantenimiento.</li>
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
              <h2 className="card-title text-white">Personal Administrativo</h2>
              <ul className="card-text text-white">
                <li>Categoría A: Tareas administrativas básicas, como archivo y atención al público.</li>
                <li>Categoría B: Funciones que implican manejo de sistemas informáticos y procesamiento de datos.</li>
                <li>Categoría C: Responsabilidades de coordinación administrativa y soporte a niveles superiores.</li>
                <li>Categoría D: Supervisión de personal administrativo y gestión de áreas específicas.</li>
                <li>Categoría E: Gerencia de departamentos con alta responsabilidad en la toma de decisiones.</li>
                <li>Categoría F: Dirección general con responsabilidad total sobre áreas administrativas y estratégicas.</li>
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
              <h2 className="card-title text-white">Ventas</h2>
              <ul className="card-text text-white">
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
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
              <h2 className="card-title text-white">Auxiliares</h2>
              <ul className="card-text text-white">
                <li>Auxiliares Generales: Asisten en diversas tareas operativas dentro del comercio.</li>
                <li>Categoría A: Tareas de apoyo general sin especialización.</li>
                <li>Categoría B: Funciones que requieren cierta especialización o experiencia.</li>
                <li>Categoría C: Responsabilidades que implican conocimientos técnicos específicos.</li>
                <li>Auxiliares Especiales: Realizan tareas que requieren habilidades técnicas o conocimientos especializados.</li>
                <li>Categoría A: Funciones técnicas de nivel inicial.</li>
                <li>Categoría B: Tareas técnicas avanzadas con mayor responsabilidad.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quinta card */}
        <div className="col-md-6 mb-4">
          <div className="card bg-secondary h-100 custom-card">
            {" "}
            {/* Grey background */}
            <div className="card-body">
              <h2 className="card-title text-white">Cajeros</h2>
              <ul className="card-text text-white">
                <li>Categoría A: Operación de cajas registradoras y atención al cliente en puntos de venta.</li>
                <li>Categoría B: Manejo de transacciones complejas y cierre de cajas.</li>
                <li>Categoría C: Supervisión de personal de caja y gestión de flujos de efectivo.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorias;