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

export default function AberturaEmpresa() {
  const benefits = useMemo(
    () => [
      {
        icon: <SvgRapidez />,
        title: 'Abertura ágil e sem burocracia',
        text: 'Processo integrado com JUCEMG, CNPJ e inscrições fiscais para iniciar suas atividades mais rápido no Triângulo Mineiro.'
      },
      {
        icon: <SvgSeguranca />,
        title: 'Segurança jurídica e fiscal',
        text: 'Garantimos conformidade legal, contratos e licenças, evitando riscos e autuações futuras.'
      },
      {
        icon: <SvgAtendimento />,
        title: 'Atendimento próximo e personalizado',
        text: 'Orientação prática sobre CNAE, natureza jurídica e regime tributário, adequada ao seu modelo de negócio.'
      }
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        question: 'Quanto tempo leva para abrir uma empresa em Uberlândia?',
        answer:
          'Normalmente concluímos em poucos dias úteis. O prazo exato varia conforme natureza jurídica, CNAE e exigências de licenças municipais ou estaduais.'
      },
      {
        question: 'Quais documentos preciso para abrir uma empresa?',
        answer:
          'RG e CPF dos sócios, comprovantes de endereço, dados do local (se houver), atividades (CNAE) e definição do capital social. Nós preparamos todos os formulários e protocolos.'
      },
      {
        question: 'Vocês ajudam a escolher o regime tributário?',
        answer:
          'Sim. Analisamos Simples Nacional, Lucro Presumido e Lucro Real conforme faturamento previsto, margens e CNAE, para reduzir a carga tributária com segurança.'
      },
      {
        question: 'É possível fazer todo o processo online?',
        answer:
          'Grande parte é digital: coleta de dados, assinatura eletrônica e protocolos. Orientamos quando for necessária presença física ou reconhecimento de firma.'
      },
      {
        question: 'Vocês cuidam de alvarás e licenças?',
        answer:
          'Sim. Realizamos o mapeamento e a obtenção de alvarás, licenças sanitárias e ambientais, conforme as regras do município e do estado de Minas Gerais.'
      }
    ],
    []
  );

  return (
    <>
      <Helmet>
        <title>Abertura de Empresa em Uberlândia – Martir Assessoria Contábil</title>
        <meta
          name="description"
          content="Abertura e legalização de empresas em Uberlândia e região. Do CNPJ às licenças, cuidamos de todo o processo com agilidade e segurança."
        />
      </Helmet>

      <ServicePage
        title="Abertura de Empresa em Uberlândia – MG"
        subtitle="Abertura de Empresa"
        description="Abertura simplificada rapidez, segurança e acompanhamento."
        heroImage={{
          small: '/assets/abertura-empresas-300.webp',
          medium: '/assets/abertura-empresas-600.webp'
        }}
        heroAlt="Abertura e legalização de empresas em Uberlândia, Minas Gerais"
        heroAsBackground={true}
        aboutTitle="Como ajudamos você a abrir sua empresa do jeito certo"
        aboutText="A Martir Assessoria Contábil realiza abertura e legalização de empresas em Uberlândia, Triângulo Mineiro e outras cidades de Minas Gerais.
        Cuidamos de cada etapa: registro na Junta Comercial de Minas Gerais (JUCEMG), emissão do CNPJ, inscrições fiscais e obtenção de alvarás e licenças.
        Tudo para que seu negócio comece sem burocracia, com segurança jurídica e a melhor estratégia tributária."
        bullets={[
          'Registro completo: JUCEMG + CNPJ',
          'Inscrição estadual e inscrição municipal',
          'Obtenção de alvarás e licenças',
          'Planejamento tributário: Simples Nacional, Lucro Presumido ou Lucro Real',
          'Definição de CNAE e enquadramento ideais para o seu ramo'
        ]}
        benefits={benefits}
        ctaTitle="Pronto para abrir sua empresa em Uberlândia?"
        ctaText="Converse agora com um especialista e receba um plano claro para abertura e legalização do seu negócio em Uberlândia e região."
        ctaHref="/contato"
        faqTitle="Dúvidas frequentes sobre abertura de empresa"
        faqs={faqs}
      />
    </>
  );
}
