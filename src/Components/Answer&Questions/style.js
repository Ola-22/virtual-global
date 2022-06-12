import styled from "styled-components";

export const AccordianContainer = styled.div`
  display: flex;
  max-width: 545px;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #dfdfdf;
  flex-wrap: wrap;
  border-radius: 10px;
  height: auto;
  margin-top: 10px;

  @media (max-width: 700px) {
    max-width: 100%;
  }

  & .accordion_faq {
    min-height: 66px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #ffffff;
    border-radius: 10px;
    & h3 {
      width: 80%;
    }
  }

  & .activeShow {
    border-bottom: 1px solid #dfdfdf;
    border-radius: 10px 10px 0 0;
  }
`;

export const AccordianAnswer = styled.div`
  background-color: #ffffff;
  border-radius: 0 0 10px 10px;
  /* background-color: #ffffff;
  border-radius: 0 0 10px 10px; */
  width: 100%;
  /* border: 1px solid #dfdfdf; */
  & p {
    font-size: 16px;
    /* max-width: 483px; */
    width: 90%;
    margin: auto;
    color: rgba(0, 0, 0, 0.5);
    line-height: 1.4;
    padding-top: 9px;

    @media (max-width: 550px) {
      width: 90%;
    }
  }
`;

export const AnswerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  /* padding-top: 110px; */
  padding-bottom: 125px;

  /* border-bottom: 2px solid #4bb1f1; */
  @media (max-width: 970px) {
    flex-wrap: wrap;
  }
  & h1 {
    font-size: 34px;
    margin-bottom: 21px;
    width: 90%;
  }

  & p {
    width: 90%;
  }
  & > .main-box {
    border: 1px solid #dfdfdf;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 50%;
    padding-top: 39px;
    min-height: 589px;
    height: 100%;
    /* margin-top: 5.3%; */
    background-color: #ffffff;
    /* @media (max-width: 700px) {
      max-width: 90%;
    }

    @media (min-width: 700px) and (max-width: 800px) {
      margin-top: 9%;
    }

    @media (min-width: 800px) and (max-width: 1000px) {
      margin-top: 7.5%;
    }

    @media (min-width: 1100px) and (max-width: 1200px) {
      margin-top: 6.3%;
    } */

    & form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 90%;
      position: relative;
      & input[type="email"] {
        margin-inline-end: 28px;
      }
      & input,
      textarea {
        width: 100%;
        border: none;
        border-bottom: 1px solid rgba(112, 112, 112, 0.5);
        &::placeholder {
          color: rgba(0, 0, 0, 0.35);
        }
      }
      & div {
        margin-top: 5px;
        /* margin-bottom: 4px; */
        display: flex;
      }
      & textarea {
        resize: none;
        outline: none;
        padding-top: 30px;
      }
      & label {
        color: rgba(0, 0, 0, 0.35);
      }
      & .tell-us {
        margin-top: 10px;
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
        display: flex;
        align-items: center;
        font-weight: bold;

        text-transform: capitalize;
        justify-content: center;
        position: relative;

        & img {
          position: absolute;
          right: 21.5px;
        }

        & svg {
          margin-inline-start: 5px;
        }
        &:hover {
          background: #ffffff;
          color: #5abbf8;
          border: 1px solid #5abbf8;
          transition: 0.5s ease-in-out;
        }
      }
      & .box-inputs {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        @media (max-width: 540px) {
          flex-direction: column;
        }
        @media only screen and (max-width: 1200px) and (min-width: 970px) {
          flex-direction: column;
        }
      }
    }
    @media (min-width: 970px) and (max-width: 1200px) {
      max-width: 450px;
    }
    @media (min-width: 1300px) {
      max-width: 545px;
    }
  }
  & .accordion {
    max-width: 40%;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width: 700px) {
      max-width: 90%;
    }

    & p {
      width: 90%;
    }
  }
`;

export const container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  & h3 {
    color: red;
    font-size: 13px;
    font-weight: normal;
    margin-top: 5px;
  }
`;

export const animationBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  & input,
  textarea {
    height: 56px;
    padding: 14px 16px 0 10px;
    outline: 0;
    font-size: 14px;
  }
  & label {
    font-size: 16px;
    padding: 0 12px;
    color: #999;
    pointer-events: none;
    position: absolute;
    transform: translate(0, 26px) scale(1);
    transform-origin: top left;
    transition: all 0.2s ease-out;
  }
  &:focus-within label {
    transform: translate(0, 16px) scale(0.75) !important;
  }
  .Active {
    transform: translate(0, 12px) scale(0.75);
  }
`;

export const Main = styled.div`
  background: linear-gradient(
      to right,
      rgba(241, 242, 245, 0.9),
      rgba(241, 242, 245, 0.9)
    ),
    url(/images/background.png);
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .title {
    width: 90%;
    margin-bottom: 20px;
    padding-top: 110px;
  }
`;
