// src/pages/Sobre/styles.js
import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Hero = styled.section`
  background: ${colors.blueDark};
  color: ${colors.white};
  padding: 4rem 0;
  text-align: center;
  box-shadow: 0 8px 24px ${colors.shadowSoft};

  h1 {
    font-size: clamp(1.8rem, 2.6vw + 1rem, 3rem);
    font-weight: 700;
    line-height: 1.15;
    margin: 8px 0 0;
  }

  @media (max-width: 640px) {
    min-height: 160px;
    .inner {
      padding: 28px 0 36px;
    }
  }
`;

export const Section = styled.section`
  padding: 3rem 0;

  .inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .box-sobre {
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: 2rem;
    align-items: center;
    margin-bottom: 3rem;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }

  .box-sobre img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 24px ${colors.shadowSoft};
    object-fit: cover;
  }
  .box-sobre h2 {
    font-size: clamp(1.5rem, 2.2vw, 2rem);
    font-weight: 800;
    letter-spacing: 0.2px;
    color: ${colors.blueDark};
    margin-bottom: 0.75rem;

    .highlight {
      color: ${colors.gold};
    }
  }

  .box-conteudo p {
    color: ${colors.blueDeep};
    margin: 0.75rem 0;
    font-size: 1rem;
  }

  .box-conteudo p strong {
    color: ${colors.goldMid};
    font-weight: 600;
    letter-spacing: 0.2px;
  }

  .checklist {
    margin: 1rem 0 1.5rem;
    padding-left: 1.25rem;
    display: grid;
    gap: 0.4rem;
    list-style: none;
  }
  .checklist li {
    position: relative;
    padding-left: 1.4rem;
    color: ${colors.blueDark};
    font-weight: 500;
  }
  .checklist li::before {
    content: '✔';
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(0.05rem);
    font-size: 0.95rem;
    color: ${colors.gold};
  }

  .box-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.25rem;
  }

  .card {
    background: ${colors.white};
    border: 1.5px solid ${colors.goldMid};
    border-radius: 16px;
    padding: 24px 18px;
    box-shadow: 0 4px 12px ${colors.shadowSoft};
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.18s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.18s;
    text-align: center;
  }

  .card:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 10px 22px ${colors.shadowSoft};
  }

  .card h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 10px 0 8px;
    color: ${colors.blueDark};
  }

  .card p {
    font-size: 1rem;
    color: ${colors.blueDeep};
  }

  .icon-badge {
    --icon-bg: ${colors.blueDark};
    --icon-color: ${colors.white};
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

  .icon-badge svg {
    width: 34px;
    height: 34px;
  }
`;
