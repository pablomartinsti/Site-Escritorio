import styled from 'styled-components';
import colors from '../../styles/colors';
import { IconButton, Box } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  /* Skip link */
  .skip-link {
    position: absolute;
    left: -9999px;
    top: -9999px;
  }
  .skip-link:focus {
    left: 16px;
    top: 16px;
    z-index: 1000;
    background: #fff;
    color: #111;
    padding: 8px 12px;
    border-radius: 6px;
    outline: 2px solid ${colors.gold};
  }
`;

export const HeaderTop = styled.div`
  background: ${colors.black};
  z-index: 1001;
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    margin: 0.2rem auto;

    @media (max-width: 1024px) {
      padding: 0.5rem 2rem;
    }
    @media (max-width: 768px) {
      display: none;
    }

    a {
      display: flex;
      color: ${colors.white};
      font-weight: 300;
      gap: 10px;
      text-decoration: none;
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
    .contato a {
      display: flex;
      gap: 0.5rem;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        color: ${colors.gold};
        opacity: 0.8;
        transform: scale(1.02);
      }
      &:active {
        transform: scale(0.98);
      }
    }
    .box-icon {
      display: flex;
      gap: 1.5rem;
    }
    .box-icon a {
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        color: ${colors.gold};
        opacity: 0.8;
        transform: scale(1.02);
      }
      &:active {
        transform: scale(0.98);
      }
    }
  }
`;

export const HeaderBottom = styled.div`
  background: ${colors.blueDark};
  box-shadow: 0px 0.5px 0.5px ${colors.gold};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  position: ${({ isScrolled }) => (isScrolled ? 'fixed' : 'static')};
  top: ${({ isScrolled }) => (isScrolled ? '0' : 'auto')};
  left: 0;
  transition: position 0.4s;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    margin: 0.5rem auto;
    color: #fff;

    @media (max-width: 1024px) {
      padding: 0.5rem 2rem;
    }
    @media (max-width: 760px) {
      padding: 0.5rem;
    }
  }
`;

export const Logo = styled.img`
  max-width: 12rem;
`;

export const HamburgerIcon = styled(IconButton)`
  .icon {
    display: block;
    color: ${colors.gold};
    font-size: 2rem;

    @media (min-width: 769px) {
      display: none;
    }
  }
`;

export const Nav = styled.nav`
  display: none;
  justify-content: center;
  align-items: center;

  @media (min-width: 769px) {
    display: flex;
    gap: 2rem;
  }

  /* Link e botão com o mesmo estilo */
  a,
  .nav-button {
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    transition: 0.2s;
    cursor: pointer;
  }

  /* reset do <button> para não ficar cinza */
  .nav-button {
    background: transparent;
    border: 0;
    font: inherit;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    line-height: 1;
  }

  /* hover padrão */
  a:hover,
  .nav-button:hover {
    color: ${colors.gold};
    transform: scale(1.02);
  }

  /* ATIVO = mesma cor do hover (sem transform) */
  a[aria-current='page'],
  .nav-button[aria-current='page'] {
    color: ${colors.gold};
    transform: none;
  }

  .dropdown {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .dropdown-content {
      display: none;
      position: absolute;
      top: 2.2rem; /* abaixo do menu */
      left: 0;
      background: #fff;
      min-width: 270px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.18);
      border-radius: 4px;
      z-index: 10;
      flex-direction: column;

      a {
        color: #222;
        padding: 1rem 1.5rem;
        display: block;
        font-size: 1rem;
        white-space: normal;

        &:hover {
          background: ${colors.gold};
          color: #fff;
        }
      }
    }

    /* abre por hover (como já era) */
    &:hover .dropdown-content {
      display: flex;
    }

    /* e também abre por classe .open (clique/teclado) */
    .dropdown-content.open {
      display: flex;
    }
  }
`;

export const DrawerContent = styled(Box)`
  width: 100vw;
  padding: 2rem 0.5rem;
  background-color: ${colors.blueDark};
  height: 100vh;
  .MuiIconButton-root {
    position: absolute;
    top: 10px;
    right: 10px;
    color: ${colors.white};
    font-size: 20px;
  }
  .MuiListItemText-root {
    color: ${colors.white};
    font-size: 1.4rem;
  }
`;
