import styled from "styled-components";

export const loginContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  & div:first-child {
    background: url(/images/VirtualBack.png);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 24px;

    @media (max-width: 600px) {
      display: none;
    }
    & img {
      width: 151px;
    }

    & h6,
    h2 {
      font-weight: normal;
      font-size: 24px;
      text-transform: uppercase;
      margin-top: 14px;
      text-align: center;
    }
    & p {
      font-size: 15px;
      max-width: 380px;
      line-height: 1.5;
      text-align: center;
      margin-top: 17px;
    }
  }

  & .right-login {
    background: linear-gradient(
        rgba(248, 248, 248, 0.8),
        rgba(248, 248, 248, 0.9)
      ),
      url(/images/background.png) fixed;
    max-width: 980px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    & img {
      margin-left: 30px;
      margin-bottom: 10px;
    }
  }
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 492px;
  max-width: 557px;
  width: 90%;
  background-color: #fff;
  border-radius: 10px;
  padding: 37px;
  & h2 {
    font-size: 24px;
    text-transform: uppercase;
    margin-top: 34px;
  }
  & h6 {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.62);
    font-weight: normal;
  }

  & input {
    max-width: 480px;
    width: 90%;
    height: 55px;
    border-radius: 10px;
    border: 1px solid #dfdfdf;
  }
  & label {
    margin-top: 29px;
  }

  & .forget-pass {
    text-align: right;
    margin-right: 10%;
    margin-top: 11px;
  }
`;

export const FooterLogin = styled.div`
  align-self: center;
  & button {
    margin-top: 40px;
    margin-bottom: 10px;
  }
`;
