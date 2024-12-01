import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Paginas/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Licencias from './Paginas/Licencias';
import Adicionales from './Paginas/Adicionales';
import Categorias from './Paginas/Categorias';
import Jubilacion from './Paginas/Jubilacion';
import Salud from './Paginas/Salud';
import Turismo from './Paginas/Turismo';
import Extras from './Paginas/Extras';
import CustomNavbar from './Componentes/NavBar';
import CustomInfo from './Paginas/Nosotros';
import Noticias from './Paginas/Noticias';
import CustomFooter from './Componentes/Footer';

function App() {


  return (

    <Router>
      <CustomNavbar />
      <div style={{ paddingTop: "50px" }}> 
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Licencias" element={<Licencias />} />
          <Route path="/Adicionales" element={<Adicionales />} />
          <Route path="/Categorias" element={<Categorias />} />
          <Route path="/Jubilacion" element={<Jubilacion />} />
          <Route path="/Salud" element={<Salud />} />
          <Route path="/Turismo" element={<Turismo />} />
          <Route path="/Extras" element={<Extras />} />
          <Route path="/Nosotros" element={<CustomInfo />} />
          <Route path="/Noticias" element={<Noticias />} />
        </Routes>
      </div>
      <CustomFooter />
    </Router>


  )
}

export default App;
