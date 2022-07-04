import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: #f8f8f8;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 29px;
  width: 100%;

  & .box {
    background-color: #ffffff;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin-top: 27px;
    /* padding-bottom: 92px; */
    & img {
      min-height: 300px;
      height: 100%;
      width: 100%;

      @media (max-width: 700px) {
        max-width: 375px;
        object-fit: contain;
        width: 100%;
      }
    }
    & h1 {
      font-size: 22px;
      margin-top: 58px;
      width: 100%;
      margin-bottom: 42px;

      @media (max-width: 500px) {
        font-size: 20px;
      }
    }

    & > p {
      font-size: 18px;
      width: 100%;
      @media (max-width: 1200px) {
        width: 90%;
      }
      &:not(:first-of-type) {
        margin-top: 2%;
      }

      &:last-of-type {
        margin-bottom: 15%;
      }
    }
    /* @media (max-width: 1200px) {
      width: 95%;
    } */

    & .container {
      width: 92%;
      & * {
        @media (max-width: 500px) {
          font-size: 12px !important;
        }
      }
    }
  }

  @media (max-width: 400px) {
    background-color: #ffffff;
  }
`;

export const BoxAbout = styled.div`
  width: 100%;
  /* min-height: 443px; */
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 92px;

  & img {
    width: 100%;
    min-height: 375px;
    height: 100%;
  }
`;

export const Main = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  width: 100%;
  height: 100%;
  & .box-virtual {
    max-width: 1170px;
    width: 100%;
  }
  & .right {
    max-width: 110px;
    width: 100%;
  }
`;
