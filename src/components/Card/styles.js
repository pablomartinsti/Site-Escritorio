import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  padding: 0.5rem;

  .card {
    width: 100%;
    height: 100%;
    box-shadow: 0px 4px 4px ${colors.shadow};
    border-radius: 10px;
    overflow: hidden;
    background: ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Mantém tudo alinhado */
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .descricao {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px; /* Define uma altura mínima para garantir alinhamento */
  }

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${colors.black};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Define o limite de 3 linhas */
    -webkit-box-orient: vertical;
  }

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    line-height: 1.5;
    color: ${colors.grayDark};
    min-height: 72px; /* Define um tamanho fixo para todas as descrições */
    max-height: 72px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Define o limite de 3 linhas */
    -webkit-box-orient: vertical;
  }

  a {
    display: inline-block;
    background-color: ${colors.yellow};
    color: ${colors.white};
    padding: 0.5rem 1rem;
    border-radius: 5px;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
      background-color: ${colors.black};
      transform: scale(1.05);
    }
  }
`;
