import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding-top: 70px;
  padding-bottom: 121px;
  background: linear-gradient(
      to right,
      rgba(241, 242, 245, 0.9),
      rgba(241, 242, 245, 0.9)
    ),
    url(/images/background.png);
  background-size: cover;

  & h1 {
    font-size: 36px;
    text-align: center;
    text-transform: uppercase;
    position: relative;
    margin-bottom: 89px;
    @media (max-width: 500px) {
      font-size: 20px;
    }

    &::after {
      content: "";
      width: 91px;
      height: 5px;
      color: #4bb1f1;
      background-color: #4bb1f1;
      margin: auto;
      display: flex;
    }
  }
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  margin-bottom: 10% !important;
  background: #fff;

  margin-inline-start: 28px;
  margin-inline-end: 28px;

  @media (max-width: 970px) {
    flex-wrap: wrap;
  }
  @media (max-width: 800px) {
    margin: auto;
  }

  & .card-box {
    display: flex;
    align-items: center;
    flex-flow: column;
    justify-content: space-evenly;
    width: 100%;
    max-width: 90%;
    min-height: 400px;
    height: 100%;

    & img {
      width: 142px;
      height: 142px;
      object-fit: cover;
      border-radius: 50%;
    }

    & h3 {
      font-size: 20px;
      @media (max-width: 500px) {
        font-size: 18px;
      }
    }

    & p {
      line-height: 1.5;
      text-align: center;
      font-size: 16px;
      font-weight: normal;

      @media (max-width: 500px) {
        font-size: 14px;
      }
    }
  }

  .two {
    @media (max-width: 1200px) {
      margin-top: 10px;
    }
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  & span {
    color: #f4c01e;

    & svg {
      width: 22px;
      height: 21px;
    }
  }
`;

export const slideMain = styled.div`
  margin-inline-start: 5%;
  &:last-of-type {
    margin-inline-end: 5%;
  }

  &:first-child {
    margin-inline-start: 0px;
  }

  & .slick-dots {
    & li {
      width: 13px;
      height: 13px;
      background: white;
      border-radius: 50%;
      &.slick-active {
        background-color: black;

        & button:before {
          color: black;
        }
      }

      & button:before {
        color: white;
      }
    }
  }
`;
