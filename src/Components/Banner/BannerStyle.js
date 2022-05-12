import styled from "styled-components";

export const bannerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 31px;
  height: 100%;
  padding-top: 15px;

  & .box-one {
    z-index: 22;

    @media (max-width: 960px) {
      margin-left: 2%;
    }
    & > p {
      font-size: 16px;
      text-transform: uppercase;
      color: #ffffff;
      background-color: #2f2f2f;
      width: 500px;
      /* max-width: max-content; */
      border-radius: 5px;
      padding: 10px;
      word-break: break-word;
      margin-top: 5px;

      @media (max-width: 1060px) {
        font-size: 14px;
      }

      @media (max-width: 960px) {
        font-size: 12px;
      }
    }

    & .flag-box {
      max-width: 558px;
      width: 130%;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-height: 473px;
      height: 100%;
      justify-content: space-evenly;
      margin-top: 24px;
      background: no-repeat url("/images/backgroundBanner.png"), #ffffff;
      background-size: contain;
      background-position: center;
      box-shadow: 0 9px 16px rgba(0, 0, 0, 0.05);
      border-radius: 7px;
      & div {
        display: flex;
        justify-content: space-between;
        width: 90%;

        & h4 {
          text-transform: capitalize;
          font-size: 14px;
          font-weight: normal;
        }
        & p {
          font-size: 14px;
          color: #2d98da;
        }
      }

      & img {
        align-self: center;
      }

      & h1 {
        font-size: 17px;
        color: #4bb1f1;
        width: 90%;
      }
      @media (max-width: 1300px) {
        width: 90%;
      }
    }

    & .virtual {
      max-width: 558px;
      width: 130%;
      height: 473px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ffffff;
      border-radius: 7px;
      margin-top: 24px;

      & div {
        position: relative;
        & img {
          max-width: 326px;
          width: 100%;
          max-height: 205px;
          height: 100%;
          transform: rotate(-15deg);
          box-shadow: 0 28px 21px rgba(0, 0, 0, 0.16);
          z-index: 22;
          position: relative;

          @media (max-width: 1060px) {
            width: 80%;
            margin: auto;
          }
        }

        &::after {
          content: "";
          max-width: 317px;
          width: 100%;
          max-height: 192px;
          height: 100%;
          background-color: rgba(75, 177, 241, 0.4);
          position: absolute;
          transform: rotate(-5deg);
          left: 3%;
          top: 5%;
          border-radius: 13px;
          @media (max-width: 600px) {
            display: none;
          }

          @media (max-width: 1060px) {
            width: 80%;
            transform: rotate(-5deg);
            left: 10%;
          }
        }
      }

      @media (max-width: 1300px) {
        width: 90%;
      }
    }
  }

  @media (max-width: 960px) {
    justify-content: flex-start;
    & .social {
      position: absolute;
      right: 43%;
      top: 12%;
    }

    & .number-citizens {
      position: absolute;
      top: 2%;
      right: 43%;
    }
  }
`;

export const NumberVirtual = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 10%;

  & div:first-of-type {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 212px;
    width: 100%;
    height: 71px;
    background-color: #ffffff;
    border-radius: 7px;

    & h4 {
      color: rgba(47, 47, 47, 0.6);
      font-size: 11px;
    }

    & h2 {
    }

    @media (max-width: 960px) {
      max-width: 150px;
      text-align: center;
    }
  }

  @media (max-width: 1300px) {
    width: fit-content;
  }
`;
