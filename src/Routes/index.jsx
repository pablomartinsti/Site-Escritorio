import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sobre from "../pages/Sobre";
import Serviços from "../pages/Serviços";
import AberturaEmpresa from "../pages/Serviços/AberturaEmpresa";
import PlanejamentoTributario from "../pages/Serviços/PlanejamentoTributario";
import EscrituracaoContabilFiscal from "../pages/Serviços/EscrituracaoContabilFiscal";
import DeclaracaoImpostoRenda from "../pages/Serviços/DeclaracaoImpostoRenda";
import ContabilidadeMensal from "../pages/Serviços/ContabilidadeMensal";
import RegularizacaoEmpresas from "../pages/Serviços/RegularizacaoEmpresas";
import EncerramentoAlteracaoEmpresas from "../pages/Serviços/EncerramentoAlteracaoEmpresas";
import ConsultoriaSuporteContabil from "../pages/Serviços/ConsultoriaSuporteContabil";
import EmissaoNotasFiscais from "../pages/Serviços/EmissaoNotasFiscais";
import Blog from "../pages/Blog";
import ImpostoDeRenda from "../pages/Blog/ImpostoDeRenda";
import RegimeTributario from "../pages/Blog/RegimeTributario";
import Tributario from "../pages/Blog/PlanejamentoTributario";

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
        <Route
          path="servico/planejamento-tributario"
          element={<PlanejamentoTributario />}
        />
        <Route
          path="servico/escrituracao-contabil-fiscal"
          element={<EscrituracaoContabilFiscal />}
        />
        <Route
          path="servico/declaracao-imposto-renda"
          element={<DeclaracaoImpostoRenda />}
        />
        <Route
          path="servico/contabilidade-mensal"
          element={<ContabilidadeMensal />}
        />
        <Route
          path="servico/regularizacao-empresas"
          element={<RegularizacaoEmpresas />}
        />
        <Route
          path="servico/encerramento-alteracao-empresas"
          element={<EncerramentoAlteracaoEmpresas />}
        />
        <Route
          path="servico/consultoria-suporte-contabil"
          element={<ConsultoriaSuporteContabil />}
        />
        <Route
          path="servico/emissao-notas-fiscais"
          element={<EmissaoNotasFiscais />}
        />

        <Route path="/blog" element={<Blog />} />
        <Route path="blog/imposto-de-renda" element={<ImpostoDeRenda />} />
        <Route path="blog/regime-tributario" element={<RegimeTributario />} />
        <Route path="blog/planejamento-tributario" element={<Tributario />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
