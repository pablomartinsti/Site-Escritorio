import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sobre from "../pages/Sobre";
import Serviços from "../pages/Serviços";
import AberturaEmpresa from "../pages/Serviços/AberturaEmpresa";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servico" element={<Serviços />} />
        <Route
          path="servico/abertura-de-empresa"
          element={<AberturaEmpresa />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
