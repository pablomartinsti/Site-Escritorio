import styled from 'styled-components';
import colors from '../../styles/colors';
import aboutMartirImg from '../../assets/sobre-martir-assessoria-contabil-uberlandia.webp';

export const Container = styled.main``;

export const FormHeader = styled.header`
  position: relative;
  color: ${colors.white};
  background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${aboutMartirImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 1024px) {
    background-attachment: fixed;
  }

  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;

  .img {
    text-align: center;
    padding: 0 1.5rem;
    width: 100%;
    max-width: 980px;
  }

  h1 {
    font-weight: 700;
    line-height: 1.2;
    margin: 1rem 0;
    font-size: clamp(1rem, 1rem + 1.2vw, 4rem);
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.85);
    font-size: clamp(1rem, 1rem + 0.2vw, 1.5rem);
  }
`;
