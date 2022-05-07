import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: #f8f8f8;
  position: relative;
  & .profile-main {
    padding-bottom: 299px;
  }

  & .box {
    padding-top: 28px;
    display: flex;
    justify-content: space-evenly;
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
      justify-content: space-around;
      flex-wrap: wrap;
      background-color: #ffffff;
      border-radius: 10px;
      max-width: 525px;
      width: 100%;

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

  & .modal-wrapper {
    max-height: 550px;
    height: 80%;
    top: 0;
    left: 30%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    z-index: 444;
    max-width: 40%;

    & .edit-profile {
      background-color: #2d98da;
      height: 20%;
      position: relative;
      border-radius: 5px;

      & p {
        color: white;
      }
    }

    & .user-img {
      width: 142px;
      height: 142px;
      margin: 0;
      border: 5px solid white;
      padding: 3px;
      background-color: white;
      border-radius: 50%;
      position: absolute;
      top: 5%;
      left: 35%;
    }

    & .modal-body {
      display: flex;
      flex-direction: column;
      padding-left: 20px;
      padding-bottom: 20px;
      & div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0;
        align-items: stretch;
        margin-bottom: 15px;
      }

      & input {
        width: 90%;
        height: 40px;
        border-radius: 8px;
        border: 1px solid #dfdfdf;
        padding-left: 15px;
      }

      & label {
        font-weight: bold;
      }

      & button {
        align-self: center;
      }
    }

    input[type="file"] {
      display: none;
    }
    .label {
      display: flex;
      justify-content: center;
      margin-top: 15%;
    }
    .image-upload {
      text-align: center;
      cursor: pointer;
    }
  }
`;

export const profileInformation = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  &.box-profile {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const imgUser = styled.img`
  width: 82px;
  height: 84.5px;
  border-radius: 50%;
`;

export const lastActivity = styled.div`
  width: 90%;

  & h2 {
    font-size: 18px;
    background-color: #ffffff;
    /* max-width: 1153px; */
    /* width: 100%; */
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
`;
