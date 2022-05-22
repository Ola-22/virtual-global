import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  background: linear-gradient(
      to right,
      rgba(248, 248, 248, 0.8),
      rgba(248, 248, 248, 0.9)
    ),
    url(/images/background.png);
  width: 100%;
  height: 100vh;

  & .modal-wrapper {
    max-width: 930px;

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
      /* flex-wrap: wrap; */
      & p {
        min-height: 62px !important;
        /* height: 100%; */
        max-width: 60%;
        text-align: center;
        overflow-y: hidden !important;
      }

      & .container {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 55%;
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
        justify-content: space-evenly;
        padding-left: 8%;

        & > svg {
          fill: white;
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
  & h2 {
    text-align: center;
    text-transform: uppercase;
    font-size: 24px;
    padding-top: 24px;
    color: #000000;
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
    padding-left: 24px;

    &[type="email"] {
      max-width: 739px;
      width: 90%;
    }
  }

  & button {
    /* margin: 10px; */
  }
`;

export const RegisterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 739px;
  width: 90%;
  /* margin-top: 5px; */
  & div {
    display: flex;
    flex-direction: column;
    width: 45%;
    &:last-of-type {
      margin-left: 1px;
    }
  }
`;
export const wrapperEmail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* margin-top: 5px;
  margin-left: 10%; */
  justify-content: center;
  align-items: center;

  & label {
    width: 90%;
  }
`;

export const RegisterGender = styled.div`
  max-width: 739px;
  width: 90%;

  /* margin-top: 5px; */
  & div {
    display: flex;
    & input {
      width: 17px;
      height: 17px;
    }
    & .gender {
      margin-left: 66px;
    }
    & span {
      margin-left: 5px;
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
  & a {
    color: #2d98da;
  }
`;

export const MainRegister = styled.div`
  height: 97%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
