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
import { Card, ListGroup } from "react-bootstrap";

const Turismo = () => {
  return (
    <div className="container mt-4">
      <h1 className="custom-card-title">Servicios de Turismo</h1>
      <Card className="shadow h-100 custom-card1">
        <Card.Body>
          <Card.Img
            variant="top"
            src="https://wallpapers.com/images/featured/fondo-de-pantalla-hd-de-playa-b8sncabhuqz0gxrc.jpg"
            alt="Imagen de turismo"
            className="card-img-custom"
          />
          <ListGroup className="mb-5">
            {/* Enlaces con URLs externas */}
            <ListGroup.Item action as="a" href="https://www.faecys.org.ar/hotel-de-la-provincias/" target="_blank" rel="noopener noreferrer">
              Hotel Buenos Aires
            </ListGroup.Item>
            <ListGroup.Item action as="a" href="https://www.faecys.org.ar/hotel-de-la-provincias/" target="_blank" rel="noopener noreferrer">
              Hotel Córdoba
            </ListGroup.Item>
            <ListGroup.Item action as="a" href="https://www.faecys.org.ar/hotel-uspallata/" target="_blank" rel="noopener noreferrer">
              Hotel Mendoza
            </ListGroup.Item>
          </ListGroup>
          <Card.Text className="text-white">
            En esta sección encontrarás toda la información sobre hoteles, destinos turísticos y ofertas exclusivas para nuestros afiliados.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Turismo;

