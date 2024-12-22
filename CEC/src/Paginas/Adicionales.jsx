import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../Estilos/Adicionales.css"; // Custom styles (if needed)
import "../Estilos/Cards.css"
const Adicionales = () => {
  return (
    <div className="adicionales-page container-fluid mt-1">
      <h1 className="title text-center mb-4 text-white">
        Adicionales a cobrar en tu sueldo
      </h1>
      <div className="row">
        {/* Primera card */}
        <div className="col-md-6 mb-4">
          <div className="card bg-secondary h-100 custom-card">
            {" "}
            {/* Grey background */}
            <div className="card-body">
              <h2 className="card-title text-white">
                Adicional manejo de dinero
              </h2>
              <p className="card-text text-white">
                Los empleados que manejan dinero de forma habitual tienen
                derecho a cobrar el adicional de cajero mensualmente. Éste es un
                monto fijo según la categoría de cajero (A, B o C)
              </p>
            </div>
          </div>
        </div>

        {/* Segunda card */}
        <div className="col-md-6 mb-4">
          <div className="card bg-secondary h-100 custom-card">
            {" "}
            {/* Grey background */}
            <div className="card-body">
              <h2 className="card-title text-white">Adicional vidrierista</h2>
              <p className="card-text text-white">
                Los empleados que realizan armado de vidriera en forma habitual
                tienen derecho a cobrar el adicional de vidrierista
                mensualmente. El porcentaje del adicional por armado de
                vidrieras es de 3,83% sobre el básico inicial de vendedor
              </p>
            </div>
          </div>
        </div>

        {/* Tercera card */}
        <div className="col-md-6 mb-4">
          <div className="card bg-secondary h-100 custom-card">
            {" "}
            {/* Grey background */}
            <div className="card-body">
              <h2 className="card-title text-white">Adicional de chofer</h2>
              <p className="card-text text-white">
                Este adicional se aplica a quienes manejan vehículos de manera
                habitual para tareas inherentes a la empresa. Tanto para el
                chofer como para el ayudante de chofer. El adicional en 2024 es
                de $45,07 por los primeros 100 km y $52,57 por los siguientes
                km. <br/> <br/>
                Si un empleado realiza tareas que exceden la
                jornada laboral máxima legal en distancias cortas (hasta 100
                km), también le corresponden horas extras y gastos de comida,
                desayuno o merienda.
              </p>
            </div>
          </div>
        </div>

        {/* Cuarta card */}
        {/* <div className="col-md-6 mb-4"> */}
        {/* <div className="card bg-secondary">  */}
        {/* <div className="card-body"> */}
        {/* <h2 className="card-title text-white">
                Adicional xxxxxx
              </h2> */}
        {/* <p className="card-text text-white">
                Este adicional recompensa el desempeño destacado del empleado, basado en criterios de productividad.
              </p> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Adicionales;
