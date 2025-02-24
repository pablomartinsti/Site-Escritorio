import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.div`
  width: 80%;
  max-width: 1200px;
  text-align: center;
  padding: 2rem 0;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  text-align: left;

  .blog-card {
    background: #fff;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    justify-content: space-between;
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
      height: 20rem;
      border-radius: 8px;
    }

    h2 {
      font-size: 1.5rem;
      margin: 1rem 0;
    }

    p {
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    a {
      display: inline-block;
      background: ${colors.yellow};
      color: ${colors.white};
      padding: 0.5rem 1rem;
      border-radius: 5px;
      text-decoration: none;
      font-weight: bold;
      transition: background 0.3s;

      &:hover {
        background-color: ${colors.black};
        transform: scale(1.05);
      }
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
