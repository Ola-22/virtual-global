import styled from "styled-components";

export const VirtualState = styled.div`
  display: flex;
  background: url(./images/Virtual.png) no-repeat;
  height: auto;
  background-size: cover;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  /*  */

  @media (max-width: 900px) {
    background-size: 10000px;
    padding-bottom: 52px;
  }

  & > div:first-of-type {
    position: relative;
    & img {
      margin-top: 5%;
      z-index: 22;
      position: relative;
      max-width: 100%;
      width: 100%;
      @media (max-width: 600px) {
        max-width: 343px;
        width: 100%;
      }
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
      @media (max-width: 600px) {
        display: none;
      }
    }
  }
  & > div:last-of-type {
    @media (max-width: 600px) {
      padding-bottom: 10px;
    }
    & h6 {
      font-size: 25px;
      color: #222222;
      word-wrap: break-word;
      width: 100%;
      max-width: 622px;
      font-weight: normal;

      & * {
        @media (max-width: 700px) {
          font-size: 15px !important;
          text-align: center;
        }

        @media (max-width: 400px) {
          font-size: 12px !important;
        }
      }

      @media (min-width: 899px) and (max-width: 1100px) {
        width: 90%;
      }
    }
    & > a {
      max-width: 175px;
      height: 55px;
      background-color: #ffffff;
      border-radius: 88px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: #000000;
      margin-top: 33px;
      text-transform: capitalize;
      text-align: center;
      @media (max-width: 900px) {
        margin-top: 10px;
        width: 150px;
        height: 50px;
        margin-bottom: 10px;
        margin: auto;
        margin-top: 6%;
      }
      &:hover {
        color: #2395db;
        transition: 0.5s ease-out;
      }
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const virtualBox = styled.div`
  @media (max-width: 900px) {
    max-width: 90%;
  }

  @media (max-width: 600px) {
    max-width: 90%;
  }
`;
