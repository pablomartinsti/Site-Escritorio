import styled, { css, keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../../styles/colors';

/* Tamanhos */
const SIZES = {
  sm: css`
    font-size: 0.95rem;
    padding: 0.6rem 1rem;
    border-radius: 10px;
    min-width: 120px;
  `,
  md: css`
    font-size: 1.08rem;
    padding: 0.8rem 1.2rem;
    border-radius: 10px;
    min-width: 140px;
  `,
  lg: css`
    font-size: 1.25rem;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    min-width: 160px;
  `
};

/* Variantes (azul, dourado, outline claro) */
const VARIANTS = {
  blue: css`
    background: linear-gradient(90deg, ${colors.blueMid} 0%, ${colors.blueDark} 100%);
    color: ${colors.white};
    border: none;
    &:hover {
      background: linear-gradient(90deg, ${colors.goldSoft} 0%, ${colors.gold} 100%, ${colors.goldMid} 100%);
    }
  `,
  blueS: css`
    background: linear-gradient(90deg, ${colors.blueMid} 0%, ${colors.blueDark} 100%);
    color: ${colors.white};
    border: none;
    &:hover {
      background: linear-gradient(90deg, ${colors.blueDeep} 0%, ${colors.blueMid} 100%, ${colors.blueDark} 100%);
    }
  `,
  gold: css`
    background: linear-gradient(90deg, ${colors.goldMid} 0%, ${colors.gold} 100%, ${colors.goldSoft} 100%);
    color: ${colors.white};
    border: 1px solid ${colors.gold};
    &:hover {
      border: 1px solid ${colors.white};
      background: linear-gradient(90deg, ${colors.goldSoft} 0%, ${colors.gold} 100%, ${colors.goldMid} 100%);
    }
  `,
  outlineLight: css`
    background: transparent;
    color: ${colors.white};
    border: 1px solid ${colors.white};
    &:hover {
      background: linear-gradient(90deg, ${colors.blueDark} 0%, ${colors.blueMid} 100%);
      color: ${colors.white};
    }
  `
};

const spin = keyframes`
  from { transform: rotate(0) }
  to { transform: rotate(360deg) }
`;

export const StyledButton = styled(motion.button).attrs(({ $variant }) => ({
  'data-variant': $variant
}))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  user-select: none;

  border: 0;
  outline: none;

  box-shadow: 0 2px 14px ${colors.shadowSoft};
  transition: background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;

  ${({ $size }) => SIZES[$size || 'md']};
  ${({ $variant }) => VARIANTS[$variant || 'blue']};
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `};

  &:focus-visible {
    outline: 3px solid ${colors.gold};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
    filter: grayscale(0.1);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const IconWrap = styled.span`
  display: inline-flex;
  align-items: center;
  line-height: 0;

  &.left {
    margin-right: 0.25rem;
  }
  &.right {
    margin-left: 0.25rem;
  }
`;

export const Spinner = styled.span`
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  border: 2px solid currentColor;
  border-top-color: transparent;
  animation: ${spin} 0.8s linear infinite;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.8rem;
    width: 100%;
  }
`;
