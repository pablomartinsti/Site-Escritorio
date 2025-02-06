import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem 0;

  .box-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
  }

  .slick-slider {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .slick-list {
    overflow: hidden;
    padding: 0 10px;
  }

  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    padding: 10px;
  }

  .slick-prev,
  .slick-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: ${colors.yellow};
    border: none;
    width: 40px;
    height: 40px;
    z-index: 10;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 2rem;
    color: ${colors.yellow};
  }

  .slick-prev {
    left: -50px;
  }

  .slick-next {
    right: -50px;
  }

  .slick-prev:hover,
  .slick-next:hover {
    color: #000;
  }

  .slick-dots {
    bottom: -25px;
  }

  .slick-dots li button:before {
    color: #d1aa34;
    font-size: 12px;
  }

  .slick-dots li.slick-active button:before {
    color: #000;
  }

  @media (max-width: 768px) {
    .slick-prev,
    .slick-next {
      width: 30px;
      height: 30px;
    }

    .slick-prev {
      left: -30px;
    }

    .slick-next {
      right: -30px;
    }

    .slick-dots li button:before {
      font-size: 10px;
    }
  }

  @media (max-width: 480px) {
    .slick-prev,
    .slick-next {
      width: 25px;
      height: 25px;
    }

    .slick-dots li button:before {
      font-size: 10px;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  h2 {
    font-weight: 400;
    margin-bottom: 2rem;
    line-height: 1.6;
    padding: 1rem 0;
    text-align: center;

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
`;
