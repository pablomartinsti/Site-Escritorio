import { Helmet } from 'react-helmet-async';
import { useMemo } from 'react';
import ServicePage from '../../components/ServicePage';

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

export default function EscrituracaoContabilFiscal() {
  const benefits = useMemo(
    () => [
      {
        icon: <SvgSeguranca />,
        title: 'Confiabilidade técnica',
        text: 'Escrituração e apuração com revisão e conformidade às normas contábeis e fiscais.'
      },
      {
        icon: <SvgRapidez />,
        title: 'Pontualidade em prazos',
        text: 'Obrigações acessórias e guias entregues dentro dos prazos legais, sem surpresas.'
      },
      {
        icon: <SvgAtendimento />,
        title: 'Visão gerencial',
        text: 'Relatórios claros para apoiar decisões: balancetes, DRE e indicadores mensais.'
      }
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        question: 'Atendem Simples, Lucro Presumido e Lucro Real?',
        answer: 'Sim. Adequamos a escrituração e a apuração às regras de cada regime tributário, sempre com revisão.'
      },
      {
        question: 'Enviam relatórios periódicos?',
        answer: 'Sim. Disponibilizamos balancetes, DRE e relatórios gerenciais mensais, além de relatórios sob demanda.'
      },
      {
        question: 'Cuidam de SPED e obrigações acessórias?',
        answer: 'Sim. ECD, ECF, DCTF e demais entregas fiscais no prazo, com conferências de consistência.'
      },
      {
        question: 'Como funciona o envio de documentos?',
        answer: 'O fluxo é digital. Organizamos tudo via plataforma e orientamos o envio mensal para não faltar nada.'
      }
    ],
    []
  );

  return (
    <>
      <Helmet>
        <title>Contabilidade Mensal em Uberlândia – Martir Contábil</title>
        <meta
          name="description"
          content="Contabilidade mensal em Uberlândia e região. Apuração de impostos, obrigações acessórias (ECD, ECF, DCTF) e relatórios gerenciais com pontualidade."
        />
      </Helmet>

      <ServicePage
        title="Contabilidade Mensal para Empresas em Uberlândia"
        subtitle="Contabilidade Mensal"
        description="Conformidade garantida, atendimento próximo e transparência."
        heroImage={{
          small: '/assets/contabilidade-mensal-300.webp',
          medium: '/assets/contabilidade-mensal-600.webp'
        }}
        heroAlt="Contabilidade mensal e rotina fiscal para empresas em Uberlândia, Minas Gerais"
        aboutTitle="Como mantemos sua empresa em dia"
        aboutText="Cuidamos da rotina contábil e fiscal da sua empresa: lançamentos, apuração de impostos e entrega das obrigações acessórias dentro dos prazos. Você acompanha tudo por relatórios claros para decidir com mais segurança."
        bullets={[
          'Classificação e lançamentos contábeis',
          'Apuração de tributos e emissão de guias',
          'ECD, ECF, DCTF e demais obrigações acessórias',
          'Balancetes, DRE e relatórios gerenciais'
        ]}
        benefits={benefits}
        ctaTitle="Deixe sua contabilidade organizada"
        ctaText="Conte com um time que cuida dos impostos e das obrigações no prazo — e entrega relatórios gerenciais para decisões mais seguras."
        ctaHref="/contato"
        faqTitle="Dúvidas frequentes"
        faqs={faqs}
      />
    </>
  );
}
