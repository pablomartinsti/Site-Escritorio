// src/pages/Serviços/planejamento-tributario.jsx
import { Helmet } from 'react-helmet-async';
import { useMemo } from 'react';
import ServicePage from '../../components/ServicePage';
import ImgTributario from '../../assets/planejamento-tributario.webp';

/* ===== SVGs decorativos (aria-hidden) ===== */
const SvgRapidez = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" role="presentation" {...props}>
    <path d="M3 12h18M3 6h12M3 18h6" stroke="#f0c419" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const SvgSeguranca = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" role="presentation" {...props}>
    <path d="M12 3l9 4v6c0 5-3.8 9.4-9 10-5.2-.6-9-5-9-10V7l9-4z" stroke="#f0c419" strokeWidth="2" />
  </svg>
);
const SvgAtendimento = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" role="presentation" {...props}>
    <circle cx="12" cy="7" r="4" stroke="#f0c419" strokeWidth="2" />
    <path d="M5.5 21a6.5 6.5 0 0113 0" stroke="#f0c419" strokeWidth="2" />
  </svg>
);

export default function PlanejamentoTributarioServico() {
  const benefits = useMemo(
    () => [
      {
        icon: <SvgSeguranca />,
        title: 'Conformidade garantida',
        text: 'Estratégias alinhadas à legislação, com revisão técnica e segurança jurídica.'
      },
      {
        icon: <SvgRapidez />,
        title: 'Resultados mensuráveis',
        text: 'Economia tributária com simulações comparativas e implementação objetiva.'
      },
      {
        icon: <SvgAtendimento />,
        title: 'Acompanhamento contínuo',
        text: 'Monitoramos indicadores e ajustamos o plano conforme o crescimento do negócio.'
      }
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        question: 'Serve para qualquer porte?',
        answer:
          'Sim. A abordagem se adapta a ME, EPP e empresas de médio porte. O impacto costuma ser maior em Lucro Presumido e Lucro Real.'
      },
      {
        question: 'Posso mudar o regime a qualquer momento?',
        answer:
          'Há janelas legais e critérios específicos. Avaliamos o cenário e indicamos o melhor timing conforme a legislação aplicável.'
      },
      {
        question: 'Inclui revisão de enquadramento?',
        answer:
          'Sim. Revisamos CNAE, regime tributário, benefícios e oportunidades de crédito conforme as operações da empresa.'
      },
      {
        question: 'Vocês implementam as mudanças?',
        answer:
          'Sim. Conduzimos a migração, ajustamos rotinas fiscais e acompanhamos os resultados com relatórios periódicos.'
      }
    ],
    []
  );

  return (
    <>
      <Helmet>
        <title>Planejamento Tributário em Uberlândia – Martir Contábil</title>
        <meta
          name="description"
          content="Planejamento tributário para empresas em Uberlândia e região. Simulações de regime (Simples, Lucro Presumido e Lucro Real), revisão de CNAE e implementação com segurança jurídica."
        />
      </Helmet>

      <ServicePage
        title="Planejamento Tributário para Empresas em Uberlândia"
        subtitle="Planejamento Tributário"
        description="Avaliação fiscal, simulações e execução com segurança e clareza."
        heroImage={ImgTributario}
        heroAlt="Planejamento tributário para empresas em Uberlândia, Minas Gerais"
        aboutTitle="Como encontramos economia legal"
        aboutText="Mapeamos suas operações, simulamos cenários com Simples, Lucro Presumido e Lucro Real, revisamos CNAE e oportunidades de crédito e recomendamos a melhor estrutura. Implementamos as mudanças e monitoramos os resultados."
        bullets={[
          'Análise do regime e carga tributária atual',
          'Simulações: Simples, Lucro Presumido e Lucro Real',
          'Revisão de CNAE, benefícios e créditos',
          'Plano de implementação e acompanhamento'
        ]}
        benefits={benefits}
        ctaTitle="Quer pagar menos impostos com segurança?"
        ctaText="Solicite uma análise tributária do seu negócio em Uberlândia e região."
        ctaHref="/contato"
        faqTitle="Dúvidas frequentes"
        faqs={faqs}
      />
    </>
  );
}
