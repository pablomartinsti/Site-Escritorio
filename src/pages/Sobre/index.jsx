// src/pages/Sobre/index.jsx
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Container, Hero, Section } from './styles';
import img from '../../assets/sobre-martir-assessoria-contabil.webp';
import Cta from '../../components/Formulario';
import AnimatedInView from '../../components/AnimatedInView';
import Button from '../../components/Button';
import News from '../../components/News';

export default function Sobre() {
  return (
    <Container as="main" role="main">
      <Helmet>
        <title>Sobre a Martir Assessoria Contábil – Nossa história e propósito</title>
        <meta
          name="description"
          content="Conheça a história da Martir Assessoria Contábil. Atendimento humano, soluções contábeis estratégicas e foco no crescimento sustentável de empresas em Uberlândia e região. "
        />
        <link rel="canonical" href="https://martircontabil.com.br/sobre" />
      </Helmet>

      <Hero aria-labelledby="sobre-hero-heading">
        <AnimatedInView variant="fadeLeft">
          <div className="inner">
            <h1 id="sobre-hero-heading">Conheça nossa história!</h1>
          </div>
        </AnimatedInView>
      </Hero>

      <Section id="historia" aria-labelledby="sobre-historia-heading">
        <div className="inner">
          <div className="box-sobre">
            <AnimatedInView
              as="img"
              className="box-conteudo"
              variant="fadeDown"
              viewport={{ once: true, amount: 0.2 }}
              src={img}
              alt="Equipe da Martir Assessoria Contábil"
              loading="lazy"
              decoding="async"
            />

            <AnimatedInView as="div" className="box-conteudo" variant="fadeUp" viewport={{ once: true, amount: 0.2 }}>
              <h2 id="sobre-historia-heading">Compromisso com a sua tranquilidade financeira</h2>
              <p>
                Na <strong>Martir Assessoria Contábil</strong>, nosso propósito vai muito além de cuidar de números: nós
                ajudamos empresas e pessoas físicas a conquistarem{' '}
                <strong>segurança, organização e conformidade fiscal</strong> para crescerem de forma sustentável.
              </p>
              <p>
                Mesmo com apenas 2 anos de atuação no mercado, nossa fundadora e contadora possui{' '}
                <strong>mais de 14 anos de experiência</strong> em gestão financeira, tributos e planejamento
                estratégico para diversos segmentos.
              </p>
              <p>
                Somos especialistas em <strong>descomplicar a contabilidade</strong>, oferecendo atendimento próximo e
                soluções personalizadas que se adaptam à realidade de cada cliente.
              </p>

              <ul className="checklist">
                <li>Atendimento personalizado e humanizado</li>
                <li>Soluções contábeis eficientes e estratégicas</li>
                <li>Atualização constante sobre leis e regulamentações</li>
                <li>Compromisso com o crescimento do seu negócio</li>
                <li>Atendemos empresas e profissionais de diversos setores</li>
              </ul>

              <Button as={Link} to="/contato" variant="blue" size="md">
                Quero fazer parte dessa história
              </Button>
            </AnimatedInView>
          </div>

          <div className="box-cards" role="list" aria-label="Missão, Visão e Valores">
            <AnimatedInView variant="fadeLeft" className="card" role="listitem">
              <div className="icon-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <path d="M12 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" fill="none" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <h3>Missão</h3>
              <p>
                Prover soluções empresariais competitivas e de qualidade, visando à satisfação das partes interessadas,
                utilizando tecnologia, melhoria contínua e desenvolvimento humano.
              </p>
            </AnimatedInView>

            <AnimatedInView variant="fadeUp" className="card" role="listitem">
              <div className="icon-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" fill="none" stroke="white" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" fill="none" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <h3>Visão</h3>
              <p>Ser reconhecida como empresa de excelência em contabilidade e planejamento tributário no Brasil.</p>
            </AnimatedInView>

            <AnimatedInView variant="fadeRight" className="card" role="listitem">
              <div className="icon-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <path d="M3 7h18l-7 10H10L3 7z" fill="none" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <h3>Valores</h3>
              <p>
                Competência, profissionalismo, empreendedorismo, melhoria contínua, excelência no atendimento e
                compromisso com resultados.
              </p>
            </AnimatedInView>
          </div>
        </div>
      </Section>

      <Cta />

      <News />
    </Container>
  );
}
