import styled from "styled-components";
import colors from "../../styles/colors";
import { IconButton, Box } from "@mui/material";

export const Container = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 10rem;
  background: ${colors.black};

  @media (max-width: 1024px) {
    padding: 0.5rem 2rem;
  }
  @media (max-width: 760px) {
    padding: 0.5rem;
  }
  @media (max-width: 480px) {
    display: none;
  }
  a {
    display: flex;
    gap: 10px;
    text-decoration: none;
  }

  p {
    color: #fff;
  }
  .box-contato {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    @media (max-width: 760px) {
      flex-direction: column;
      gap: 1rem;
      align-items: start;
    }
  }
  .contato {
    display: flex;
    gap: 0.5rem;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
      transform: scale(1.02);
    }
    &:active {
      transform: scale(0.98);
    }
  }
  .box-icon {
    display: flex;
    gap: 0.5rem;

    @media (max-width: 760px) {
      flex-direction: column;
    }
  }
  .icon {
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      opacity: 0.8;
      transform: scale(1.02);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;
export const HeaderBottom = styled.div`
  background-color: ${colors.blue};
  padding: 0.5rem 10rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 1024px) {
    padding: 0.5rem 2rem;
  }
  @media (max-width: 760px) {
    padding: 0.5rem;
  }
`;

export const Logo = styled.img`
  max-width: 12rem;
`;

export const HamburgerIcon = styled(IconButton)`
  .icon {
    display: block;
    color: ${colors.yellow};
    font-size: 2rem;

    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export const Nav = styled.nav`
  display: none;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;

    &:hover {
      color: ${colors.yellow};
      transform: scale(1.02);
    }
  }
  .nav-button {
    color: #fff;
    text-transform: none;
    font-size: 1.1rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.yellow};
      transform: scale(1.02);

      svg {
        color: ${colors.yellow};
      }
    }
  }
`;

export const DrawerContent = styled(Box)`
  width: 100vw;
  padding: 2rem 0.5rem;
  background-color: ${colors.blue};
  height: 100vh;
  .MuiIconButton-root {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;
    font-size: 20px;
  }
  .MuiListItemText-root {
    color: #fff;
    font-size: 1.4rem;
  }
`;
