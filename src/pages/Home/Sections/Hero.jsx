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
          src="/contadora-1200.webp"
          srcSet="/contadora-480.webp 480w,
          /contadora-768.webp 768w,
          /contadora-1200.webp 1200w"
          sizes="(max-width: 600px) 480px,
         (max-width: 992px) 768px,
         1200px"
          alt=""
          width={1200}
          height={675}
          fetchPriority="high"
          decoding="async"
          style={{ objectFit: 'cover' }}
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
