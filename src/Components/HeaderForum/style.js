import styled from "styled-components";

export const ForumContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #2d98da;
  align-items: center;
  flex-wrap: wrap;
  min-height: 71px;
  height: 100%;
  width: 100%;

  & .profile-box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 40%;

    & div {
      display: flex;
      flex-direction: column;
      margin-inline-start: 6px;
      & p {
        font-size: 10px;
        color: rgba(255, 255, 255, 0.6);
        text-transform: uppercase;
      }

      & h6 {
        font-size: 17px;
        color: #ffffff;
        text-transform: capitalize;
      }
    }

    & span:first-of-type {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-inline-start: 35px;
      cursor: pointer;
      &::after {
        content: "";
        position: absolute;
        width: 17px;
        height: 17px;
        border-radius: 2px;
        background-color: #4bb1f1;
      }
      & img {
        position: relative;
        z-index: 5;
      }
    }

    & span:last-of-type {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-inline-start: 43px;
      cursor: pointer;
      &::after {
        content: "";
        position: absolute;
        width: 42px;
        height: 42px;
        border-radius: 2px;
        background-color: #4bb1f1;
      }
      & img {
        position: relative;
        z-index: 5;
      }
    }

    @media (max-width: 550px) {
      margin: 8px 0;
    }
  }

  & .user-image {
    width: 41px;
    height: 41px;
    border-radius: 50%;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    justify-content: center;
    padding-top: 3%;
    padding-bottom: 2%;
  }

  @media (max-width: 500px) {
    flex-wrap: wrap;
  }

  & form {
    width: 100%;
    max-width: 320px;

    & img {
      cursor: pointer;
    }
  }
  & .input-container {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #fff;
    border-radius: 20px;
    justify-content: space-around;
    width: 100%;
    max-width: 320px;
    height: 40px;

    @media (max-width: 600px) {
      margin-inline-end: 10px;
    }
  }
  & input {
    border: none;
    background-color: #ffffff;
    max-width: 250px;
    width: 100%;
    font-size: 14px;
    text-transform: capitalize;
  }
`;

export const ContainerBtn = styled.div`
  display: flex;
  align-items: center;

  & a {
    width: 100px;
    height: 40px;
    border-radius: 8px;
    border: none;
    padding: 10px;
    background: #fff;
    color: #000000;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    &:last-of-type {
      margin-inline-start: 15px;
    }
  }

  @media (max-width: 500px) {
    margin-top: 10px;
  }
`;
