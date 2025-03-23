import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  padding-top: 5rem;
  section {
    background-color: ${colors.blue};
    display: flex;
    color: ${colors.white};
    justify-content: space-between;
    padding: 2rem 5rem;
    flex-wrap: wrap;
    gap: 4rem;
    @media (max-width: 480px) {
      justify-content: center;
    }
    .box-logo {
      width: 13rem;
    }
    .box-icon {
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: center;

      .icon {
        &:hover {
          opacity: 0.8;
        }
      }
    }
    .box-logo {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    p {
      @media (max-width: 480px) {
        display: none;
      }
    }

    .box-serviço,
    .box-navegaçao,
    .box-contato {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      @media (max-width: 480px) {
        display: none;
      }
    }
    .box-navegaçao {
      align-items: center;
    }

    a {
      text-decoration: none;
      color: ${colors.white};
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
    .contato {
      display: flex;
      align-items: center;
      gap: 1rem;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .footer {
    background-color: ${colors.black};
    padding: 15px 0;
    text-align: center;
    font-size: 14px;
    color: #aaa;
  }
`;
export const Logo = styled.img`
  max-width: 12rem;
`;
