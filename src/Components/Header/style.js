import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background-color: #2d98da;
  height: 71px;
  & > div:first-of-type {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    position: relative;

    & > a {
      font-size: 14px;
      text-decoration: none;
      text-transform: uppercase;
      color: white;
      display: flex;
      align-items: center;
      height: 100%;
      margin-inline-end: 19.5px;
      padding-inline-start: 19.5px;
      &::after {
        content: "";
        width: 1px;
        height: 71px;
        background-color: rgba(255, 255, 255, 0.5);
        display: flex;
        position: absolute;
        top: 0;
        margin-left: -19px;
      }
    }
  }

  & > div:last-of-type {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    & > a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 40px;
      background-color: inherit;
      border-radius: 5px;
      border: 1px solid #ffffff;
      font-size: 14px;
      color: #ffffff;
      margin-right: 9px;
      &:first-of-type {
        width: 113px;
        background-color: white;
        color: black;
        & img {
          margin-right: 8px;
        }
      }
    }

    & > input {
      width: 100px;
      height: 40px;
      border-radius: 8px;
      border: none;
      padding: 10px;
      &::placeholder {
        color: #000000;
      }
    }
    & > button {
      width: 50px;
      height: 40px;
      background-color: inherit;
      border: 1px solid #ffffff;
      border-radius: 8px;
      margin-left: 9px;
    }
  }
`;
