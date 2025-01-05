// import React from "react";
// import { Card, Row, Col, Button } from "react-bootstrap";
// import HomeAfiliados from "../assets/HomeAfiliados.jpg";
// import HomeServicios from "../assets/HomeServicios.jpg";
// import "../Estilos/Cards.css";
// import Logo from "../assets/Logo.jpg";
// import { Link } from "react-router-dom";

// const Cards = () => {
//   return (
//     <Row className="mt-4">
//       {/* Primera tarjeta */}
//       <Col lg={4} className="mb-4">
//         <Card className="h-100 text-center border-0 rounded custom-card">
//           <Card.Img
//             variant="top"
//             src={HomeAfiliados}
//             alt="Descripción de la imagen"
//             className="rounded-circle mx-auto mt-4"
//             style={{ width: "300px", height: "300px", objectFit: "cover" }}
//           />
//           <Card.Body>
//             <Card.Title className="custom-card-title">
//               Información Afiliados
//             </Card.Title>
//             <h4 class="text-white small-title">Toda la información legal que necesitás saber</h4>
//             <Link to="Información Afiliados">
//               <Button variant="primary">Ver más</Button>
//             </Link>
//           </Card.Body>
//         </Card>
//       </Col>

//       {/* Segunda tarjeta con foto */}
//       <Col lg={4} className="mb-4">
//         <Card className="h-100 text-center  border-0 rounded custom-card">
//           <Card.Img
//             variant="top"
//             src={HomeServicios}
//             alt="Descripción de la imagen"
//             className="rounded-circle mx-auto mt-4"
//             style={{ width: "300px", height: "300px", objectFit: "cover" }}
//           />
//           <Card.Body>
//             <Card.Title className="custom-card-title">Servicios</Card.Title>
//             {/* <h4 class="text-white small-title">Turismo</h4>
//             <h4 class="text-white small-title">Salud</h4>
//             <h4 class="text-white small-title">Extras</h4> */}
//             <Link to="/servicios">
//               <Button variant="success">Descubrir</Button>
//             </Link>
//           </Card.Body>
//         </Card>
//       </Col>

//       {/* Tercera tarjeta */}
//       <Col lg={4} className="mb-4">
//         <Card className="h-100 text-center border-0 rounded custom-card">
//           <Card.Img
//             variant="top"
//             src={Logo}
//             className="rounded-circle mx-auto mt-4"
//             style={{ width: "300px", height: "300px", objectFit: "cover" }}
//           />
//           <Card.Body>
//             <Card.Title className="custom-card-title">Nosotros</Card.Title>
//             <h4 class="text-white small-title">
//               Comunícate con nosotros para obtener más información o resolver
//               tus dudas.
//             </h4>
//             <Link to="/nosotros">
//               <Button variant="warning">Contáctanos</Button>
//             </Link>
//           </Card.Body>
//         </Card>
//       </Col>
//     </Row>
//   );
// };

// export default Cards;
