import styled from "styled-components";

export const ForumContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #2d98da;
  align-items: center;
  flex-wrap: wrap;
  min-height: 71px;
  height: 100%;

  & div:first-child {
    border: 1px solid #fff;
    border-radius: 20px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 320px;
    width: 100%;
    height: 40px;
    & input {
      border: none;
      background-color: inherit;
      max-width: 250px;
      width: 100%;
      font-size: 14px;
      @media (max-width: 550px) {
        width: 90%;
        max-width: 150px;
      }
    }

    @media (max-width: 550px) {
      width: 90%;
      margin-top: 8px;
    }
  }

  & div:last-of-type {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    & div {
      display: flex;
      flex-direction: column;
      margin-left: 6px;
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
      margin-left: 35px;
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
      margin-left: 43px;
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
