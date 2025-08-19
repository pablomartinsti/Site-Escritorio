// styles.js
import styled from 'styled-components';
import colors from '../../styles/colors';

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
    justify-content: space-between;
  }

  img {
    width: 100%;
    height: 200px; /* melhor proporção */
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .descricao {
    padding: 1rem 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${colors.blueDark}; // Título
    margin-bottom: 0.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .subtitle,
  h4.subtitle {
    font-size: 1rem;
    font-weight: 600;
    color: ${colors.goldMid}; // Subtítulo
    margin-bottom: 0.2rem;
  }

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    color: ${colors.blueDeep};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .caption {
    font-size: 0.85rem;
    color: ${colors.goldSoft}; // Detalhe
    margin-bottom: 0.5rem;
    font-style: italic;
  }
`;
