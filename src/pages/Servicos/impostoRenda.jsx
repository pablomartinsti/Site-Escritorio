// src/pages/Serviços/imposto-de-renda.jsx
import { Helmet } from 'react-helmet-async';
import { useMemo } from 'react';
import ServicePage from '../../components/ServicePage';
import ImgIR from '../../assets/imposto-de-renda-600.webp';

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

export default function ImpostoDeRendaServico() {
  const benefits = useMemo(
    () => [
      {
        icon: <SvgSeguranca />,
        title: 'Precisão e conformidade',
        text: 'Declarações revisadas para evitar erros, multas e risco de malha fina.'
      },
      {
        icon: <SvgRapidez />,
        title: 'Pontualidade no prazo',
        text: 'Envio dentro do período oficial e acompanhamento do recibo de entrega.'
      },
      {
        icon: <SvgAtendimento />,
        title: 'Otimização de deduções',
        text: 'Análise de despesas dedutíveis e situações específicas para reduzir o imposto legalmente.'
      }
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        question: 'Quais documentos preciso enviar?',
        answer:
          'Informes de rendimentos, despesas dedutíveis (saúde, educação, previdência), bens e dívidas, extratos bancários e de investimentos, aluguéis e outros rendimentos.'
      },
      {
        question: 'Vocês fazem retificação?',
        answer: 'Sim. Retificamos declarações já enviadas, ajustamos informações e reenviamos conforme necessário.'
      },
      {
        question: 'Vocês atendem IRPF e demandas de PJ relacionadas?',
        answer: 'Sim. Cuidamos do IRPF (pessoa física) e de rotinas correlatas de pessoa jurídica quando aplicável.'
      },
      {
        question: 'Acompanham pendências e restituição?',
        answer: 'Sim. Monitoramos pendências, orientamos regularizações e acompanhamos o status da restituição.'
      }
    ],
    []
  );

  return (
    <>
      <Helmet>
        <title>Declaração do Imposto de Renda em Uberlândia – Martir Contábil</title>
        <meta
          name="description"
          content="Imposto de Renda (IRPF) em Uberlândia e região. Checklist de documentos, preenchimento e revisão, envio com recibo e acompanhamento de pendências e restituição."
        />
      </Helmet>

      <ServicePage
        title="Imposto de Renda em Uberlândia"
        subtitle="Imposto de Renda"
        description="Otimizamos deduções e evitamos erros para você pagar o justo, com tranquilidade."
        heroImage={ImgIR}
        heroAlt="Declaração de Imposto de Renda em Uberlândia, Minas Gerais"
        aboutTitle="Como conduzimos sua declaração"
        aboutText="Organizamos os documentos, preenchemos e revisamos sua declaração de Imposto de Renda. Em seguida, enviamos com recibo e acompanhamos eventuais pendências e a restituição."
        bullets={[
          'Checklist de documentos personalizado',
          'Preenchimento completo e revisão técnica',
          'Envio com recibo e acompanhamento',
          'Suporte em pendências e restituição'
        ]}
        benefits={benefits}
        ctaTitle="Fuja da correria do prazo"
        ctaText="Deixe seu IR com especialistas e evite dor de cabeça — atendimento em Uberlândia e região."
        ctaHref="/contato"
        faqTitle="Dúvidas frequentes"
        faqs={faqs}
      />
    </>
  );
}
