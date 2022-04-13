import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #f8f8f8;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  background: linear-gradient(
      to right,
      rgba(248, 248, 248, 0.8),
      rgba(248, 248, 248, 0.9)
    ),
    url(/images/background.png);

  & > div:first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    flex-direction: column;
    width: 212px;
    height: 71px;
    background-color: #ffffff;
    border-radius: 7px;
    align-content: center;
    margin: 15px 14px 0;

    & h4 {
      color: rgba(0, 0, 0, 0.6);
      font-size: 11px;
    }
  }

  & > div:last-of-type {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    & p {
      width: 350px;
      font-size: 30px;
      text-transform: uppercase;
      color: #ffffff;
      background-color: #000000;
      height: 200px;
      word-break: break-word;
    }

    & img {
      z-index: 5;
    }
  }
`;

export const BackGround = styled.div`
  & > span {
    position: absolute;
    width: 419px;
    opacity: 0.4;
    z-index: 2;
    height: 410px;
    border-radius: 20px;
    background-color: #4bb1f1;
    transform: rotate(-10deg);
  }

  & > img {
    position: sticky;
    max-width: 100%;
    height: auto;
  }
`;
