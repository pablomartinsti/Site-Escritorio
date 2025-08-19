import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Contato from '../pages/Contato';
import BlogPage from '../pages/Blog';
import Sobre from '../pages/Sobre';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicosIndex from '../pages/Serviços';
import AberturaEmpresa from '../pages/Serviços/aberturaEmpresas';
import CertificadoDigital from '../pages/Serviços/certificadoDigital';
import ConsultoriaContabil from '../pages/Serviços/consultoriaContabil';
import ContabilidadeMensal from '../pages/Serviços/contabilidadeMensal';
import ImpostoDeRendaServico from '../pages/Serviços/impostoRenda';
import PlanejamentoTributarioServico from '../pages/Serviços/planejamentoTributario';

// 👇 NOVO
import BlogPost from '../pages/BlogPost';

import WhatsAppFloat from '../components/WhatsAppFloat';
import ScrollToTop from '../components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        {/* básicas */}
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />

        {/* serviços */}
        <Route path="/servicos" element={<ServicosIndex />} />
        <Route path="/servicos/abertura-de-empresas" element={<AberturaEmpresa />} />
        <Route path="/servicos/certificado-digital" element={<CertificadoDigital />} />
        <Route path="/servicos/consultoria-contabil" element={<ConsultoriaContabil />} />
        <Route path="/servicos/contabilidade-mensal" element={<ContabilidadeMensal />} />
        <Route path="/servicos/imposto-de-renda" element={<ImpostoDeRendaServico />} />
        <Route path="/servicos/planejamento-tributario" element={<PlanejamentoTributarioServico />} />

        {/* BLOG */}
        <Route path="/blog" element={<BlogPage />} />
        {/* 👇 NOVA ROTA */}
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* compat */}
        <Route path="/servico/abertura-de-empresa" element={<Navigate to="/servicos/abertura-de-empresas" replace />} />
        <Route path="/Serviços/*" element={<Navigate to="/servicos" replace />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <WhatsAppFloat
        phone="5534997624502"
        message="Olá! Vim pelo site e quero saber mais sobre a consultoria."
        bubbleText="Posso te ajudar agora? Chame no WhatsApp 🙂"
        showBubbleInitially={true}
        autoHideMs={4000}
      />
      <Footer />
    </Router>
  );
}
