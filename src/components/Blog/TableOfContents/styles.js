import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Card = styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.shadowSoft};
  border-radius: 16px;
  box-shadow: 0 10px 24px ${colors.shadowSoft};
  overflow: hidden;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px ${colors.shadowStrong};
  }
`;

export const Box = styled.div`
  padding: 16px;
`;

export const Title = styled.h3`
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: ${colors.blueDark};
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 6px;

  a {
    color: ${colors.blueDark};
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s ease;

    &:hover {
      color: ${colors.gold};
    }
  }
`;
