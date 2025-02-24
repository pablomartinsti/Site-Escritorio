import styled from "styled-components";
import colors from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 1200px;
  gap: 1rem;
  line-height: 1.8;

  h1 {
    margin: 2rem 0;
    text-align: center;
    font-size: clamp(1.8rem, 2.5vw, 2.5rem);
  }

  h2 {
    text-align: center;
    margin: 1rem 0;
    font-size: clamp(1.4rem, 2vw, 1.8rem);
  }

  p {
    text-align: justify;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
  }

  img {
    max-width: 800px;
    width: 100%;
    max-height: 30rem;
    margin: auto;
    border-radius: 10px;
  }

  ul {
    list-style-type: disc;
    margin-left: 2rem;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
  }

  a {
    display: inline-block;
    background-color: ${colors.yellow};
    margin: 2rem auto;
    max-width: 600px;
    width: 100%;
    color: ${colors.white};
    padding: 1rem;
    border-radius: 8px;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
      background-color: ${colors.black};
      transform: scale(1.05);
    }
  }
`;
