import styled from "styled-components";

export const ForgetContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;

  & .header {
    height: 10%;
    width: 80%;
    display: flex;
    align-items: center;
    direction: ltr;

    & div {
      cursor: pointer;
    }
  }

  & .main-box {
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    background: #f8f8f8;
    background-size: cover;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    & .box {
      min-width: 557px;
      min-height: 403px;
      background-color: #fff;
      height: 60%;
      width: 90%;
      max-width: 500px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-evenly;
      border-radius: 8px;

      & h1 {
        text-transform: uppercase;
        text-align: center;
        font-size: 24px;
      }
      & p {
        width: 90%;
        text-align: center;
        font-size: 14px;
        opacity: 0.62;
      }

      & button {
        & svg {
          margin-inline-start: 5px;
        }

        @media (max-width: 450px) {
          width: 60%;
        }
      }

      @media (max-width: 600px) {
        max-width: 557px;
        width: 90%;
        min-width: 400px;
      }
    }
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 22%;
  justify-content: space-between;
  & label {
    font-weight: bold;
    text-transform: capitalize;
    text-transform: capitalize;
  }
  & input {
    height: 50px;
    border-radius: 10px;
    border: 1px solid #dfdfdf;
    padding-inline-start: 24px;
    margin-top: 10px;
    &::placeholder {
      text-transform: capitalize;
      font-weight: bold;
      color: #000000;
      opacity: 0.3;
      font-size: 14px;
    }
  }

  & h3 {
    font-size: 12px;
  }
`;
