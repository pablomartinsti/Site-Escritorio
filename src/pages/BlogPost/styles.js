import styled from 'styled-components';
import colors from '../../styles/colors';

export const Hero = styled.div`
  background: ${colors.blueDark};
  padding: 24px 0;
  border-bottom: 1px solid ${colors.shadowSoft};
`;

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Title = styled.h1`
  margin: 3rem 0 1rem 0;
  font-size: 28px;
  font-weight: 800;
  color: ${colors.blueDark};
`;

export const Meta = styled.p`
  margin: 6px 0 0;
  color: ${colors.blueMid};
  opacity: 0.75;
`;

export const Cover = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 16px;
  margin: 16px 0;
  box-shadow: 0 6px 18px ${colors.shadowSoft};
`;

export const SummaryCard = styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.shadowSoft};
  border-radius: 16px;
  box-shadow: 0 10px 24px ${colors.shadowSoft};
  padding: 16px;
  color: ${colors.blueDark};
`;

export const Grid = styled.div`
  display: grid;
  gap: 24px;
  margin-top: 24px;
  grid-template-columns: 1fr 300px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  h2 {
    margin-top: 24px;
    font-size: 22px;
    font-weight: 800;
    color: ${colors.blueDark};
  }
  p,
  li {
    color: ${colors.blueDeep};
    line-height: 1.6;
  }
  ul,
  ol {
    padding-left: 22px;
  }
`;

export const Legal = styled.p`
  margin-top: 24px;
  font-size: 12px;
  color: ${colors.blueMid};
  opacity: 0.6;
`;

export const MobileCTA = styled.a`
  position: fixed;
  left: 16px;
  right: 16px;
  bottom: 16px;
  display: none;
  text-align: center;
  padding: 12px 16px;
  background: #25d366;
  color: ${colors.white};
  font-weight: 800;
  border-radius: 14px;
  box-shadow: 0 10px 24px ${colors.shadow};
  text-decoration: none;

  @media (max-width: 640px) {
    display: block;
  }
`;
