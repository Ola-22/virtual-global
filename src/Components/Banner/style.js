import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  padding-bottom: 22px;

  & > div:first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    flex-direction: column;
    max-width: 212px;
    width: 100%;
    height: 71px;
    background-color: #ffffff;
    border-radius: 7px;
    align-content: center;
    margin: 15px 14px 25px 0;

    & h4 {
      color: rgba(0, 0, 0, 0.6);
      font-size: 11px;
    }
  }

  & > div:last-of-type {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    & img {
      z-index: 5;

      @media (max-width: 500px) {
        max-width: 90%;
        margin: auto;
      }
    }
  }

  & .social {
    @media (max-width: 600px) {
      width: 100%;
      justify-content: space-evenly;
      align-items: center;
      display: flex;
      flex-direction: row;
    }
  }
`;

export const BackGround = styled.div`
  margin-top: 2em;

  & a {
    z-index: 22;
    position: relative;
  }
  & > span {
    position: absolute;
    width: 419px;
    max-width: 100%;
    opacity: 0.4;
    z-index: 2;
    height: 410px;
    border-radius: 20px;
    background-color: #4bb1f1;
    transform: rotate(-5deg);

    @media (max-width: 500px) {
      display: none;
    }
  }

  & > img {
    position: sticky;
    max-width: 100%;
    height: auto;
  }
`;

export const sliderMain = styled.div`
  background: linear-gradient(
      to right,
      rgba(248, 248, 248, 0.8),
      rgba(248, 248, 248, 0.9)
    ),
    url(/images/background.png);
  background-size: cover;
  max-height: 900px;
  height: 100%;
`;

export const contentBanner = styled.h1`
  max-width: 650px;
  width: 100%;

  & span {
    font-size: 30px;
    text-transform: uppercase;
    color: #ffffff;
    background-color: #2f2f2f;
    border-radius: 5px;
    line-height: 65px;
    padding: 10px;
    box-decoration-break: clone;

    @media (max-width: 700px) {
      font-size: 20px;
    }
  }

  @media (max-width: 700px) {
    text-align: center;
  }
`;
