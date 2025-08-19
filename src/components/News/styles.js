import styled from 'styled-components';
import colors from '../../styles/colors';

export const NewsSection = styled.section`
  .news-title {
    font-size: 2rem;
    font-weight: 700;
    color: ${colors.blueDark};
    margin: 2rem auto;
    text-align: center;
    @media (max-width: 480px) {
      font-size: 1.7rem;
    }
  }

  .news-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem 1rem;
    margin: 2rem auto;
    max-width: 1200px;
    padding: 0 24px;
  }
`;
