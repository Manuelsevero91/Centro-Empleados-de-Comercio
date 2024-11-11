import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Paginas/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nosotros from './Paginas/Nosotros'
import Servicios from './Paginas/Servicios'
import Afiliados from './Paginas/Afiliados'


function App() {
 

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path ="/Nosotros" element={<Nosotros />} />
      <Route path ="/Informacion Afiliados" element={<Afiliados />} />
      <Route path ="/Servicios" element={<Servicios />} />
      </Routes>
      
    </>
  )
}

export default App;
