import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 121px;

  & .card-box {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 42px;
    width: 565px;
    & p {
      width: 488px;
      font-size: 16px;
      margin-top: 23px;
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
