import styled from 'styled-components';
import colors from '../../styles/colors';

export const Hero = styled.div`
  background: ${colors.blueDark};
  color: ${colors.white};
  padding: 48px 0;
  border-bottom: 1px solid ${colors.blueDeep};
`;

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const H1 = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 34px;
  font-weight: 900;
  color: ${colors.white};
  text-shadow: 0 2px 8px ${colors.shadowSoft};
`;

export const Sub = styled.p`
  margin: 8px 0 0;
  text-align: center;
  color: ${colors.gold};
  font-weight: 600;
`;

export const Grid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 320px;
  margin-top: 24px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const Cards = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
