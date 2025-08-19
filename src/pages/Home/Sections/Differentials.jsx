import { Fragment } from 'react';
import AnimatedInView from '../../../components/AnimatedInView';
import Button from '../../../components/Button';
import { DifferentialSection } from '../styles';
import { FiGlobe, FiShield, FiTrendingUp, FiUserCheck, FiZap } from 'react-icons/fi';

export default function Differentials() {
  const DIFFERENTIALS = [
    {
      icon: FiShield,
      title: 'Segurança Contábil e Fiscal',
      text: 'Fique tranquilo! Sua empresa sempre em dia com a legislação, evitando multas e problemas com o Fisco.\nConfiabilidade e transparência de verdade.',
      motion: 'fadeLeft'
    },
    {
      icon: FiUserCheck,
      title: 'Atendimento Humano e Personalizado',
      text: 'Aqui, cada cliente é único. Atendimento rápido, sem burocracia e com atenção especial até para pequenas empresas.',
      motion: 'fadeDown'
    },
    {
      icon: FiGlobe,
      title: 'Contabilidade Online e Presencial',
      text: 'Atendemos empresas de Uberlândia e de todo o Brasil, com soluções digitais que economizam seu tempo e facilitam sua rotina.\nSoluções para todos os perfis de empresa.',
      motion: 'fadeRight'
    },
    {
      icon: FiTrendingUp,
      title: 'Planejamento para Crescimento',
      text: 'Planejamento tributário estratégico para pagar menos impostos de forma legal, aumentando a lucratividade.',
      motion: 'fadeLeft'
    },
    {
      icon: FiZap,
      title: 'Processos Ágeis e Simplificados',
      text: 'Documentação digital e processos online para você focar no que importa: crescer.\nTecnologia para facilitar sua rotina.',
      motion: 'fadeUp'
    }
  ];
  return (
    <DifferentialSection as="section" id="Differential" aria-labelledby="diff-titulo">
      <AnimatedInView as="h2" id="diff-titulo" variant="fadeDown">
        Por que escolher a Martir Assessoria Contábil?
      </AnimatedInView>

      <div className="Differential-cards" role="list">
        {DIFFERENTIALS.map((d) => (
          <AnimatedInView key={d.title} className="Differential-card" role="listitem" variant={d.motion}>
            <div className="icon-badge" aria-hidden>
              <d.icon />
            </div>
            <h3>{d.title}</h3>
            {d.text.split('\n').map((line, idx) => (
              <p key={idx}>
                {line.includes('Planejamento tributário estratégico') ? (
                  <Fragment>
                    <span className="diff-highlight">Planejamento tributário estratégico</span> para pagar menos
                    impostos de forma legal, aumentando a lucratividade.
                  </Fragment>
                ) : (
                  line
                )}
              </p>
            ))}
          </AnimatedInView>
        ))}
      </div>

      <AnimatedInView as="p" className="cta-expectativa" variant="fadeUp">
        Pronto para transformar a gestão da sua empresa e sentir a diferença de uma contabilidade que realmente cuida do
        seu negócio?
      </AnimatedInView>

      <Button as="a" href="/contato" variant="blue" aria-label="Ir para a página de contato">
        Quero essa experiência para minha empresa!
      </Button>
    </DifferentialSection>
  );
}
