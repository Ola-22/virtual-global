import styled from "styled-components";

export const AboutContainer = styled.div`
  /* background: linear-gradient(
      to right,
      rgba(248, 248, 248, 0.8),
      rgba(248, 248, 248, 0.9)
    ),
    url(/images/background.png); */
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 29px;
  width: 100%;

  & .box {
    background-color: #ffffff;
    width: 94%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin-top: 27px;
    & img {
      max-height: 300px;
      height: 100%;
    }
    & h1 {
      font-size: 22px;
      margin-top: 2%;
      width: 100%;
      margin-bottom: 42px;
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
    @media (max-width: 1200px) {
      width: 95%;
    }
  }
`;

export const BoxAbout = styled.div`
  width: 100%;
  min-height: 443px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 92px;

  & img {
    /* max-width: 756px; */
    width: 80%;
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
