import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  background-color: ${colors.blueDark};

  .box-cta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    max-width: 1200px;
    width: 100%;
    @media (max-width: 1024px) {
      flex-direction: column;
      gap: 2rem;
    }
  }
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media (max-width: 1023px) {
      max-width: 100%;
    }
  }
  h2 {
    font-size: 2rem;
    white-space: pre-line;
    line-height: 1.6;
    color: ${colors.white};
    font-weight: 700;
    margin-bottom: 1.2rem;
  }
  p {
    white-space: pre-line;
    line-height: 1.8;
    margin: 2rem 0 1.2rem 0;
    text-align: justify;
    color: ${colors.whiteSoft};
    @media (max-width: 768px) {
      margin: 1rem 0 1.2rem 0;
    }
  }
  .contacts {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${colors.gold};
    font-size: 1rem;
    margin-bottom: 0.38rem;
  }

  .contact-item svg {
    color: ${colors.gold};
    font-size: 1.17rem;
    flex-shrink: 0;
  }

  .contact-item a {
    color: ${colors.white};
    font-weight: 300;
    text-decoration: none;
    transition: color 0.17s;
  }

  .contact-item a:hover,
  .contact-item a:focus {
    color: ${colors.gold};
    text-decoration: underline;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    gap: 0.5rem;
    background-color: ${colors.white};
    border-radius: 10px;
    max-width: 32rem;
    width: 100%;
    box-shadow: 0 6px 28px ${colors.shadowSoft};

    .input-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 0.4rem;
    }

    label {
      font-size: 1rem;
      font-weight: 500;
      color: ${colors.blueMid};
      margin-bottom: 0.3rem;
    }

    .input-box {
      display: flex;
      align-items: center;
      background: ${colors.white};
      border-radius: 6px;
      padding: 0 10px;
      border: 1.5px solid ${colors.goldSoft};
      transition: border 0.2s;
      &:focus-within {
        border: 1.5px solid ${colors.goldMid};
      }
    }

    .icon-input {
      color: ${colors.goldMid};
      font-size: 1.2rem;
      margin-right: 10px;
    }

    input,
    textarea {
      flex: 1;
      border: none;
      font-size: 1rem;
      color: ${colors.blueDeep};
      background: transparent;
      outline: none;
      padding: 0.4rem 0;
      &::placeholder {
        color: ${colors.goldSoft};
        opacity: 1;
      }
    }

    textarea {
      border-radius: 6px;
      border: 1.5px solid ${colors.goldSoft};
      padding: 5px;
      min-height: 110px;
      font-size: 1rem;
      resize: none;
      background: ${colors.whiteSoft};
      &:focus {
        border: 1.5px solid ${colors.goldMid};
      }
    }

    .message {
      margin-top: 10px;
      padding: 12px;
      border-radius: 6px;
      text-align: center;
      font-size: 1rem;
      font-weight: 500;
    }
    .success {
      background-color: ${colors.goldSoft};
      color: ${colors.blueDark};
    }
    .error {
      background-color: ${colors.goldMid};
      color: ${colors.white};
    }
    .sending {
      background-color: ${colors.blueMid};
      color: ${colors.white};
    }
  }
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;
