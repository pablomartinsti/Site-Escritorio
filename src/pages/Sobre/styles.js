import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .box-cards {
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    gap: 1rem;
    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }
  .cards {
    border: 1px solid ${colors.yellow};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${colors.white};
    color: ${colors.black};
    border-radius: 10px;
    width: 100%;
    padding: 1rem;
    p {
      white-space: pre-line;
      text-align: justify;
      line-height: 1.6;
    }
  }
`;
export const H1 = styled.h1`
  font-size: 3rem;
  white-space: pre-line;
  line-height: 2;
  text-align: center;
  margin-top: 2rem;

  @media (max-width: 820px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.8rem;
    white-space: normal;
  }
`;
export const H2 = styled.h2`
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 1.6;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;

  img {
    max-width: 45%;
    height: 32rem;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media (max-width: 1024px) {
      max-width: 100%;
    }
    @media (max-width: 480px) {
      max-height: 15rem;
    }
  }
  .box-sobre {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 2rem;
    padding: 5rem 0;

    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }
  .box-conteudo {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p {
      line-height: 1.6;
      text-align: justify;
    }
    span {
      color: ${colors.yellow};
    }
  }
`;
