import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: #f8f8f8;

  & .box {
    padding-top: 28px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    & .virtual-id {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #ffffff;
      border-radius: 10px;
      max-width: 609px;
      width: 100%;
      padding-bottom: 82px;

      & > h3 {
        font-size: 18px;
        align-self: flex-start;
        text-transform: uppercase;
        margin-left: 5%;
        margin-top: 32px;
        margin-bottom: 37px;
      }
    }

    & .profile-information {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #ffffff;
      border-radius: 10px;
      max-width: 525px;
      width: 100%;

      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      position: relative;
      & h2 {
        text-transform: capitalize;
      }

      & label {
        font-size: 14px;
        text-transform: capitalize;
        width: 90%;
      }
      & input {
        border: none;
        width: 90%;
      }
      & button {
        background-color: #2d98da;
        max-width: 164px;
        width: 100%;
        min-height: 36px;
        border-radius: 88px;
        border: none;
        border: 1px solid #2d98da;
        background-color: inherit;
        color: #2d98da;
        text-transform: capitalize;
        cursor: pointer;
        align-self: stretch;
        margin-left: 5%;
      }
      @media (max-width: 1200px) {
        max-width: 1153px;
        width: 90%;
        margin-top: 2%;
        padding-bottom: 125px;
      }

      & .edit {
        position: absolute;
        top: 18%;
        right: 10%;
      }
      & h3,
      h2 {
        text-transform: uppercase;
        font-size: 18px;
        width: 90%;
      }
    }
  }
  /* width: 100%;
  background-color: #f8f8f8;
  min-height: 100vh;

  & .profile-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 28px;
    padding-bottom: 299px;
    & .box {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      max-width: 1153px;
      width: 100%;
      & div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
        border-radius: 10px;
        &:first-of-type {
          max-width: 609px;
          width: 100%;
          min-height: 505px;
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;

          @media (max-width: 1200px) {
            max-width: 1153px;
            width: 90%;
          }
        }
        
        }
      }
    }

    & h2 {
      font-size: 18px;
      background-color: #ffffff;
      max-width: 1153px;
      width: 100%;
      margin-top: 29px;
      height: 86px;
      display: flex;
      align-items: center;
      padding-left: 4%;
      text-transform: capitalize;
      border-radius: 10px;

      @media (max-width: 1200px) {
        width: 90%;
      }
    }
  } */
`;

export const profileInformation = styled.div`
  /* display: flex;
  flex-direction: column; */
`;
