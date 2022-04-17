import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #1c1c1c;
  flex-wrap: wrap;
  padding-top: 52px;
  color: white;
  & h6 {
    color: #4bb1f1;
    font-size: 16px;
    font-weight: normal;
  }
  & li {
    list-style: none;
    font-size: 14px;
  }
  & > div:first-of-type {
    & p {
      font-size: 14px;
      max-width: 356px;
      width: 100%;
      margin-top: 23px;
      line-height: 1.5;
    }
    & div {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-around;
      border: 1px solid #fff;
      width: 303px;
      height: 50px;
      border-radius: 25px;
      margin-top: 39px;
      &::after {
        content: "";
        width: 68px;
        height: 48px;
        background: #ff5858;
        border-radius: 25px;
        position: absolute;
        top: 0;
        left: 77.4%;
      }
      & input {
        border: none;
        background-color: inherit;
      }

      & img {
        position: relative;
        z-index: 22;
        margin-left: 20px;
      }
    }
  }

  & > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    width: 179px;

    & .box {
      display: flex;
      justify-content: space-between;
      line-height: 2;
      margin-top: 22px;
    }
  }

  & > div:last-of-type {
    & .contact-box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 22px;
      line-height: 1.5;
      & div {
        display: flex;
      }
      & img {
        width: 18px;
        height: 18px;
        margin-right: 5px;
      }
    }
  }
`;
