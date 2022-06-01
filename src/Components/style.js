import styled from "styled-components";

export const IDCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: url(/images/background-pro.png) no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;
  width: 80%;
  justify-content: space-around;
  min-height: 375px;
  height: 90%;
  border-radius: 9px;
  padding-bottom: 23px;

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 400px) {
    max-height: 420px;
    width: 96%;
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
    font-size: 13px;
  }

  &:after {
    content: "";
    width: 100%;
    height: 4px;
    background-color: #4bb1f1;
    position: absolute;
    top: calc(100% + 21.5px);
  }
`;

export const VirtualID = styled.div`
  width: 95%;
  & h1 {
    font-size: 13px;
    margin-top: 30px;
    margin-inline-start: 4%;
    @media (max-width: 375px) {
      margin-top: 25px;
    }
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
        max-width: 177px;
        width: 100%;
        margin-bottom: 6px;
        @media (max-width: 400px) {
          font-size: 12px;
        }
      }
    }
    & .img-user {
      /* border-radius: 50%; */
      @media (max-width: 500px) {
        width: 50px;
        height: 50px;
      }
    }

    @media (max-width: 650px) {
      /* flex-direction: column; */
    }
  }
`;

export const boxCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  width: 76%;
  margin-inline-start: 10px;

  & h4,
  & h3 {
    font-weight: normal;
    font-size: 14px;

    @media (max-width: 400px) {
      font-size: 11px;
    }
  }

  & h4 {
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 5px;
  }
`;
