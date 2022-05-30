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

    @media (max-width: 760px) {
      justify-content: flex-start;
      padding: 10px;
    }

    & p {
      font-size: 14px;
      max-width: 356px;
      width: 100%;
      margin-top: 23px;
      line-height: 1.5;
      @media (max-width: 400px) {
        width: 90%;
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

        & a {
          color: #4b4b4b;
        }
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
          margin-inline-end: 5px;
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
    width: 100%;
    height: 1px;
    background: rgba(101, 101, 101, 0.46);
    border-radius: 25px;
    position: absolute;
    bottom: -16%;
  }
  & .social {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 50%;
    & > a {
      background-color: rgba(38, 52, 66, 0.2);
      margin-inline-start: 10px;

      & img {
        width: 22px;
      }
      &:first-of-type > img {
        width: 12px;
      }

      &:hover {
        background: #1976d2;
      }
    }
    @media (max-width: 900px) {
      display: flex;
    }
    @media (max-width: 760px) {
      justify-content: center;
    }
  }
  @media (max-width: 760px) {
    justify-content: center;
  }
`;

export const copyRight = styled.p`
  font-size: 14px;
  color: #000000;
  align-self: center;
  margin: 22px 0 24px;
`;

export const boxMail = styled.div`
  background: #ff5858 !important;
  max-width: 68px;
  width: 100%;
  cursor: pointer;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & svg {
    fill: white;
    padding-inline-end: 5px;
    font-size: 20px;
  }
`;

export const containerMail = styled.div`
  display: flex;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  & div:first-child {
    border: 1px solid #fff;
    width: 303px;
    border-radius: 25px;
    background-color: #ffffff;

    display: flex;
    justify-content: space-between;
    height: 50px;
    & input {
      border: none;
      background-color: inherit;
      padding-inline-start: 2em;
      border-radius: 25px;
    }

    & img {
      position: relative;
      z-index: 22;
      margin-inline-start: 20px;
    }
  }

  & h3 {
    color: red;
    font-size: 13px;
    font-weight: normal;
    margin-top: 5px;
  }
`;
