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
      }
      & p {
        width: 90%;
        text-align: center;
      }

      & button {
        & svg {
          margin-inline-start: 5px;
        }

        @media (max-width: 450px) {
          width: 60%;
        }
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
  }
  & input {
    height: 50px;
    border-radius: 10px;
    border: 1px solid #dfdfdf;
    padding-inline-start: 10px;
  }

  & h3 {
    font-size: 12px;
  }
`;
