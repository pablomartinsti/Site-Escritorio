// src/pages/Serviços/certificado-digital.jsx
import { Helmet } from 'react-helmet-async';
import { useMemo } from 'react';
import ServicePage from '../../components/ServicePage';

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

export default function CertificadoDigital() {
  const benefits = useMemo(
    () => [
      {
        icon: <SvgSeguranca />,
        title: 'Segurança jurídica',
        text: 'Validade legal e criptografia forte, com conferência documental na validação por vídeo.'
      },
      {
        icon: <SvgRapidez />,
        title: '100% online e rápido',
        text: 'Sem deslocamentos: agendamento, validação e emissão em poucos passos.'
      },
      {
        icon: <SvgAtendimento />,
        title: 'Pronto para seus sistemas',
        text: 'Apoiamos a configuração do A1 para NF-e, eSocial e e-CAC.'
      }
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        question: 'Vocês emitem A1 e A3?',
        answer: 'Trabalhamos exclusivamente com o A1 (arquivo). O A3 usa token/cartão e não faz parte deste serviço.'
      },
      {
        question: 'O processo é 100% online?',
        answer: 'Sim. A validação é por videoconferência e você precisa da CNH digital (eCNH) em seu nome.'
      },
      {
        question: 'Qual a validade do A1?',
        answer: 'Em geral, 1 ano. Avisamos sobre a renovação e oferecemos suporte no processo.'
      },
      {
        question: 'Posso usar em NF-e, eSocial e e-CAC?',
        answer: 'Sim. Após a emissão, ajudamos a configurar o A1 para os sistemas que você utiliza.'
      }
    ],
    []
  );

  return (
    <>
      <Helmet>
        <title>Certificado Digital A1 Online em Uberlândia – Martir Contábil</title>
        <meta
          name="description"
          content="Emissão de certificado digital A1 100% online em Uberlândia. Validação por vídeo usando CNH digital e configuração para NF-e, e-CAC e eSocial."
        />
      </Helmet>

      <ServicePage
        title="Certificado Digital A1 em Uberlândia"
        subtitle="Certificado Digital A1"
        description="Emissão 100% online, validação por vídeo e suporte até a instalação."
        heroImage={{
          small: '/assets/certificado-digital-a1-300.webp',
          medium: '/assets/certificado-digital-a1-600.webp'
        }}
        heroAlt="Emissão de certificado digital A1 online em Uberlândia, Minas Gerais"
        aboutTitle="Como funciona a emissão online"
        aboutText="Fazemos a emissão do certificado digital A1 de forma 100% online. Você agenda, valida por videoconferência usando sua CNH digital e recebe o arquivo pronto para uso. Também configuramos o A1 nos sistemas que você utiliza."
        bullets={[
          'Emissão do certificado A1 (arquivo)',
          'Validação por videoconferência (CNH digital)',
          'Configuração para NF-e, eSocial e e-CAC',
          'Suporte pós-emissão e renovação'
        ]}
        benefits={benefits}
        ctaTitle="Precisa do seu certificado A1?"
        ctaText="Agende agora: validação online com CNH digital e emissão rápida para uso imediato."
        ctaHref="/contato"
        faqTitle="Dúvidas frequentes"
        faqs={faqs}
      />
    </>
  );
}
