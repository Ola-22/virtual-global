import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* margin-bottom: 121px; */
  /* width: 90%; */

  @media (max-width: 970px) {
    flex-wrap: wrap;
  }
  /* 
  &:nth-of-type(2) {
    position: absolute;
    top: 74px;
  } */

  & .card-box {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 42px;
    /* max-/: 565px; */
    width: 100%;
    height: 280px;
    max-width: 80%;
    & p {
      font-size: 16px;
      margin-top: 23px;
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
    }

    &:last-child {
      margin-inline-start: 40px;
    }
  }
`;
