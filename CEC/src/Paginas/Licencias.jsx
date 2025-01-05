import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// import "../Estilos/Adicionales.css"; // Custom styles (if needed)
// import "../Estilos/Licencias.css";

const Licencias = () => {
  return (
    <div className="licencias-page container-fluid mt-1">
      <h1 className="text-center mb-2 text-white custom-title">
        Todas las licencias
      </h1>
      <div className="row">
        {/* Primera card */}
        <div className="col-md-6 mb-4">
          <div className="card bg-secondary h-100 custom-card">
            {" "}
            {/* Grey background */}
            <div className="card-body">
              <h2 className="card-title text-white">Vacaciones</h2>
              <ul className="card-text text-white">
                <li>
                  14 días corridos para empleados con una antigüedad de hasta 5
                  años.
                </li>
                <br />
                <li>
                  21 días corridos para empleados con una antigüedad de más de 5
                  años y hasta 10 años.
                </li>
                <br />
                <li>
                  28 días corridos para empleados con una antigüedad de más de
                  10 años y hasta 20 años.
                </li>
                <br />
                <li>
                  35 días corridos para empleados con una antigüedad de más de
                  20 años.
                </li>
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
              <h2 className="card-title text-white">Licencia por enfermedad</h2>
              <ul className="card-text text-white">
                <li>
                  La duración de la licencia depende de la antigüedad del
                  trabajador:
                  <ul>
                    <li>
                      Hasta 3 meses al año si la antigüedad es menor a 5 años
                    </li>
                    <li>
                      Hasta 6 meses al año si la antigüedad es mayor a 5 años
                    </li>
                  </ul>
                </li>
                <li>
                  Licencia por enfermedad de un familiar:
                  <ul>
                    <li>
                      Hasta 30 días de licencia sin goce de sueldo por
                      enfermedad de un familiar directo, cónyuge, padres o
                      hijos.
                    </li>
                  </ul>
                </li>
                <li>
                  Presentismo:
                  <ul>
                    <li>
                      El artículo 40 del CCT Nº 130/75 establece que el
                      presentismo no se pierde por gozar de una licencia legal o
                      convencional.
                    </li>
                  </ul>
                </li>
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
              <h2 className="card-title text-white">
                Por accidente de trabajo
              </h2>
              <ul className="card-text text-white">
                <li>
                  La duración de la licencia es el período que dure la
                  incapacidad laboral temporaria (ILT), que comienza desde la
                  primera manifestación invalidante del accidente y puede
                  extenderse: Hasta el alta médica. O hasta un máximo de 2 años
                  si no se declara una incapacidad permanente o definitiva.
                </li>
                <li>
                  Determinada por un médico de la ART y supervisada según la Ley
                  N.º 24.557.
                </li>
                <li>
                  La ART brinda atención médica, rehabilitación y determina la
                  incapacidad.
                </li>
                <li>
                  El trabajador sigue cobrando su salario habitual, pagado por
                  la ART.
                </li>
                <li>
                  Es importante informar inmediatamente al empleador sobre el
                  accidente para que lo reporte a la ART.
                </li>
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
              <h2 className="card-title text-white">Licencias adicionales</h2>
              <ul className="card-text text-white">
                <li>
                  Licencia por enfermedad de un familiar directo, cónyuge,
                  padres o hijos: hasta 30 días sin goce de sueldo
                </li>
                <li>
                  Licencia por exámenes: hasta 10 días por año para el nivel
                  medio y hasta 20 días por año para el nivel universitario
                </li>
                <li>Licencia por maternidad: 90 días remunerados</li>
                <li>
                  Licencia por donación de sangre: un día con goce de sueldo
                </li>
                <li>Licencia por mudanza: dos días</li>
                <li>
                  Licencia por casamiento de hijos: un día con goce de sueldo
                </li>
                <li>
                  Licencia por citaciones judiciales y de organismos públicos:
                  el tiempo que dure la citación o trámite con goce de sueldo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Licencias;
