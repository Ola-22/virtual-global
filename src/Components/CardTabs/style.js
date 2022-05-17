import styled from "styled-components";

export const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 765px;
  width: 100%;
  min-height: 287px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 0 42px;
  margin-bottom: 15px;
  & h6 {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: normal;
  }
  & h3 {
    font-size: 22px;
    margin: 12px 0 23px;
    color: #000000;
    font-weight: normal;
  }
  & p {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
  }

  & .box {
    display: flex;
    justify-content: space-around;
    max-width: 689px;
    width: 100%;
    background-color: #f9f9f9;
    border-radius: 10px;
    height: 78px;
    margin-top: 8px;
    & div {
      display: flex;
      align-items: center;
      & span {
        font-size: 18px;
        margin-left: 14.5px;
      }
      &:last-of-type {
        margin-inline-start: 42px;
      }
    }

    & button {
      max-width: 149px;
      width: 100%;
      height: 45px;
    }
    @media (max-width: 600px) {
      width: 90%;
      padding: 0 10px;
    }
  }

  @media (min-width: 400px) and (max-width: 1300px) {
    width: 90%;
  }
`;
