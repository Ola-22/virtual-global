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
    width: 45%;
    height: 100%;
    min-height: 100vh;

    @media (max-width: 800px) {
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
    min-height: 100vh;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;

    & img {
      margin-inline-start: 30px;
      margin-bottom: 10px;
    }

    & a {
      width: 96%;
      /* margin-bottom: 72px; */
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
  /* height: 492px; */
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
    min-height: 55px;
    border-radius: 10px;
    border: 1px solid #dfdfdf;
    padding-inline-start: 10px;
  }
  & label {
    margin-top: 29px;
    margin-bottom: 10px;
    text-transform: capitalize;
  }

  & .forget-pass {
    text-align: right;
    margin-inline-end: 10%;
    margin-top: 11px;
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
    margin-bottom: 10px;
  }
`;

export const citizenshipBox = styled.div`
  font-size: 14px;

  & a {
    color: #2d98da;
    font-weight: bold;
  }
`;
