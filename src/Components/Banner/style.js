import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #f8f8f8;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  padding-bottom: 22px;
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
    margin: 15px 14px 25px 0;

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
      margin-top: 3em;

      @media (max-width: 900px) {
        font-size: 20px;
        height: 100px;
        color: black;
        background-color: #ffffff;
      }
    }

    & img {
      z-index: 5;
    }

    @media (max-width: 900px) {
      flex-direction: column-reverse;
    }
  }
`;

export const BackGround = styled.div`
  margin-top: 2em;
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
  }

  & > img {
    position: sticky;
    max-width: 100%;
    height: auto;
  }
`;
