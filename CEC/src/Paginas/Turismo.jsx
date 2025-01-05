// import React from "react";
// import { Card, ListGroup } from "react-bootstrap";

// const Turismo = () => {
//   return (
//     <div className="container mt-4">
//       <h1 className="custom-card-title">Servicios de Turismo</h1>
//       <Card className="shadow h-100 custom-card1">
//         <Card.Body>
//           <Card.Img
//             variant="top"
//             src="https://wallpapers.com/images/featured/fondo-de-pantalla-hd-de-playa-b8sncabhuqz0gxrc.jpg"
//             alt="Imagen de turismo"
//             className="card-img-custom"
//           />
//           <ListGroup className="mb-5">
//             <ListGroup.Item action href="#hotel1">
//               Hotel Buenos Aires
//             </ListGroup.Item>
//             <ListGroup.Item action href="#hotel2">
//               Hotel Córdoba
//             </ListGroup.Item>
//             <ListGroup.Item action href="#hotel3">
//               Hotel Mendoza
//             </ListGroup.Item>
//           </ListGroup>
//           <Card.Text className="text-white">
//             En esta sección encontrarás toda la información sobre hoteles, destinos turísticos y ofertas exclusivas para nuestros afiliados.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default Turismo;

import React from "react";


const Turismo = () => {
  return (
    <div className="turismo-page container-fluid mt-1">
      <h1 className="text-center mb-2 text-white custom-title">
      Turismo
      </h1>
      <div className="row">
        {/* Primera card */}
        <div className="col-md-6 mb-4">
          <div className="card bg-secondary h-100 custom-card">
            <div className="card-body">
              <h2 className="card-title text-white">Hoteles Propios</h2>
              <ul className="card-text text-white">
                <li>Hotel Buenos Aires</li>
                <li>Descuentos especiales para afiliados.</li>
                <li>Asesoramiento personalizado.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Segunda card */}
        <div className="col-md-6 mb-4">
          <div className="card bg-secondary h-100 custom-card">
            <div className="card-body">
              <h2 className="card-title text-white">Excursiones</h2>
              <ul className="card-text text-white">
                <li>Excursiones locales y regionales.</li>
                <li>Guías turísticos especializados.</li>
                <li>Actividades recreativas y culturales.</li>
              </ul>
            </div>
          </div>
        </div>
{/* 
        Tercera card
        <div className="col-md-6 mb-4">
          <div className="card bg-secondary h-100 custom-card">
            <div className="card-body">
              <h2 className="card-title text-white">Alojamientos</h2>
              <ul className="card-text text-white">
                <li>Hoteles y hostales con tarifas preferenciales.</li>
                <li>Reservas en línea.</li>
                <li>Atención al cliente 24/7.</li>
              </ul>
            </div>
          </div>
        </div>

 
        <div className="col-md-6 mb-4">
          <div className="card bg-secondary h-100 custom-card">
            <div className="card-body">
              <h2 className="card-title text-white">Transporte</h2>
              <ul className="card-text text-white">
                <li>Descuentos en pasajes aéreos y terrestres.</li>
                <li>Alquiler de vehículos.</li>
                <li>Traslados y tours organizados.</li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Turismo;
