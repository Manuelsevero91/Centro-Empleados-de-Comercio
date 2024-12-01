// import React from "react";
// import "../Estilos/Adicionales.css"; // Archivo CSS para los estilos

// const Adicionales = () => {
//   return (
//     <div className="adicionales-page">
//       <h1 className="title">Adicionales a cobrar en tu sueldo</h1>
//       <div className="grid-container">
//         {/* Primera card */}
//         <div className="card">
//           <div className="card-content">
//             <h2>
//               Adicional manejo de dinero{" "}
//               <span>
//                 <i className="bi bi-hourglass"></i>
//               </span>
//             </h2>
//             <p>
//               Todos los empleados tienen derecho a cobrar un adicional de cajero mensualmente, siempre que esta tarea se haga de manera habitual.

//             </p>
//           </div>
//         </div>

//         {/* Segunda card */}
//         <div className="card">
//           <div className="card-content">
//             <h2>
//               Adicional por título{" "}
//               <span>
//                 <i className="bi bi-award"></i>
//               </span>
//             </h2>
//             <p>
//               Si tienes un título técnico o universitario, puedes acceder a este
//               beneficio según lo establecido por la normativa.
//             </p>
//           </div>
//         </div>

//         {/* Tercera card */}
//         <div className="card">
//           <div className="card-content">
//             <h2>
//               Adicional por zona{" "}
//               <span>
//                 <i className="bi bi-geo-alt"></i>
//               </span>
//             </h2>
//             <p>
//               Este adicional aplica a quienes trabajan en zonas con condiciones
//               desfavorables o de alto costo de vida.
//             </p>
//           </div>
//         </div>

//         {/* Cuarta card */}
//         <div className="card">
//           <div className="card-content">
//             <h2>
//               Adicional por productividad{" "}
//               <span>
//                 <i className="bi bi-bar-chart"></i>
//               </span>
//             </h2>
//             <p>
//               Este adicional recompensa el desempeño destacado del empleado,
//               basado en criterios de productividad.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Adicionales;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../Estilos/Adicionales.css"; // Custom styles (if needed)

const Adicionales = () => {
  return (
    <div className="adicionales-page container mt-5">
      <h1 className="title text-center mb-4 text-white">Adicionales a cobrar en tu sueldo</h1>
      <div className="row">
        {/* Primera card */}
        <div className="col-md-6 mb-4">
          <div className="card bg-secondary"> {/* Grey background */}
            <div className="card-body">
              <h2 className="card-title text-white">
                Adicional manejo de dinero
              </h2>
              <p className="card-text text-white">
                Los empleados que manejan dinero de forma habitual tienen derecho a cobrar el adicional de cajero mensualmente.
              </p>
            </div>
          </div>
        </div>

        {/* Segunda card */}
        <div className="col-md-6 mb-4">
          <div className="card bg-secondary"> {/* Grey background */}
            <div className="card-body">
              <h2 className="card-title text-white">
                Adicional vidrierista
              </h2>
              <p className="card-text text-white">
              Los empleados que realizan armado de vidriera en forma habitual tienen derecho a cobrar el adicional de vidrierista mensualmente.
              </p>
            </div>
          </div>
        </div>

        {/* Tercera card */}
        <div className="col-md-6 mb-4">
          <div className="card bg-secondary"> {/* Grey background */}
            <div className="card-body">
              <h2 className="card-title text-white">
                Adicional de chofer
              </h2>
              <p className="card-text text-white">
                Este adicional se aplica a quienes manejan vehículos de manera habitual para tareas inherentes a la empresa. Tanto para el chofer como para el ayudante de chofer.
              </p>
            </div>
          </div>
        </div>

        {/* Cuarta card */}
        <div className="col-md-6 mb-4">
          <div className="card bg-secondary"> {/* Grey background */}
            <div className="card-body">
              <h2 className="card-title text-white">
                Adicional xxxxxx
              </h2>
              <p className="card-text text-white">
                Este adicional recompensa el desempeño destacado del empleado, basado en criterios de productividad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adicionales;