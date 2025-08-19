// components/ServicePage/index.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';
import AnimatedInView from '../AnimatedInView';
import { Container, PageHeader, Section, BenefitsWrapper, CTASection, FAQWrapper } from './styles';

import { variants as motionVariants, listStagger, listItem } from '../../utils/motionConfig';

export default function ServicePage({
  title,
  subtitle,
  description,
  heroImage,
  heroAlt,
  aboutTitle = 'Como funciona',
  aboutText,
  bullets = [],
  benefits = [],
  ctaTitle,
  ctaText,
  ctaHref = '/contato',
  faqTitle = 'Dúvidas Frequentes',
  faqs = []
}) {
  const [open, setOpen] = useState(null);

  return (
    <>
      {/* HERO */}
      <PageHeader className="bg-hero">
        <Container className="hero-center">
          <AnimatedInView className="hero-text" variant="fadeLeft" viewport={{ once: true, amount: 0.2 }}>
            <h1 className="sr-only">{title}</h1>
            <h2 className="hero-title">{subtitle}</h2>
            {description && <p className="hero-lead">{description}</p>}

            <div className="hero-actions">
              <Button as={Link} to={ctaHref} variant="gold" size="md">
                Fale com um especialista
              </Button>
            </div>
          </AnimatedInView>
        </Container>
      </PageHeader>

      <main id="conteudo-principal">
        {/* Sobre o serviço */}
        <Section id="sobre-servico" aria-labelledby="sobre-title">
          <Container className="grid">
            <AnimatedInView className="text-content" variant="fadeUp" viewport={{ once: true, amount: 0.2 }}>
              <h2 id="sobre-title">{aboutTitle}</h2>

              {aboutText && <p>{aboutText}</p>}

              {bullets.length > 0 && (
                <ul className="feature-list">
                  {bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}

              <Button as={Link} to={ctaHref} variant="blue" size="md">
                Quero falar com um especialista
              </Button>
            </AnimatedInView>

            <AnimatedInView
              as="figure"
              className="image-content"
              variant="fadeDown"
              viewport={{ once: true, amount: 0.2 }}
            >
              <img src={heroImage} alt={heroAlt} width={800} height={560} loading="lazy" decoding="async" />
            </AnimatedInView>
          </Container>
        </Section>

        {/* Benefícios */}
        {benefits.length > 0 && (
          <Section>
            <AnimatedInView
              id="beneficios"
              aria-labelledby="beneficios-title"
              variant="fadeDown"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Container>
                <h2 id="beneficios-title">Por que escolher este serviço?</h2>

                {/* Stagger no container da lista */}
                <AnimatedInView
                  as={BenefitsWrapper}
                  variants={listStagger} // sobrescreve o variants interno
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {benefits.map((b, i) => (
                    <AnimatedInView
                      key={i}
                      as="li"
                      variants={listItem} // item com animação de entrada
                    >
                      {b.icon}
                      <h3>{b.title}</h3>
                      <p>{b.text}</p>
                    </AnimatedInView>
                  ))}
                </AnimatedInView>
              </Container>
            </AnimatedInView>
          </Section>
        )}

        {/* CTA */}
        <CTASection id="cta" aria-labelledby="cta-title">
          <AnimatedInView as={Container} variant="fadeUp" viewport={{ once: true, amount: 0.2 }}>
            <h2 id="cta-title">{ctaTitle}</h2>
            <p>{ctaText}</p>

            <Button as={Link} to={ctaHref} variant="blue" size="md">
              Começar agora
            </Button>
          </AnimatedInView>
        </CTASection>

        {/* FAQ */}
        {faqs.length > 0 && (
          <Section id="faq" aria-labelledby="faq-title">
            <AnimatedInView as={Container} variants={motionVariants.fadeUp} viewport={{ once: true, amount: 0.2 }}>
              <h2 id="faq-title">{faqTitle}</h2>
              <FAQWrapper>
                {faqs.map((f, i) => {
                  const qId = `faq-q-${i}`;
                  const aId = `faq-a-${i}`;
                  const isOpen = open === i;

                  return (
                    <article key={i}>
                      <button
                        id={qId}
                        className={`faq-question ${isOpen ? 'active' : ''}`}
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={aId}
                      >
                        {f.question}
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>

                      <div
                        id={aId}
                        role="region"
                        aria-labelledby={qId}
                        className={`faq-answer ${isOpen ? 'open' : ''}`}
                      >
                        <p>{f.answer}</p>
                      </div>
                    </article>
                  );
                })}
              </FAQWrapper>
            </AnimatedInView>
          </Section>
        )}

        <div id="contato" />
      </main>
    </>
  );
}

ServicePage.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  heroImage: PropTypes.string.isRequired,
  heroAlt: PropTypes.string.isRequired,
  aboutTitle: PropTypes.string,
  aboutText: PropTypes.string,
  bullets: PropTypes.arrayOf(PropTypes.string),
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  ctaTitle: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  ctaHref: PropTypes.string,
  faqTitle: PropTypes.string,
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired
    })
  )
};
