import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.footer`
  background: ${colors.blueDark};
  width: 100%;
  border-top: 1px solid ${colors.gold};

  .footer-main {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  .footer-col-nav {
    flex: 1 1 120px;

    @media (max-width: 600px) {
      flex: 1 1 200px;
    }
  }
  .footer-col {
    display: flex;
    flex-direction: column;
    flex: 1 1 200px;
  }

  h4 {
    color: ${colors.gold};
    margin-bottom: 1.1rem;
    font-size: 1.05rem;
    font-weight: 700;
    letter-spacing: 0.01em;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 0.8rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }

  li {
    font-size: 1rem;
  }

  a {
    color: ${colors.white};
    font-size: 0.8rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    transition: color 0.17s;
  }

  a:hover {
    color: ${colors.gold};
  }

  .contato-list a {
    align-items: flex-start;
    gap: 0.75rem;
    line-height: 1.4;
    word-break: break-word;
  }

  .contato-list a svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .contato-list a span {
    font-size: 0.8rem;
    font-weight: 300;
    color: ${colors.white};
    white-space: pre-line;
    color: inherit;
    flex: 1;
  }
  span:hover {
    color: ${colors.gold};
  }

  .footer-social {
    display: flex;
    gap: 1.3rem;
    margin-top: 1rem;

    &:hover {
      color: ${colors.gold};
    }
  }

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo img {
    max-width: 14rem;
    height: auto;
    display: block;
  }

  .logo p {
    color: ${colors.gold};
    font-weight: 450;
    margin: 1rem 0;
    font-size: 1rem;
    text-align: center;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-around;
    background: ${colors.black};
    padding: 0.5rem;
    align-items: center;
    color: ${colors.white};
    font-size: 0.97rem;
    border-top: 1px solid ${colors.goldSoft};
  }

  .footer-bottom a {
    color: ${colors.white};
    text-decoration: none;
  }

  .footer-bottom a:hover {
    color: ${colors.gold};
  }

  @media (max-width: 768px) {
    .footer-main {
      gap: 1.5rem;
      padding: 1rem 1rem 1.25rem;
    }

    .footer-bottom {
      flex-direction: column;
      gap: 0.5rem;
      text-align: center;
    }
  }
`;
