import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

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
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 89%;
    width: 100%;
    padding-top: 54px;
    @media (max-width: 760px) {
      /* padding-top: 54px; */
    }
    & p {
      font-size: 14px;
      max-width: 356px;
      width: 100%;
      margin-top: 32px;
      line-height: 1.5;
      /* margin-inline-start: 13.6px; */

      @media (max-width: 500px) {
        width: 90%;
        align-self: flex-start;
      }
    }

    & > div:first-of-type {
      @media (max-width: 500px) {
        min-width: 410px;
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

      @media (max-width: 500px) {
        min-width: 250px;
        margin-top: 5%;
        margin-bottom: 5%;
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

      /* @media (min-width: 570px) and (max-width: 480px) {
        padding-inline-start: 15%;
      } */
    }

    @media (max-width: 500px) {
      flex-direction: column;
      padding-bottom: 2%;
      /* padding-inline-start: 7%; */
      padding-top: 8%;
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
    margin-top: 39px;
  }
`;

export const copyRight = styled.p`
  font-size: 14px;
  color: #000000;
  align-self: center;
  margin-top: 5%;
  margin-bottom: 24px;

  @media (max-width: 800px) {
    margin-top: 3%;
    margin-bottom: 20px;
  }
`;

export const boxMail = styled.div`
  background: #4bb1f1 !important;
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

    @media (max-width: 500px) {
      min-width: 100%;
    }
  }
  & h3 {
    color: red;
    font-size: 13px;
    font-weight: normal;
    margin-top: 5px;
  }

  @media (max-width: 500px) {
    min-width: 90%;
    width: 100%;
    margin-top: 2%;
  }
`;

export const AboutContainer = styled.div`
  max-width: 356px;
  width: 100%;

  @media (max-width: 760px) {
    /* max-width: 60%; */
  }

  & .box-logo {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    margin-top: 29.5px;
    margin-bottom: 39px;
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & .vgs {
        margin-inline-start: 9px;
      }

      & h2 {
        /* font-family: "Bauhaus"; */
        font-size: 20px;
        min-width: 282px;
        width: 100%;

        @media (max-width: 500px) {
          font-size: 16px;
        }
      }

      & p {
        margin-top: 7px;
        margin-inline-start: 0;
        font-size: 11px;
      }

      @media (max-width: 500px) {
        max-width: 87%;
        width: 100%;
        align-self: flex-start;
      }
    }

    @media (max-width: 500px) {
      /* width: 84%;
      margin: auto; */
    }
  }
`;

export const AccessContainer = styled.div`
  max-width: 16%;
  width: 100%;

  @media (max-width: 760px) {
    max-width: 40%;
  }
`;
