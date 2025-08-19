import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Card = styled.div`
  margin-top: 16px;
  background: ${colors.white};
  border: 1px solid ${colors.shadowSoft};
  border-radius: 16px;
  box-shadow: 0 10px 24px ${colors.shadowSoft};
`;

export const Row = styled.div`
  padding: 16px;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: ${colors.blueDark};
`;

export const Sub = styled.p`
  margin: 0;
  color: ${colors.blueDeep};
  opacity: 0.7;
`;

export const Button = styled.a`
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 12px;
  background: #25d366; /* mantém verde WhatsApp */
  color: ${colors.white};
  font-weight: 700;
  box-shadow: 0 8px 18px ${colors.shadowSoft};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 22px ${colors.shadowStrong};
  }
`;
