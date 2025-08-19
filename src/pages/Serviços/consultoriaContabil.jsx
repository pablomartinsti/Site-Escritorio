// src/pages/Serviços/consultoria-assessoria-contabil.jsx
import { Helmet } from 'react-helmet-async';
import { useMemo } from 'react';
import ServicePage from '../../components/ServicePage';
import ImgConsultoria from '../../assets/consultoria-contabil.webp';

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

export default function ConsultoriaAssessoriaContabil() {
  const benefits = useMemo(
    () => [
      {
        icon: <SvgRapidez />,
        title: 'Decisão com dados',
        text: 'Indicadores e cenários para orientar preço, custos e metas com clareza.'
      },
      {
        icon: <SvgSeguranca />,
        title: 'Conformidade e eficiência',
        text: 'Enquadramento e rotinas alinhados à legislação, reduzindo riscos e retrabalho.'
      },
      {
        icon: <SvgAtendimento />,
        title: 'Acompanhamento próximo',
        text: 'Reuniões periódicas e suporte consultivo para evoluir processos e resultados.'
      }
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        question: 'Para quem é a consultoria e assessoria contábil?',
        answer:
          'Para empresas que querem transformar números em decisões: controle de custos, precificação, metas e planejamento.'
      },
      {
        question: 'Qual é a periodicidade do acompanhamento?',
        answer: 'Definimos conforme a necessidade: mensal ou trimestral, com reuniões e relatórios gerenciais.'
      },
      {
        question: 'O que eu preciso enviar?',
        answer:
          'Balancetes, DRE, extratos e informações de vendas/estoque. Ajudamos a organizar e padronizar as rotinas.'
      },
      {
        question: 'Qual a diferença para a contabilidade mensal?',
        answer:
          'A contabilidade mensal cumpre obrigações. A consultoria analisa os números e propõe melhorias e estratégias.'
      }
    ],
    []
  );

  return (
    <>
      <Helmet>
        <title>Consultoria Contábil em Uberlândia – Martir Contábil</title>
        <meta
          name="description"
          content="Consultoria e assessoria contábil para empresas em Uberlândia e região. Indicadores, planejamento, enquadramento e suporte para decisões seguras."
        />
      </Helmet>

      <ServicePage
        title="Consultoria Contábil para Empresas em Uberlândia"
        subtitle="Consultoria Contábil"
        description="Relatórios compreensíveis, reuniões periódicas e suporte para decisões."
        heroImage={ImgConsultoria}
        heroAlt="Consultoria e assessoria contábil para empresas em Uberlândia, Minas Gerais"
        aboutTitle="Como ajudamos na gestão contábil"
        aboutText="Transformamos dados contábeis em decisões: analisamos balancetes e DRE, construímos indicadores e cenários e orientamos enquadramento, custos, precificação e rotinas — com suporte consultivo contínuo."
        bullets={[
          'Análise de balancetes, DRE e fluxo de caixa',
          'Indicadores e painéis gerenciais',
          'Planejamento e enquadramento tributário',
          'Ajustes de processos e rotinas financeiras'
        ]}
        benefits={benefits}
        ctaTitle="Quer evoluir a gestão contábil?"
        ctaText="Conte com consultoria e assessoria para transformar números em decisões — atendimento em Uberlândia e região."
        ctaHref="/contato"
        faqTitle="Dúvidas frequentes"
        faqs={faqs}
      />
    </>
  );
}
