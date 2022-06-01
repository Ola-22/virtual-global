import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;

  /* justify-content: space-evenly; */
  justify-content: space-evenly;
  background-color: #f3f3f3;
  flex-wrap: wrap;
  color: #4b4b4b;
  min-height: 390px;
  align-items: center;
  justify-content: center;
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
    max-width: 100%;
    width: 100%;
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

      @media (min-width: 570px) and (max-width: 760px) {
        padding-inline-start: 8%;
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

      @media (min-width: 570px) and (max-width: 480px) {
        padding-inline-start: 15%;
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
  max-width: 100%;
  width: 100%;
  &::after {
    content: "";
    width: 89%;
    height: 1px;
    background: rgba(101, 101, 101, 0.46);
    border-radius: 25px;
    position: absolute;
    bottom: -50%;

    @media (max-width: 800px) {
      display: none;
    }
  }
  & .social {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 50%;
    & > a {
      background-color: rgba(38, 52, 66, 0.05);
      margin-inline-start: 10px;
      max-width: 47px;
      width: 100%;
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
    @media (max-width: 500px) {
      max-width: 90%;
      width: 100%;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 800px) {
    justify-content: center;
    flex-direction: column;
    max-width: 90%;
  }
`;

export const copyRight = styled.p`
  font-size: 14px;
  color: #000000;
  align-self: center;
  margin-top: 5%;

  @media (max-width: 800px) {
    margin-top: 3%;
    margin-bottom: 20px;
  }
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

export const AboutContainer = styled.div`
  max-width: 35%;
  width: 100%;

  @media (max-width: 760px) {
    max-width: 60%;
  }
`;

export const AccessContainer = styled.div`
  max-width: 16%;
  width: 100%;

  @media (max-width: 760px) {
    max-width: 40%;
  }
`;
