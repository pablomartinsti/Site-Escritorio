import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Wrap = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Card = styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.shadowSoft};
  border-radius: 16px;
  box-shadow: 0 10px 24px ${colors.shadowSoft};
  overflow: hidden;
`;

export const Box = styled.div`
  padding: 16px;
`;

export const Input = styled.input`
  width: 100%;
  margin: 0.2rem 0;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid ${colors.shadowSoft};
  outline: none;
  font-size: 14px;
  color: ${colors.blueDark};
  background: ${colors.white};
  transition: box-shadow 0.2s ease, border-color 0.2s ease;

  &:focus {
    border-color: ${colors.gold};
    box-shadow: 0 0 0 3px ${colors.goldSoft};
  }
`;

export const Label = styled.label`
  display: flex;
  gap: 8px;
  margin: 0.7rem 0;
  align-items: center;
  font-size: 13px;
  color: ${colors.blueDeep};
  opacity: 0.7;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.blueDark};
  margin: 0 0 8px;
`;

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  button {
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 14px;
    border: 1px solid ${colors.blueDark};
    background: #fff;
    color: ${colors.blueDark};
    cursor: pointer;
    transition: all 0.2s ease;

    &.active {
      background: ${colors.blueDark};
      color: #fff;
      border-color: ${colors.blueDark};
    }
  }
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;

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

export const Whats = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  color: ${colors.blueDark};
  text-decoration: none;
  font-weight: 700;
  border-top: 1px solid ${colors.shadowSoft};
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.gold};
  }
`;
