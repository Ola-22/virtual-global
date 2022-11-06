import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  background: #f8f8f8;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  min-height: 100vh;
  height: 100%;
  padding-bottom: 2%;
  padding-top: 2%;
  & .modal-wrapper {
    max-width: 930px;
    top: 10%;
    max-height: 547px;
    & .close {
      justify-content: flex-end;
    }
    & .data {
      font-size: 18px;
      color: rgba(0, 0, 0, 0.7);
      padding: 0 35px;
      line-height: 1.3;
      height: 486px;
      overflow-y: scroll;
    }
    & .council {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 80%;
      justify-content: space-around;
      & p {
        max-width: 60%;
        text-align: center;
        font-size: 20px;
        @media (max-width: 1200px) {
          text-align: center;
          max-width: 100%;
          font-size: 16px;
        }
      }
      & .container {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 55%;
        margin-top: 5%;

        @media (max-width: 650px) {
          width: 80%;
        }
        & button {
          max-width: 112px;
          width: 100%;
          min-height: 50px;
          height: 100%;
          background-color: rgba(35, 149, 219, 0.15);
          border-radius: 28px;
          border: none;
          cursor: pointer;
          color: #2d98da;
          font-size: 14px;
          text-transform: capitalize;
          font-weight: bold;
          margin-top: 0;

          @media (max-width: 650px) {
            max-width: 100px;
          }

          &:last-of-type {
            margin-inline-start: 10px;
          }
        }
      }
      & .answer {
        display: flex;
        flex-direction: column;
        width: 90%;
        & label {
          font-size: 14px;
          margin-bottom: 10px;
        }
        & textarea {
          border: 1px solid #dfdfdf;
          border-radius: 10px;
          max-width: 797px;
          width: 100%;
          min-height: 94px;
          resize: none;
          padding: 10px;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.3);
          outline: none;
        }
      }
      & .send {
        max-width: 201px;

        & > svg {
          fill: white;
          margin-inline-start: 22%;
          position: absolute;

          @media (max-width: 420px) {
            margin-inline-start: 37%;
          }
        }
        &:hover {
          & > svg {
            fill: #5abbf8;
          }
        }
      }
    }
  }
  & .activeBtn {
    background: linear-gradient(to top right, #2395db, #5abbf8) #2395db;
    color: #fff !important;
  }

  & .img-council {
    width: 112px;
    height: 112px;
  }
`;

export const RegisterBox = styled.div`
  max-width: 798px;
  justify-content: center;
  width: 90%;
  height: 95%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.16);
  padding-bottom: 5px;
  & h2 {
    text-align: center;
    text-transform: uppercase;
    font-size: 24px;
    padding-top: 24px;
    color: #000000;
    margin-bottom: 37px;
    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
  & input,
  select {
    max-width: 361px;
    width: 100%;
    height: 45px;
    border-radius: 10px;
    border: 1px solid #dfdfdf;
    padding-inline-start: 24px;

    &[type="email"] {
      max-width: 739px;
      width: 90%;
    }

    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
      @media (max-width: 500px) {
        font-size: 12px;
      }
    }
  }

  & select {
    appearance: none;
    background-color: rgba(0, 0, 0, 0.3);
  }

  & input {
    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
      text-transform: capitalize;
    }
  }
`;

export const RegisterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 739px;
  width: 90%;
  & div {
    display: flex;
    flex-direction: column;
    width: 45%;
    &:last-of-type {
      margin-inline-start: 1px;
    }
  }

  & label {
    font-size: 14px;
    text-transform: capitalize;
    /* margin-bottom: 10px; */
    height: 33px;
    @media (max-width: 500px) {
      font-size: 12px;
    }
  }

  & input[type="date"] {
    background: #fff url("./images/calendar.png") 97% 50% no-repeat;
    border: 1px solid #dfdfdf;
    box-sizing: border-box;
    outline: 0;
    padding: 0.75rem;
    position: relative;
    width: 100%;
    text-align: left;
    @media (max-width: 500px) {
      font-size: 12px;
    }
    &::-webkit-calendar-picker-indicator {
      bottom: 0;
      cursor: pointer;
      height: auto;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      width: auto;
      border: 1px solid #dfdfdf;
    }
    &::-webkit-inner-spin-button {
      display: none;
    }
    &::-webkit-calendar-picker-indicator {
      opacity: 0;
    }
  }

  & select {
    background: #fff url("./images/arrow.png") 97% 50% no-repeat;
    color: rgba(0, 0, 0, 0.3);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    & option {
      color: rgba(0, 0, 0);
    }
    @media (max-width: 500px) {
      font-size: 12px;
      background-size: 10px 8px;
    }
  }

  &:not(:first-of-type) {
    margin-top: 21px;
  }
`;
export const wrapperEmail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 21px;
  & label {
    width: 90%;
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

export const RegisterGender = styled.div`
  max-width: 739px;
  width: 90%;
  margin-top: 21px;

  & .label-gender {
    margin-top: 10px;
  }

  & span,
  label {
    font-size: 14px;

    @media (max-width: 500px) {
      font-size: 12px;
    }
  }
  & div {
    display: flex;
    & input {
      width: 17px;
      height: 17px;
    }
    & .gender {
      margin-inline-start: 66px;
    }
    & span {
      margin-inline-start: 5px;
      font-size: 14px;
      @media (max-width: 500px) {
        font-size: 12px;
      }
    }
  }
  & .flex-column {
    flex-direction: column;
  }
`;

export const AnchorTag = styled.span`
  text-decoration: underline;
  color: #2d98da;
  cursor: pointer;
`;

export const loginAccount = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  & a {
    color: #2d98da;
    font-weight: bold;
  }
`;

export const MainRegister = styled.div`
  height: 97%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  & button {
    margin-top: 38px;
    margin-bottom: 28px;
  }
`;

export const HeaderRegister = styled.div`
  min-height: 70px;
  height: 10%;
  width: 80%;
  display: flex;
  align-items: center;
  & a {
    z-index: 22;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  align-items: center;
`;

export const Captcha = styled.div`
  margin-top: 21px;
`;

export const LoginHome = styled.div`
  width: 50%;
  display: none;
  justify-content: center;
  position: fixed;
  bottom: 40%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 40%;
  border-radius: 10px;
  padding-bottom: 20px;
  @media (max-width: 750px) {
    width: 80%;
    max-width: 70%;
  }

  & .modal-wrapper {
    height: 25%;
    position: relative;

    @media (max-width: 1000px) {
      width: 80%;
    }

    & .container {
      width: 90% !important;
    }

    & .council {
      height: 40%;
    }

    & h3 {
      font-size: 14px;
      word-break: break-word;
      @media (max-width: 500px) {
        font-size: 12px;
      }
    }
  }
`;

export const ContainerCouncil = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 14%;
  background-color: #fff;
  border-radius: 10px;
  display: none;
  & .modal-wrapper {
    position: relative;
  }
  @media (max-width: 750px) {
    width: 80%;
  }
`;
