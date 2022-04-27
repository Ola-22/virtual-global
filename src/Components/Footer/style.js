import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: rgba(28, 28, 28, 0.2);
  flex-wrap: wrap;
  color: #4b4b4b;
  min-height: 461px;
  & h6 {
    color: #4bb1f1;
    font-size: 16px;
    font-weight: normal;
  }
  & li {
    list-style: none;
    font-size: 14px;
  }
  & > .top-footer {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    & p {
      font-size: 14px;
      max-width: 356px;
      width: 100%;
      margin-top: 23px;
      line-height: 1.5;
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
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  flex-wrap: wrap;
  &::after {
    content: "";
    max-width: 1140px;
    width: 100%;
    height: 1px;
    background: rgba(101, 101, 101, 0.46);
    border-radius: 25px;
    position: absolute;
    bottom: -36px;
  }
  & .social {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 517px;
    width: 100%;
    & > a {
      background-color: rgba(38, 52, 66, 0.2);

      & img {
        width: 22px;
      }
      &:first-of-type > img {
        width: 12px;
      }
    }
    @media (max-width: 900px) {
      display: flex;
    }
  }

  & div:first-of-type {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #fff;
    width: 303px;
    height: 50px;
    border-radius: 25px;
    background-color: #ffffff;
    margin-left: -2%;
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
`;

export const copyRight = styled.p`
  font-size: 14px;
  color: #000000;
  align-self: center;
  margin: 22px 0 24px;
`;
