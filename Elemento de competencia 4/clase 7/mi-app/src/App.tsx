import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Destino from "./pages/Destino";
import Promociones from "./pages/Promociones";

import './index.css';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destino" element={<Destino />} />
        <Route path="/promociones" element={<Promociones />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;