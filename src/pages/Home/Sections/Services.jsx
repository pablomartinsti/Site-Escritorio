import Card from '../../../components/Card';
import AnimatedInView from '../../../components/AnimatedInView';
import { ServiceSection } from '../styles';

export default function Services() {
  const servicesData = [
    {
      title: 'Abertura de Empresas',
      description:
        'Legalize sua empresa em Uberlândia com total suporte em documentação, registro e orientação para evitar burocracias.',
      img: {
        small: '/assets/abertura-empresas-300.webp',
        medium: '/assets/abertura-empresas-600.webp'
      },
      link: '/servicos/abertura-de-empresas',
      motion: 'fadeLeft'
    },
    {
      title: 'Contabilidade Mensal',
      description:
        'Mantenha impostos e obrigações no prazo, com escrituração confiável e relatórios claros para decisões seguras.',
      img: {
        small: '/assets/contabilidade-mensal-300.webp',
        medium: '/assets/contabilidade-mensal-600.webp'
      },
      link: '/servicos/contabilidade-mensal',
      motion: 'fadeDown'
    },
    {
      title: 'Planejamento Tributário',
      description:
        'Reduza a carga tributária com simulações e execução seguras, alinhadas à lei, para aumentar a eficiência do seu negócio.',
      img: {
        small: '/assets/planejamento-tributario-300.webp',
        medium: '/assets/planejamento-tributario-600.webp'
      },
      link: '/servicos/planejamento-tributario',
      motion: 'fadeRight'
    },
    {
      title: 'Consultoria Contábil',
      description:
        'Analisamos números e indicadores, estruturando planejamento financeiro e contábil para decisões mais seguras.',
      img: {
        small: '/assets/consultoria-contabil-300.webp',
        medium: '/assets/consultoria-contabil-600.webp'
      },
      link: '/servicos/consultoria-contabil',
      motion: 'fadeLeft'
    },
    {
      title: 'Imposto de Renda',
      description:
        'Declaração de IRPF e rotinas de PJ com revisão técnica, aproveitando deduções legais e acompanhando de restituição.',
      img: {
        small: '/assets/imposto-de-renda-300.webp',
        medium: '/assets/imposto-de-renda-600.webp'
      },
      link: '/servicos/imposto-de-renda',
      motion: 'fadeUp'
    },
    {
      title: 'Certificado Digital',
      description:
        'Emita seu certificado digital A1 100% online, com validação por vídeo via CNH digital e configuração para NF-e e e-CAC.',
      img: {
        small: '/assets/certificado-digital-a1-300.webp',
        medium: '/assets/certificado-digital-a1-600.webp'
      },
      link: '/servicos/certificado-digital',
      motion: 'fadeRight'
    }
  ];
  return (
    <ServiceSection as="section" id="services" aria-labelledby="servicos-titulo">
      <AnimatedInView as="h2" id="servicos-titulo" className="service-title" variant="fadeDown">
        Soluções contábeis
      </AnimatedInView>

      <AnimatedInView as="p" className="service-description" variant="fadeDown">
        Soluções contábeis completas e personalizadas para empresas e profissionais de Uberlândia e região.
      </AnimatedInView>

      <ul className="service-cards" role="list">
        {servicesData.map((s, idx) => (
          <AnimatedInView
            key={s.link}
            as="li"
            role="listitem"
            variant={s.motion ?? ['fadeLeft', 'fadeDown', 'fadeRight'][idx % 3]}
          >
            <Card title={s.title} description={s.description} img={s.img} link={s.link} />
          </AnimatedInView>
        ))}
      </ul>
    </ServiceSection>
  );
}
