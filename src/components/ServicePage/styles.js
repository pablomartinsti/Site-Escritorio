import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: 1200px;
`;

export const PageHeader = styled.header`
  background: ${colors.blueDark};
  color: ${colors.white};
  padding: 0;
  box-shadow: 0 8px 24px ${colors.shadowSoft};
  display: flex;
  align-items: center;
  position: relative;
  isolation: isolate;
  overflow: clip; /* evita artefatos durante animacao de entrada */

  /* utilitário: acessível, mas invisível visualmente */
  .sr-only {
    position: absolute !important;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .hero-center {
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    padding: 4rem 1.5rem;
  }

  .hero-text {
    max-width: 800px;
    will-change: transform, opacity;
    backface-visibility: hidden;
    transform: translateZ(0);
  }

  .eyebrow {
    display: block;
    font-size: 0.9rem;
    font-weight: 500;
    color: ${colors.white};
    opacity: 0.85;
    margin-bottom: 0.8rem;
  }

  .hero-title {
    font-size: clamp(1.75rem, 3.5vw, 3rem);
    font-weight: 800;
    letter-spacing: 0.2px;
    margin-bottom: 0.75rem;
    line-height: 1.2;
    color: ${colors.white};
  }

  /* parágrafo (lead) da hero */
  .hero-lead {
    font-size: clamp(1.125rem, 2.4vw, 1.5rem);
    margin-bottom: 2rem;
    color: ${colors.white};
    font-weight: 300;
    opacity: 0.95;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

export const Section = styled.section`
  padding: 4rem 0;
  overflow: clip; /* segura filhos animados */

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: ${colors.blueDark};
    font-weight: 800;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.7;
    margin-bottom: 1rem;
    color: ${colors.blueDeep};
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 1rem;

    li {
      position: relative;
      padding-left: 2rem;
      margin-bottom: 0.75rem;
      color: ${colors.blueDeep};
      line-height: 1.5;

      &::before {
        content: '✔';
        position: absolute;
        left: 0;
        top: 0;
        color: ${colors.goldMid};
        font-weight: 800;
      }
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: 2rem;

    .image-content img {
      width: 100%;
      height: auto; /* antes: 100% */
      aspect-ratio: 800 / 560; /* combina com props do <img> */
      object-fit: cover;
      display: block;
      border-radius: 10px;
      box-shadow: 0 10px 24px ${colors.shadowSoft};
      border: 1px solid ${colors.goldSoft};
    }
  }

  @media (max-width: 992px) {
    .grid {
      grid-template-columns: 1fr;
    }
    .grid .image-content {
      order: -1;
    }
    h2 {
      font-size: 1.75rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const BenefitsWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  > li::before {
    content: none !important;
  }

  > li {
    background: ${colors.white};
    border: 1px solid ${colors.gold};
    border-radius: 14px;
    padding: 2rem 1.5rem;
    text-align: center;
    box-shadow: 0 10px 20px ${colors.shadowSoft};
    transition: transform 0.15s ease, box-shadow 0.2s ease;
    will-change: transform, opacity; /* ajudam a entrada animada */
    backface-visibility: hidden;
    transform: translateZ(0);
  }
  > li:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 28px ${colors.shadowSoft};
  }

  svg {
    width: 42px;
    height: 42px;
    margin-bottom: 1rem;
    display: inline-block;
  }
  svg path,
  svg circle {
    stroke: ${colors.gold};
  }

  h3 {
    font-size: 1.35rem;
    margin-bottom: 0.5rem;
    color: ${colors.blueDark};
    font-weight: 800;
  }
  p {
    font-size: 1rem;
    color: ${colors.blueDeep};
    line-height: 1.6;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(220px, 1fr));
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const CTASection = styled.section`
  background: ${colors.gold};
  border: 1px solid ${colors.goldMid};
  text-align: center;
  padding: 3rem 1.5rem;
  margin: 3rem 0;
  box-shadow: 0 12px 24px ${colors.shadowSoft};

  h2 {
    color: ${colors.blueDark};
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 800;
  }

  p {
    color: ${colors.blueDeep};
    margin-bottom: 2rem;
    font-size: 1.125rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const FAQWrapper = styled.div`
  background: ${colors.white};
  padding: 1.5rem 1rem;
  border-radius: 20px;
  max-width: 1200px;
  margin: 40px auto;
  box-shadow: 10px 10px 20px 10px ${colors.shadowSoft};
  border: 1px solid ${colors.whiteSoft};

  h2 {
    font-size: 2rem;
    color: ${colors.blueDark};
    font-weight: 800;
    margin-bottom: 30px;
    text-align: center;
  }
  ul,
  & {
    list-style: none;
    margin: 0;
    padding: 1.5rem 1rem;
  }

  li::before {
    content: none !important;
  }

  article {
    border-bottom: 1px solid ${colors.gold};
    padding: 1rem 0;
    margin-bottom: 8px;
  }

  .faq-question {
    width: 100%;
    background: none;
    border: none;
    text-align: left;
    font-size: 1.15rem;
    font-weight: 700;
    color: ${colors.blueMid};
    padding: 0.75rem 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    transition: color 0.2s ease;

    &:hover {
      color: ${colors.gold};
    }
  }

  .faq-question svg {
    width: 20px;
    height: 20px;
    transition: transform 0.25s ease;
    fill: none;
    stroke: ${colors.gold};
    stroke-width: 2px;
    flex-shrink: 0;
  }
  .faq-question.active svg {
    transform: rotate(180deg);
  }

  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1), padding 0.35s ease;
    color: ${colors.blueDeep};
    font-size: 1rem;
    padding-left: 0;
  }

  .faq-answer.open {
    max-height: 320px;
    padding-top: 0.5rem;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.7rem;
    }
    .faq-question {
      font-size: 1rem;
    }
  }

  /* Acessibilidade e respeito a reduce-motion para transições puramente visuais */
  @media (prefers-reduced-motion: reduce) {
    .btn,
    .faq-answer,
    .faq-question svg {
      transition: none !important;
    }
  }
`;
