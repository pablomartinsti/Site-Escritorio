// src/pages/Sections/About.jsx
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import AnimatedInView from '../../../components/AnimatedInView';
import { AboutSection } from '../styles';

export default function About() {
  return (
    <AboutSection as="section" id="about" aria-labelledby="sobre-titulo">
      <div className="parallax-bg">
        <div className="about-img">
          <article className="about-content">
            <AnimatedInView as="h2" id="sobre-titulo" variant="fadeDown">
              Sobre a Martir Assessoria Contábil
            </AnimatedInView>

            <AnimatedInView as="p" variant="fadeUp">
              A Martir Assessoria Contábil nasceu para oferecer{' '}
              <span className="about-highlight">contabilidade com propósito e excelência</span> em Uberlândia e região.
            </AnimatedInView>

            <AnimatedInView as="p" variant="fadeUp">
              Com mais de <span className="about-highlight">14 anos de experiência</span> da nossa fundadora,
              priorizamos o <span className="about-highlight">atendimento humano</span> e o suporte verdadeiro a todos
              os clientes — inclusive aos pequenos negócios.
            </AnimatedInView>

            <AnimatedInView as="p" variant="fadeUp">
              Aqui, <span className="about-highlight">cada cliente é importante</span>. Oferecemos soluções contábeis
              personalizadas, atualizadas e estratégicas, sempre com ética, transparência e foco no{' '}
              <span className="about-highlight">crescimento sustentável</span> da sua empresa.
            </AnimatedInView>

            <AnimatedInView variant="fadeUp">
              <Button as={Link} to="/sobre" variant="gold">
                Saiba mais sobre a Martir
              </Button>
            </AnimatedInView>
          </article>
        </div>
      </div>
    </AboutSection>
  );
}
