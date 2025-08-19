import styled, { keyframes } from 'styled-components';
import colors from '../../styles/colors';

export const FloatingWrap = styled.div`
  position: fixed;
  right: 16px;
  bottom: calc(16px + env(safe-area-inset-bottom)); /* iPhone safe area */
  z-index: 9999;
  display: flex;
  align-items: flex-end;
  gap: 12px;
`;
export const Fab = styled.a`
  width: 64px;
  height: 64px;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #25d366 0%, #1ebe57 100%);
  color: #fff; /* o SVG herda essa cor */
  box-shadow: 0 12px 26px rgba(37, 211, 102, 0.35), 0 8px 16px rgba(0, 0, 0, 0.18);
  transition: transform 0.15s ease, box-shadow 0.2s ease;

  /* anel ao focar/hover */
  &:hover,
  &:focus-visible {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 16px 34px rgba(37, 211, 102, 0.45), 0 10px 18px rgba(0, 0, 0, 0.2);
    outline: none;
  }

  /* micro-anel extra */
  &::after {
    content: '';
    position: absolute;
    inset: -6px;
    border-radius: inherit;
    border: 2px solid rgba(255, 255, 255, 0.2);
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  &:hover::after,
  &:focus-visible::after {
    opacity: 1;
  }

  @media (max-width: 480px) {
    width: 56px;
    height: 56px;
  }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Bubble = styled.div`
  position: relative;
  max-width: 320px;
  background: ${colors.blueDark};
  color: ${colors.white};
  border-radius: 14px;
  padding: 12px 36px 12px 14px;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.12);
  font-size: 0.95rem;
  line-height: 1.3;
  animation: ${fadeInUp} 0.25s ease-out both;

  /* rabinho apontando pro botão */
  &::after {
    content: '';
    position: absolute;
    right: -6px;
    bottom: 14px;
    width: 0;
    height: 0;
    border-left: 6px solid ${colors.white};
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
  }

  @media (max-width: 480px) {
    max-width: 240px;
    font-size: 0.9rem;
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 8px;
  top: 6px;
  width: 24px;
  height: 24px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: #6b7280;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }
  &:focus-visible {
    outline: 2px solid rgba(37, 211, 102, 0.6);
    outline-offset: 2px;
  }
`;
