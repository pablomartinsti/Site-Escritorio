import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  background-color: ${colors.black};

  .box-cta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    @media (max-width: 1023px) {
      flex-direction: column;
    }
  }
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    @media (max-width: 1023px) {
      max-width: 100%;
    }
  }
  h2 {
    font-size: 2rem;
    white-space: pre-line;
    line-height: 1.6;
    color: ${colors.yellow};
  }
  p {
    white-space: pre-line;
    line-height: 1.8;
    margin: 5rem 0;
    text-align: justify;
    color: ${colors.white};
    @media (max-width: 768px) {
      margin: 2rem 0;
    }
  }
  .icon {
    display: flex;
    gap: 10px;
    margin: 1rem 0;
    cursor: pointer;
    color: ${colors.white};
    &:hover {
      opacity: 0.7;
    }
  }
  a {
    color: ${colors.white};
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    gap: 1rem;
    background-color: ${colors.yellow};
    border-radius: 5px;
    max-width: 32rem;
    width: 100%;

    .input-group {
      display: flex;
      flex-direction: column;
    }

    .input-box {
      display: flex;
      align-items: center;
      background: ${colors.white};
      border-radius: 5px;
      padding: 0 10px;
    }

    .icon-input {
      color: ${colors.black};
      font-size: 1.2rem;
      margin-right: 10px;
    }

    input {
      flex: 1;
      height: 2.5rem;
      border: 0;
      font-size: 1rem;
      text-transform: capitalize;
      padding-left: 5px;
      outline: none;
    }

    textarea {
      border-radius: 5px;
      border: 0;
      padding: 10px;
      font-size: 1rem;
      outline: none;
      resize: none;
    }

    button {
      padding: 0.5rem;
      font-size: 1.5rem;
      border-radius: 5px;
      border: 0;
      cursor: pointer;
      transition: 0.5s;
      background-color: ${colors.black};
      color: ${colors.white};
      width: 100%;

      &:hover {
        background-color: ${colors.white};
        color: ${colors.black};
        transform: scale(1.02);
      }
      &:active {
        opacity: 0.7;
      }
    }
    .message {
      margin-top: 10px;
      padding: 10px;
      border-radius: 5px;
      text-align: center;
    }

    .success {
      background-color: #4caf50;
      color: white;
    }

    .sending {
      background-color: #ff9800;
      color: white;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`;
