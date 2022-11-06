import styled from "styled-components";

export const IDCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: url(./images/background-card.png) no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;
  width: 97%;
  justify-content: space-around;
  min-height: 638px;
  height: 90%;
  border-radius: 9px;
  padding-bottom: 20px;

  @media (max-width: 600px) {
    height: 300px;
    min-height: auto;
    max-height: 638px;
  }
  @media (max-width: 280px) {
    padding-top: 15px;
  }

  @media (max-width: 250px) {
    padding-bottom: 45px;
  }
`;

export const IDCardBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  width: 95%;
  padding-top: 25px;

  & h1 {
    font-size: 20px;
    text-align: center;
    @media (min-width: 500px) and (max-width: 1200px) {
      font-size: 16px;
    }

    @media (max-width: 600px) {
      font-size: 10px;
    }

    @media (min-width: 220px) and (max-width: 600px) {
      font-size: 8px;
    }
  }

  & .img-flag {
    max-width: 175px;
    max-height: 103px;
    @media (max-width: 600px) {
      max-width: 50px;
      max-height: 60px;
    }
  }

  &:after {
    content: "";
    width: 100%;
    height: 4px;
    background-color: #4bb1f1;
    position: absolute;
    top: calc(100% + 21.5px);

    @media (max-width: 600px) {
      height: 2px;
      top: calc(100% + 5.5px);
    }
  }

  & .union {
    align-self: center;
    width: 66px;
    height: 44px;

    @media (max-width: 600px) {
      width: 40px;
      height: 25px;
    }
  }

  /* @media (max-width: 600px) {
    padding-top: 10%;
  } */
`;

export const VirtualID = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    height: auto;
  }
  & h1 {
    font-size: 21px;
    width: 100%;
    margin-top: 30px;
    @media (min-width: 220px) and (max-width: 700px) {
      font-size: 16px;
    }

    @media (max-width: 600px) {
      margin-top: 18px;
      font-size: 10px;
      max-width: 401px;
      width: 100%;
    }

    @media (min-width: 220px) and (max-width: 600px) {
      font-size: 8px;
    }
  }

  & .virtual-box {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    max-width: 100%;
    width: 100%;

    @media (max-width: 400px) {
      margin-top: 15px;
      height: 100%;
      width: 100%;
    }
    @media (max-width: 600px) {
      margin-top: 0px;
    }
    & > div:first-of-type {
      & h4 {
        font-size: 18px;
        font-weight: normal;
        margin-top: 15px;

        @media (min-width: 220px) and (max-width: 699px) {
          font-size: 12px;
        }

        @media (max-width: 600px) {
          font-size: 9px;
          text-align: center;
        }
      }

      & p {
        font-size: 20px;
        font-weight: bold;
        margin-top: 15px;
        @media (min-width: 220px) and (max-width: 699px) {
          font-size: 10px;
        }
      }
    }
    & .img-user {
      max-width: 240px;
      width: 100%;
      max-height: 265px;
      height: 100%;
      padding: 5px;
      background-color: white;
      margin-top: 10px;

      @media (min-width: 700px) and (max-width: 1200px) {
        width: 90%;
        height: 50%;
      }

      @media (min-width: 499px) and (max-width: 699px) {
        height: 50%;
      }

      @media (max-width: 600px) {
        max-width: 90px;
        height: 70px;
        object-fit: contain;
      }
    }
  }
`;

export const boxCard = styled.div`
  display: flex;
  flex-direction: column !important;
  justify-content: space-evenly;
  flex-direction: row;
  width: 76%;

  @media (max-width: 600px) {
    justify-content: flex-start;
  }

  @media (min-width: 480px) and (max-width: 1200px) {
    margin-inline-start: 20px;
  }

  @media (min-width: 1200px) {
    margin-inline-start: 20px;
  }

  @media (max-width: 600px) {
    width: 60%;
    min-height: 183px;
  }

  & h3 {
    font-size: 20px;
    font-weight: bold;
    @media (max-width: 600px) {
      font-size: 10px;
    }

    @media (min-width: 220px) and (max-width: 600px) {
      font-size: 8px;
    }
  }

  & h4 {
    font-size: 18px;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.7);

    @media (max-width: 600px) {
      font-size: 8px;
      width: 100%;
      min-width: 300px;
    }

    @media (min-width: 220px) and (max-width: 600px) {
      width: 167px;
    }

    @media (max-width: 250px) {
      width: 150px;
    }
  }

  & .box-data {
    margin-top: 7px;
    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-inline-start: 10px;
      width: 200px;
    }

    & div {
      @media (max-width: 600px) {
        margin-bottom: -10px;
      }
    }

    & div:not(:first-of-type) {
      margin-top: 7px;
    }

    &:last-of-type {
      & h4 {
        @media (max-width: 600px) {
          min-width: 125px;
        }
      }
    }

    & .national {
      text-transform: uppercase;
    }
  }
`;

export const QrCode = styled.img`
  width: 102px;
  height: 102px;
  padding: 5px;
  background-color: #fff;

  @media (min-width: 499px) and (max-width: 699px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 600px) {
    width: 45px;
    height: 45px;
    padding: 3px;
  }

  @media (max-width: 375px) {
    width: 35px;
    height: 35px;
  }
`;

export const boxImageUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
