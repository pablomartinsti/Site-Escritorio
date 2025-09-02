import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.main``;

export const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: ${colors.white};
  width: 100%;

  /* imagem real no DOM */
  .hero-bg {
    position: absolute;
    inset: 0;
    z-index: -2;
  }
  .hero-bg img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left center;
  }

  @media (max-width: 768px) {
    .hero-bg img {
      object-position: right top;
    }
  }

  /* overlay escuro */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: -1;
    pointer-events: none;
  }

  .hero-content {
    width: 100%;
    min-height: calc(100vh - 112px);
    min-height: calc(100svh - 112px);
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    position: relative;
    z-index: 1;

    @media (max-width: 820px) {
      min-height: calc(100vh - 250px);
      min-height: calc(100svh - 250px);
    }
  }

  .hero-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  h1 {
    font-size: 1.4rem;
    font-weight: 300;
    margin-bottom: 2rem;
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
    color: ${colors.white};
    filter: brightness(1.1) drop-shadow(0 1px 4px ${colors.blueDark});
    @media (max-width: 480px) {
      font-size: 1.7rem;
    }
  }

  p {
    font-size: 1.15rem;
    font-weight: 300;
    margin: 2rem 0;
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  .hero-buttons {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
    font-size: 1.1rem;
    font-weight: 300;
    flex-wrap: wrap;
    @media (max-width: 600px) {
      flex-direction: column;
      align-items: stretch;
      gap: 0.8rem;
      margin-top: 1.5rem;
      width: 100%;
    }
  }
`;

export const ServiceSection = styled.section`
  width: 100%;
  text-align: center;
  background: ${colors.white};
  padding: 2rem 1rem;
  box-shadow: 0 6px 28px ${colors.shadow};

  .service-title {
    font-size: 2rem;
    font-weight: 700;
    color: ${colors.blueDark};
    @media (max-width: 480px) {
      font-size: 1.7rem;
    }
  }
  .service-description {
    font-size: 1.2rem;
    font-weight: 300;
    margin: 1rem 0;
    color: ${colors.blueMid};
    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
  .service-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem 1rem;
    margin: 5rem auto;
    max-width: 1200px;
    padding: 0 24px;
    list-style: none;
  }
  .service-cards h3 {
    text-align: center;
    color: ${colors.blueDark};
  }
`;

export const AboutSection = styled.section`
  .parallax-bg {
    position: relative;
    background-image: url('/assets/sobre-martir-assessoria-contabil-uberlandia.webp');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
      background-attachment: scroll;
    }
  }

  .about-img {
    background: ${colors.blueOverlay};
    padding: 6rem 1.5rem;
    width: 100%;
    min-height: 400px;
    color: ${colors.white};
    margin: 0 auto;
    box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.14);
  }
  .about-content {
    max-width: 800px;
    margin: 0 auto;
  }
  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 4rem;
    color: ${colors.gold};
    @media (max-width: 480px) {
      font-size: 1.7rem;
    }
  }
  .about-highlight {
    color: ${colors.gold};
    font-weight: 600;
    letter-spacing: 0.2px;
    filter: drop-shadow(0 1px 2px ${colors.black});
  }

  p {
    text-align: start;
    font-size: 1rem;
    font-weight: 500;
    margin: 1rem 0;
  }
