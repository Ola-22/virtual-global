import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #2d98da;
  min-height: 71px;
  position: relative;

  @media (max-width: 970px) {
    flex-wrap: wrap;
  }
  & > .rightNav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-right: 5px;

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

      @media (max-width: 768px) {
        width: 70px;
      }
    }

    & .login {
      max-width: 100px;
      height: 40px;
      border-radius: 8px;
      border: none;
      padding: 10px;
      background: #fff;
      color: #000000;

      @media (max-width: 768px) {
        width: 70px;
      }
    }
    & > button {
      width: 50px;
      height: 40px;
      background-color: inherit;
      border: 1px solid #ffffff;
      border-radius: 8px;
      margin-left: 9px;
      cursor: pointer;
      @media (max-width: 768px) {
        border: none;
        width: 0;
      }
    }
  }

  & .menu-icon {
    display: none;
    & img {
      width: 15px;
    }

    @media (max-width: 768px) {
      display: flex;
    }
  }
`;