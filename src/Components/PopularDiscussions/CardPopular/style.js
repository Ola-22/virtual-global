import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* flex-wrap: wrap; */
  margin-bottom: 121px;
  /* width: 90%; */

  @media (max-width: 970px) {
    flex-wrap: wrap;
  }

  & .card-box {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;

    padding: 42px;
    max-width: 565px;
    width: 100%;
    & p {
      font-size: 16px;
      margin-top: 23px;
    }

    @media (max-width: 1200px) {
      padding: 20px;
      max-width: 470px;
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
      margin-left: 11px;
    }

    &:last-child {
      margin-left: 40px;
    }
  }
`;