`;

export const DifferentialSection = styled.section`
  text-align: center;
  padding: 6rem 1.5rem;
  margin: 0 auto;
  max-width: 1200px;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: ${colors.blueDark};

    @media (max-width: 480px) {
      font-size: 1.7rem;
    }
  }
  .Differential-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
  }
  .icon {
    font-size: 2.1rem;
    margin-bottom: 18px;
    color: ${colors.gold};
  }

  /* Badge circular com vars de cor */
  .icon-badge {
    --icon-bg: ${colors.white};
    --icon-color: ${colors.blueDark};

    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    margin-bottom: 14px;

    background: var(--icon-bg);
    color: var(--icon-color);
    box-shadow: 0 8px 18px ${colors.shadowSoft};
  }

  /* Tamanhos dos SVGs dos ícones */
  .icon-badge svg {
    width: 34px;
    height: 34px;
  }

  /* Cores específicas por card (pode ajustar como quiser) */
  .icon-badge {
    --icon-bg: ${colors.blueDark};
    --icon-color: ${colors.white};
  }

  /* Ajustes finos nos cards */
  .Differential-card {
    background: ${colors.white};
    border: 1.5px solid ${colors.goldMid};
    border-radius: 16px;
    padding: 28px 18px 22px;
    box-shadow: 0 4px 12px ${colors.shadowSoft};
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.18s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.18s;
  }
  .Differential-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 22px ${colors.shadowSoft};
  }

  .Differential-card h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 10px 0 8px;
    color: ${colors.blueDark};
  }
  .Differential-card p {
    font-size: 1rem;
    color: ${colors.blueDeep};
    text-align: center;
  }

  .Differential-card:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0px 8px 18px ${colors.shadowSoft};
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: ${colors.blueMid};
  }

  p {
    font-size: 1rem;
    color: ${colors.blueDeep};
  }
  .cta-expectativa {
    margin: 3rem 0rem 1rem 0rem;
  }

  .diff-highlight {
    color: ${colors.goldMid};
    font-weight: 600;
  }
`;

export const FeedbackSection = styled.section`
  position: relative;
  background-image: url('/assets/sobre-martir-assessoria-contabil-uberlandia.webp');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 6rem 1.5rem;

  @media (max-width: 1024px) {
    background-attachment: scroll;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${colors.blueOverlay};
    z-index: 1;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  .title {
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
    color: ${colors.gold};
    margin-bottom: 5rem;
    @media (max-width: 480px) {
      font-size: 1.7rem;
    }
  }

  .box-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 600px) {
      gap: 1rem;
      grid-template-columns: 1fr;
    }
  }

  .card {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 2px 16px ${colors.shadowSoft};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 600px) {
      padding: 1rem;
    }
  }

  .feedback {
    font-size: 1.1rem;
    color: ${colors.blueDark};
    margin-bottom: 18px;
    font-style: italic;
  }
  .feedback-highlight {
    color: ${colors.goldMid};
    font-weight: 600;
    font-style: normal;
  }
  .cliente {
    font-size: 1rem;
    color: ${colors.black};
    font-weight: 500;
  }
  p {
    margin-top: 5rem;
    color: ${colors.white};
    font-weight: 400;
    font-size: 1.07rem;
    text-align: center;
  }
  a {
    color: ${colors.gold};
    text-decoration: underline;
    font-weight: 600;
    transition: filter 0.22s;
    &:hover {
      filter: brightness(1.13);
    }
  }
`;

export const FaqSection = styled.section`
  padding: 2rem 1.5rem;

  .faq-section {
    background: ${colors.white};
    padding: 1.5rem 1rem;
    border-radius: 20px;
    max-width: 1200px;
    margin: 40px auto;
    text-align: center;
    box-shadow: 10px 10px 20px 10px ${colors.shadowSoft};
  }
  .faq-title {
    text-align: center;
    margin-bottom: 30px;
  }
  .faq-title h2 {
    font-size: 2rem;
    color: ${colors.blueDark};
    font-weight: bold;
    margin-bottom: 10px;
    @media (max-width: 480px) {
      font-size: 1.7rem;
    }
  }
  .faq-title p {
    color: ${colors.blueDeep};
    font-size: 1rem;
  }

  .faq-container {
    max-width: 1000px;
    margin: 0 auto;
  }
  .faq-item {
    margin-bottom: 16px;
    border-bottom: 1px solid ${colors.gold};
    list-style: none;
  }
  .faq-question {
    background: none;
    border: none;
    width: 100%;
    text-align: left;
    font-size: 1.15rem;
    color: ${colors.blueMid};
    font-weight: 600;
    padding: 16px 0;
    cursor: pointer;
    transition: color 0.2s;
    outline: none;
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
  .faq-question:hover {
    color: ${colors.gold};
  }
  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), padding 0.4s;
    color: ${colors.black};
    font-size: 1rem;
  }
  .faq-item.active .faq-answer {
    max-height: 250px;
    padding: 0.5rem;
  }
`;
