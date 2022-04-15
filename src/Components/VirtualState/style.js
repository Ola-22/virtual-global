import styled from "styled-components";

export const VirtualState = styled.div`
  display: flex;
  background: url(/images/Virtual.png) no-repeat;
  height: auto;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  /* flex-wrap: wrap; */

  & > div:first-of-type {
    position: relative;
    & img {
      margin-top: 5%;
      z-index: 22;
      position: relative;
    }
    &::after {
      content: "";
      width: 343px;
      height: 216px;
      border: 1px dashed #ffffff;
      position: absolute;
      transform: rotate(-30deg);
      left: 10%;
      top: 20%;
      border-radius: 13px;
    }
  }

  & > div:last-of-type {
    & h6 {
      font-size: 25px;
      color: #ffffff;
      word-wrap: break-word;
      width: 100%;
      max-width: 622px;
      @media (max-width: 500px) {
        font-size: 15px;
      }
    }

    & > a {
      max-width: 234px;
      height: 64px;
      background-color: #ffffff;
      border-radius: 88px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: #000000;
      margin-top: 33px;
      @media (max-width: 900px) {
        margin-top: 10px;
        width: 150px;
        height: 50px;
        margin-bottom: 10px;
      }

      @media (max-width: 500px) {
        margin: auto;
        margin-bottom: 10px;
      }
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;
