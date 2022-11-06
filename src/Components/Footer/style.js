import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
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
    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
  & li {
    list-style: none;
    font-size: 14px;
    @media (max-width: 500px) {
      font-size: 12px;
    }
  }
  & > .top-footer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 89%;
    width: 100%;
    padding-top: 54px;

    & p {
      font-size: 14px;
      max-width: 356px;
      width: 100%;
      margin-top: 32px;
      line-height: 1.5;

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
        /* margin-top: 22px; */
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
    }

    @media (max-width: 500px) {
      flex-direction: column;
      padding-bottom: 2%;
      padding-top: 8%;
    }
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-wrap: wrap;
  max-width: 89%;
  width: 100%;
  &::after {
    content: "";
    width: 100%;
    max-width: 100%;
    height: 1px;
    background: rgba(101, 101, 101, 0.46);
    border-radius: 25px;
    margin-top: 37px;

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
  @media (max-width: 900px) {
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
  margin-top: 2.1%;
  margin-bottom: 24px;

  @media (max-width: 500px) {
    text-align: center;
    font-size: 12px;
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
  justify-content: center;

  @media (max-width: 375px) {
    min-width: 68px;
  }
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
      width: 20px;
      height: 20px;
    }

    @media (max-width: 500px) {
      min-width: auto;
    }

    @media (min-width: 220px) and (max-width: 375px) {
      width: auto;
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
  max-width: 440px;
  width: 100%;

  @media (max-width: 760px) {
    /* max-width: 60%; */
  }

  & .box-logo {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: column;

    margin-top: 29.5px;
    margin-bottom: 39px;
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & img {
        align-self: flex-start;
        width: 54px;
        height: 54px;
      }
      & .vgs {
        margin-inline-start: 9px;
      }

      & h2 {
        font-size: 20px;
        min-width: 282px;
        width: 100%;
        font-weight: normal;

        @media (max-width: 500px) {
          font-size: 10px;
          width: 90%;
        }
      }

      & p {
        margin-top: 7px;
        margin-inline-start: 0;
        font-size: 11px;

        @media (max-width: 500px) {
          font-size: 8px;
        }
      }

      @media (max-width: 500px) {
        max-width: 87%;
        width: 100%;
        align-self: flex-start;
      }
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
