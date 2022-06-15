import styled from "styled-components";

export const IDCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: url(/images/background-pro.png) no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;
  width: 94%;
  justify-content: space-around;
  min-height: 638px;
  height: 90%;
  border-radius: 9px;
  padding-bottom: 20px;

  @media (max-width: 500px) {
    padding-bottom: 0;
    max-height: 480px;
    min-height: 445px;
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

    @media (max-width: 500px) {
      font-size: 12px;
    }
  }

  & .img-flag {
    max-width: 175px;
    max-height: 103px;
    @media (max-width: 500px) {
      max-width: 80px;
      max-height: 70px;
    }
  }

  &:after {
    content: "";
    width: 100%;
    height: 4px;
    background-color: #4bb1f1;
    position: absolute;
    top: calc(100% + 21.5px);
  }

  & .union {
    align-self: flex-start;
    margin-top: 9px;

    @media (max-width: 500px) {
      width: 50px;
      height: 30px;
    }
  }

  @media (max-width: 500px) {
    padding-top: 0;
  }
`;

export const VirtualID = styled.div`
  width: 95%;
  & h1 {
    font-size: 21px;
    margin-top: 30px;
    @media (min-width: 375px) and (max-width: 700px) {
      font-size: 16px;
      margin-top: 0;
    }
    /* 
    @media (max-width: 700px) {
      margin-top: 30px;
    } */
  }

  & .virtual-box {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    @media (max-width: 400px) {
      margin-top: 15px;
      max-height: 226px;
      height: 100%;
    }
    & > div:first-of-type {
      & h4 {
        color: #4bb1f1;
        font-size: 18px;
        font-weight: normal;
        margin-top: 34px;
        margin-bottom: 9px;
        @media (min-width: 375px) and (max-width: 699px) {
          font-size: 14px;
        }
      }

      & p {
        font-size: 20px;
        font-weight: normal;

        @media (min-width: 375px) and (max-width: 699px) {
          font-size: 14px;
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

      @media (min-width: 700px) and (max-width: 1200px) {
        width: 90%;
        height: 50%;
      }

      @media (min-width: 499px) and (max-width: 699px) {
        width: 80%;
        height: 50%;
      }

      @media (max-width: 500px) {
        width: 80px;
        height: 80px;
      }

      @media (max-width: 375px) {
        width: 70px;
        height: 70px;
      }
    }
  }
`;

export const boxCard = styled.div`
  display: flex;
  flex-direction: column !important;
  justify-content: space-between;
  flex-direction: row;
  width: 76%;

  & div {
    margin-bottom: 8px;
  }

  @media (min-width: 480px) and (max-width: 1200px) {
    margin-inline-start: 20px;
  }

  @media (max-width: 500px) {
    flex-direction: row !important;
  }

  & h3 {
    font-size: 20px;
    font-weight: bold;
    @media (max-width: 699px) {
      font-size: 14px;
    }
  }

  & h4 {
    font-size: 18px;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.7);

    @media (max-width: 699px) {
      font-size: 12px;
    }
  }

  & .box-data:last-of-type {
    @media (max-width: 500px) {
      margin-inline-start: 20px;
    }
  }
`;

export const QrCode = styled.img`
  width: 102px;
  height: 102px;

  @media (min-width: 499px) and (max-width: 699px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 500px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 375px) {
    width: 35px;
    height: 35px;
  }
`;
