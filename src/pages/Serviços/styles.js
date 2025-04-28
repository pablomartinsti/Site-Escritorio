import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 2rem 0 8rem 0;

  h2 {
    font-weight: 400;
    margin: 2rem 0;
  }

  .box {
    display: grid;
    padding: 1rem 0;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 480px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export const H1 = styled.h1`
  font-size: 3rem;
  white-space: pre-line;
  line-height: 1.8;

  @media (max-width: 820px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.8rem;
    white-space: normal;
  }
`;
