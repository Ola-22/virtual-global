import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media (max-width: 970px) {
    flex-wrap: wrap;
  }

  & .card-box {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 300px;
    justify-content: space-around;
    padding: 42px;
    width: 100%;
    max-width: 80%;
    & h3 {
      font-size: 22px;
      text-transform: capitalize;
      margin-bottom: 2%;
      height: 50px;
      @media (max-width: 500px) {
        font-size: 14px;
      }
    }
    & p {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.6);
      font-weight: bold;
      height: 98px;
      overflow: hidden;
      @media (max-width: 500px) {
        font-size: 12px;
      }
    }

    @media (max-width: 1200px) {
      padding: 20px;
      max-width: 470px;
    }

    @media (max-width: 550px) {
      width: 90%;
    }
  }

  .two {
    @media (max-width: 1200px) {
      margin-top: 10px;
    }
  }
`;

export const LikeCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 29px;

  & div {
    display: flex;
    align-items: center;
    & h6 {
      font-size: 18px;
      font-weight: normal;
      margin-inline-start: 11px;

      @media (max-width: 500px) {
        font-size: 14px;
      }
    }

    &:last-child {
      margin-inline-start: 40px;
    }
  }

  & a > img {
    @media (max-width: 500px) {
      width: 35px;
      height: 35px;
    }
  }
`;
