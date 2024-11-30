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






function App() {


  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path ="/Licencias" element={<Licencias />} />
      <Route path ="/Adicionales" element={<Adicionales />} />
      <Route path ="/Categorias" element={<Categorias />} />
      <Route path ="/Jubilacion" element={<Jubilacion />} />
      <Route path ="/Salud" element={<Salud />} />
      <Route path ="/Turismo" element={<Turismo />} />
      <Route path ="/Extras" element={<Extras />} />
      </Routes>

    </>
  )
}

export default App;
