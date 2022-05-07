import styled from "styled-components";

export const IDCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: url(/images/background-pro.png);
  background-size: contain;
  align-items: center;
  justify-content: center;
  /* padding: 17px 42px; */
  max-width: 525px;
  width: 100%;
  justify-content: space-around;
  max-height: 500px;
  height: 90%;
  border-radius: 9px;
  padding-bottom: 23px;
`;

export const IDCardBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  width: 95%;
  padding-top: 17px;
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
    margin-top: 40px;
    margin-left: 4%;
  }

  & .virtual-box {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    & > div:first-of-type {
      & h4 {
        color: #4bb1f1;
        max-width: 177px;
        width: 100%;
        margin-top: 31px;
        margin-bottom: 6px;
      }
    }
  }
`;

export const boxCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h4,
  & h3 {
    font-weight: normal;
    font-size: 14px;
  }

  & h4 {
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 5px;
  }
`;
