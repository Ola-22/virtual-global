import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: #f8f8f8;
  position: relative;
  width: 100%;
  & .profile-main {
    padding-bottom: 299px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .box {
    width: 90%;
    padding-top: 28px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 900px) {
      flex-wrap: wrap;
    }

    & .virtual-id {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #ffffff;
      border-radius: 10px;
      max-width: 69%;
      width: 100%;
      padding-bottom: 82px;
      @media (max-width: 500px) {
        padding-bottom: 20px;
      }

      @media (max-width: 900px) {
        width: 100%;
        max-width: 100%;
      }

      & > h3 {
        font-size: 18px;
        text-transform: uppercase;
        margin-top: 32px;
        margin-bottom: 37px;
        width: 94%;
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
      max-width: 30%;
      width: 100%;
      padding-bottom: 42px;
      @media (max-width: 900px) {
        width: 100% !important;
        max-width: 100%;
        margin-top: 2%;
        height: auto;
      }

      @media (max-width: 700px) {
        width: 100% !important;
        max-width: 100%;
      }
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
        width: 130%;
        max-width: 300px;
        min-height: 36px;
        border-radius: 88px;
        border: none;
        border: 1px solid #2d98da;
        background-color: inherit;
        color: #2d98da;
        text-transform: capitalize;
        cursor: pointer;
        align-self: stretch;
        margin-inline-start: 5%;
        font-size: 12px;
      }
      @media (max-width: 1200px) {
        width: 36%;
      }
      & h3,
      h2 {
        text-transform: uppercase;
        font-size: 18px;
        width: 90%;
      }

      & img {
        cursor: pointer;
      }
    }
  }

  & .main-tabs {
    background: inherit;
    justify-content: space-between;
    width: 100%;
  }
`;

export const profileInformation = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  &.box-profile {
    flex-direction: column;
    justify-content: space-between;
    margin-top: 30px;
  }

  & .changePass {
    width: 130%;
    max-width: 300px;
  }

  & .email {
    margin-top: 35px;
  }

  & h4,
  label {
    font-size: 14px;
  }

  & h4 {
    opacity: 0.6;
  }
`;

export const imgUser = styled.img`
  width: 82px;
  height: 84px;
  object-fit: cover;
  border-radius: 50%;
  align-self: flex-start;
`;

export const lastActivity = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    width: 90%;
  }

  & h2 {
    font-size: 18px;
    background-color: #ffffff;
    margin-top: 29px;
    height: 86px;
    display: flex;
    align-items: center;
    padding-inline-start: 4%;
    text-transform: capitalize;
    border-radius: 10px;
  }
`;

export const topicContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  min-height: 351px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 17px;
  padding-inline-start: 32px;
  & h5 {
    font-size: 18px;
    font-weight: normal;
    text-transform: capitalize;
  }
  & h6 {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: normal;
  }

  & div {
    display: flex;
    & div {
      flex-direction: column;
      margin-inline-start: 12px;
    }
  }

  & p {
    font-size: 22px;
  }
  & p:last-of-type {
    max-width: 1066px;
    background-color: #f9f9f9;
    min-height: 94px;
    display: flex;
    align-items: center;
    padding-inline-start: 22px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    @media (max-width: 1200px) {
      width: 95%;
    }
  }

  @media (max-width: 1200px) {
    width: 90%;
  }
`;

export const userImage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10%;
  position: absolute;
  top: 10%;
  & img {
    width: 100px;
    height: 100px;
    margin: 0;
    border: 5px solid white;
    padding: 3px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
  }

  input[type="file"] {
    display: none;
  }

  & .label {
    display: flex;
    flex-flow: column;
    margin-top: 120%;
    justify-content: center;
    align-items: center;

    & .image-upload {
      cursor: pointer;
    }
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 5%;

  & .modal-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    top: 5%;
    width: 60%;

    @media (max-width: 900px) {
      top: 92%;
      width: 90%;
    }

    & .edit-profile {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: #2d98da;
      height: 10%;
      border-radius: 7px;

      & p {
        color: #ffffff;
      }
    }
  }

  & .modal-body {
    height: 70%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 900px) {
      height: 75%;
    }
    & input,
    select {
      width: 100%;
      height: 40px;
      border-radius: 8px;
      border: 1px solid #dfdfdf;
      padding-inline-start: 15px;
    }
  }

  & button {
    max-width: 200px;
  }
`;

export const boxInput = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  & div {
    display: flex;
    flex-direction: column;
    width: 40%;
  }

  & .gender {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    & input[type="radio"] {
      width: 20px;
      height: 20px;
    }
  }
`;

export const boxInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  margin-bottom: 15px;
`;

export const containerProfile = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .nav-container {
    justify-content: space-between;
  }
`;
