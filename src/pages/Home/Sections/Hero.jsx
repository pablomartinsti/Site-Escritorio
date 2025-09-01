import { Link } from 'react-router-dom';
import Button, { ButtonGroup } from '../../../components/Button';
import AnimatedInView from '../../../components/AnimatedInView';

import { HeroSection } from '../styles';
import { scrollToId } from '../../../utils/scroll';

export default function Hero() {
  return (
    <HeroSection as="section" aria-labelledby="hero-title">
      <picture className="hero-bg" aria-hidden="true">
        <img
          src="/contadora-escritorio-de-contabilidade-consultoria.webp"
          alt=""
          width="1280"
          height="720"
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      <div className="hero-content">
        <AnimatedInView className="hero-text" variant="fadeLeft">
          <h1 id="hero-title">Contabilidade em Uberlândia - MG</h1>
          <h2>
            Ofereça à sua empresa <br />o <span className="highlight-gold">cuidado e a excelência</span>
            <br />
            que ela merece.
          </h2>
          <p>
            Conte com soluções contábeis sob medida para trazer mais tranquilidade,
            <br />
            eficiência e resultados reais ao seu negócio.
            <br />
            Transforme a gestão da sua empresa com quem entende e valoriza você.
            <br />
          </p>

          <ButtonGroup className="hero-buttons" aria-label="Ações principais">
            <Button as={Link} to="/contato" variant="blue" size="lg" aria-label="Ir para a página de contato">
              Trocar de Contador
            </Button>

            <Button
              as="a"
              href="#services"
              variant="outlineLight"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                scrollToId('services');
              }}
            >
              Saiba Mais
            </Button>
          </ButtonGroup>
        </AnimatedInView>
      </div>
    </HeroSection>
  );
}
