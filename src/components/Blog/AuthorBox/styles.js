import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Card = styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.shadowSoft};
  border-radius: 16px;
  box-shadow: 0 10px 24px ${colors.shadowSoft};
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px ${colors.shadowStrong};
  }
`;

export const Box = styled.div`
  padding: 16px;
`;

export const Title = styled.h3`
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: 700;
  color: ${colors.blueDark};
`;

export const Text = styled.p`
  margin: 0;
  color: ${colors.blueDeep};
  opacity: 0.85;
`;
