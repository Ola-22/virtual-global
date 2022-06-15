import styled from "styled-components";

export const loginContainer = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  & div:first-child {
    background: url(/images/VirtualBack.png) no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 24px;
    width: 100%;
    max-width: 530px;
    height: auto;

    @media (max-width: 800px) {
      display: none;
    }
    & img {
      width: 151px;
      height: 90px;
    }

    & h6 {
      margin-top: 33px;
      font-weight: normal;
    }
    & h2 {
      margin-top: 17px;
      font-weight: bold;
    }
    & h6,
    h2 {
      font-size: 24px;
      text-transform: uppercase;
      text-align: center;
    }
    & p {
      font-size: 15px;
      max-width: 380px;
      line-height: 1.5;
      text-align: center;
      margin-top: 17px;
      min-height: 130px;
    }
  }

  & .right-login {
    background: #f8f8f8;
    max-width: 980px;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    & img {
      margin-inline-start: 30px;
      margin-bottom: 10px;
    }

    & a {
      width: 96%;
    }
  }

  & .error {
    color: red;
    font-size: 13px;
  }
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 557px;
  width: 90%;
  background-color: #fff;
  border-radius: 10px;
  padding: 37px;
  & h2 {
    font-size: 24px;
    text-transform: uppercase;
  }
  & h6 {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.62);
    font-weight: normal;
    margin-top: 9px;
  }

  & form {
    display: flex;
    flex-direction: column;
  }
  & input {
    max-width: 480px;
    width: 100%;
    min-height: 55px;
    border-radius: 10px;
    border: 1px solid #dfdfdf;
    padding-inline-start: 24px;
    &::placeholder {
      font-size: 14px;
      font-weight: bold;
      text-transform: capitalize;
      opacity: 0.3;
    }
  }
  & label {
    margin-top: 30px;
    margin-bottom: 10px;
    text-transform: capitalize;
  }

  & .forget-pass {
    text-align: right;
    margin-inline-end: 10%;
    margin-top: 12px;
    & a {
      font-size: 14px;
      text-transform: capitalize;
      color: #000;
    }
  }
`;

export const FooterLogin = styled.div`
  align-self: center;
  & button {
    margin-top: 40px;
    margin-bottom: 35px;
  }
`;

export const citizenshipBox = styled.div`
  font-size: 14px;
  font-weight: bold;

  & a {
    color: #2d98da;
    font-weight: bold;
  }
`;
