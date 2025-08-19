import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Nav = styled.nav`
  margin-top: 16px;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const Btn = styled.button`
  background: ${(props) => (props.active ? colors.gold : colors.white)};
  color: ${(props) => (props.active ? colors.blueDeep : colors.blueDark)};
  border: 1px solid ${colors.shadowSoft};
  border-radius: 10px;
  padding: 6px 10px;
  min-width: 36px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.15s ease;

  &:hover {
    background: ${(props) => (props.active ? colors.goldLight : colors.blueDark)};
    color: ${colors.white};
    border-color: ${colors.blueDark};
    transform: translateY(-2px);
  }

  &:active {
    background: ${(props) => (props.active ? colors.goldMid : colors.blueDeep)};
    color: ${colors.white};
    border-color: ${colors.blueDeep};
    transform: translateY(0);
  }
`;

export const BtnOutline = styled(Btn)`
  background: ${colors.white};
  color: ${colors.blueDark};

  &:hover {
    background: ${colors.blueDark};
    color: ${colors.white};
  }
`;
