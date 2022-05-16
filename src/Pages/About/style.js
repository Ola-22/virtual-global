import styled from "styled-components";

export const AboutContainer = styled.div`
  background: linear-gradient(
      to right,
      rgba(248, 248, 248, 0.8),
      rgba(248, 248, 248, 0.9)
    ),
    url(/images/background.png);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 29px;

  & .box {
    background-color: #ffffff;
    max-width: 1140px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin-top: 27px;
    & img {
      max-width: 400px;
      max-height: 300px;
      height: 100%;
      width: 100%;
    }
    & h1 {
      font-size: 22px;
      align-self: flex-start;
      margin: 55px 0 42px 4%;
    }

    & > p {
      font-size: 18px;
      max-width: 1043px;
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
      width: 90%;
    }
  }
`;

export const BoxAbout = styled.div`
  border: 1px solid #d6d6d6;
  width: 90%;
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
    width: 90%;
    min-height: 375px;
    height: 100%;
  }
`;
