import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// layout e util podem ficar estáticos se leves
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import ScrollToTop from '../components/ScrollToTop';

// PÁGINAS (lazy)
const Home = lazy(() => import('../pages/Home'));
const Contato = lazy(() => import('../pages/Contato'));
const Sobre = lazy(() => import('../pages/Sobre'));
const ServicosIndex = lazy(() => import('../pages/Servicos'));
const AberturaEmpresa = lazy(() => import('../pages/Servicos/aberturaEmpresas'));
const CertificadoDigital = lazy(() => import('../pages/Servicos/certificadoDigital'));
const ConsultoriaContabil = lazy(() => import('../pages/Servicos/consultoriaContabil'));
const ContabilidadeMensal = lazy(() => import('../pages/Servicos/contabilidadeMensal'));
const ImpostoDeRendaServico = lazy(() => import('../pages/Servicos/impostoRenda'));
const PlanejamentoTributarioServico = lazy(() => import('../pages/Servicos/planejamentoTributario'));

const BlogPage = lazy(() => import('../pages/Blog'));
const BlogPost = lazy(() => import('../pages/BlogPost'));

export default function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />

      {/* Suspense envolve as rotas para carregar chunks sob demanda */}
      <Suspense fallback={null}>
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

          {/* blog */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* compat */}
          <Route
            path="/servico/abertura-de-empresa"
            element={<Navigate to="/servicos/abertura-de-empresas" replace />}
          />
          <Route path="/Servicos/*" element={<Navigate to="/servicos" replace />} />

          {/* fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>

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
