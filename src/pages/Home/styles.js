import styled from "styled-components";
import img from "../../assets/forca-lideranca-contabilidade.webp";
import dicas from "../../assets/dicas.webp";
import colors from "../../styles/colors";

export const Container = styled.div``;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export const BoxHome = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 113px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: brightness(0.5);
    z-index: -1;

    @media (max-width: 1024px) {
      background-position: right;
    }
    @media (max-width: 480px) {
      min-height: calc(100vh - 50px);
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    height: 60vh;
  }
  h1 {
    font-size: 3rem;

    line-height: 1.8;
    @media (max-width: 820px) {
      font-size: 2rem;
    }
    @media (max-width: 480px) {
      font-size: 1.8rem;
      white-space: normal;
    }
  }
  p {
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 2rem;
    line-height: 1.6;

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  a {
    background-color: ${colors.yellow};
    text-align: center;
    padding: 1rem;
    border-radius: 10px;
    font-size: 1.4rem;
    border: 1px solid ${colors.white};
    transition: 0.5s;
    color: ${colors.white};
    @media (max-width: 480px) {
      font-size: 1.2rem;
      padding: 0.6rem;
    }

    &:hover {
      border: 1px solid #${colors.white};
      background-color: ${colors.black};
      color: ${colors.white};
      cursor: pointer;
      transform: scale(1.02);
    }
    &:active {
      opacity: 0.6;
    }
  }
`;

export const BoxDiferencial = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem 0;
  color: #fff;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${dicas});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: brightness(0.27);
    z-index: -1;
  }

  h2 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
    text-align: center;

    @media (max-width: 820px) {
      font-size: 2rem;
    }
    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  .box {
    display: flex;
    justify-content: center;
    align-items: stretch; /* Garante que os cards ocupem o mesmo espaço */
    gap: 1.5rem;
    width: 80%;
    flex-wrap: wrap;
    max-width: 1200px;

    @media (max-width: 820px) {
      width: 100%;
    }
  }

  .conteudo {
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Distribui os elementos igualmente */
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid ${colors.yellow};
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    max-width: 300px;
    min-height: 250px; /* Define altura mínima para manter o tamanho igual */

    h3 {
      margin-bottom: 1rem;
      color: #fff;
      text-align: center;
      font-size: 1.2rem;
    }

    p {
      flex-grow: 1; /* Faz o texto expandir sem alterar a altura dos outros cards */
      font-weight: 400;
      color: #bfbfbf;
      max-width: 20rem;
      text-align: center;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
    }
  }
`;

export const BoxDepoimentos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem 0;

  h2 {
    font-size: 2.4rem;
    margin-bottom: 3rem;
    text-align: center;

    @media (max-width: 820px) {
      font-size: 2rem;
    }
    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 80%;
    flex-wrap: wrap;
    max-width: 1200px;

    @media (max-width: 820px) {
      width: 100%;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Mantém o conteúdo alinhado */
    align-items: center;
    width: 300px; /* Define um tamanho fixo para os cards */
    min-height: 250px; /* Define altura mínima para garantir alinhamento */
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    text-align: center;
    background: rgba(255, 255, 255, 0.95);

    h3 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    p {
      flex-grow: 1; /* Faz com que os parágrafos ocupem espaço sem afetar os outros elementos */
      line-height: 1.5;
      font-size: 1rem;
      color: #333;
    }

    .icon {
      display: flex;
      justify-content: center;
      gap: 0.2rem;
      margin-top: auto; /* Faz com que os ícones fiquem no final */
    }
  }

  a {
    font-size: 1.4rem;
    margin-top: 2rem;
    text-decoration: underline;
    color: ${colors.black};

    @media (max-width: 480px) {
      font-size: 1rem;
      text-align: center;
    }

    &:hover {
      color: ${colors.yellow};
    }
  }
`;
