import styled from "styled-components";

export const AccordianContainer = styled.div`
  display: flex;
  max-width: 545px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #dfdfdf;
  flex-wrap: wrap;
  border-radius: 10px;
  height: 66px;
  margin-top: 10px;
  padding: 0 25px;
  margin: auto;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const AccordianAnswer = styled.p`
  font-size: 16px;
  width: 483px;
  padding: 9px 0 0 25px;
  opacity: 0.5;
  line-height: 1.4;
`;

export const AnswerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 110px;
  margin-bottom: 125px;

  & h1 {
    font-size: 34px;
    margin-left: 18px;
    margin-left: 11%;
  }

  & > div:last-of-type {
    border: 1px solid #dfdfdf;
    border-radius: 10px;
    /* width: 100%; */
    max-width: 90%;
    padding-left: 51px;
    padding-top: 39px;
    height: auto;
    & form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 90%;
      margin-top: 77px;
      position: relative;

      & input[type="email"] {
        margin-right: 28px;
      }

      & input,
      textarea {
        border: none;
        border-bottom: 1px solid rgba(112, 112, 112, 0.5);
        padding-bottom: 18px;
        &::placeholder {
          color: rgba(0, 0, 0, 0.35);
        }
      }

      & div {
        margin-top: 30px;
        margin-bottom: 14px;
      }
      & textarea {
        resize: none;
        outline: none;
      }

      & label {
        color: rgba(0, 0, 0, 0.35);
      }

      & button {
        background: linear-gradient(#2395db, #5abbf8);
        border-radius: 88px;
        width: 201px;
        height: 50px;
        border: none;
        font-size: 13px;
        color: #ffffff;
        margin-top: 32px;
        margin-bottom: 42px;
      }
    }
    @media (max-width: 1000px) {
      margin-top: 20px;
    }

    @media (min-width: 400px) {
      width: 545px;
    }
  }
`;
