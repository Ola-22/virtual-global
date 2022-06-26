import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #2d98da;
  min-height: 71px;
  position: relative;
  width: 100%;

  & .back-drop {
    z-index: 10;
  }

  @media (max-width: 981px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
  & .rightNav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    & > a {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 40px;
      background-color: inherit;
      border-radius: 5px;
      border: 1px solid #ffffff;
      font-size: 14px;
      color: #ffffff;
      margin-inline-end: 9px;
      &:first-of-type {
        width: 113px;
        background-color: white;
        color: black;

        & img {
          margin-inline-end: 8px;
        }
      }

      @media (min-width: 980px) and (max-width: 1200px) {
        width: 60px;
      }
    }
    & .login {
      width: 100px;
      height: 40px;
      border-radius: 8px;
      border: none;
      padding: 10px;
      background: #fff;
      color: #000000;
      text-transform: capitalize;

      /* @media (max-width: 768px) {
        width: 70px;
      } */
    }
    & > button {
      width: 50px;
      height: 40px;
      background-color: inherit;
      border: 1px solid #ffffff;
      border-radius: 8px;
      margin-inline-start: 9px;
      cursor: pointer;

      @media (max-width: 768px) {
        border: none;
        width: 0;
      }
    }

    & .logout,
    .forum {
      @media (max-width: 450px) {
        display: none;
      }
    }
  }
  & .modal-wrapper {
    width: 50%;
    left: 20%;
    top: 200%;
    z-index: 55555;
    height: 208px;
    & .modal-header {
      justify-content: flex-end;
      padding: 8px;
    }
    & .modal-body {
      display: flex;
      align-items: center;
      flex-direction: column;
      height: 68%;
      justify-content: space-around;
      & button {
        width: 112px;
        min-height: 50px;
        height: 100%;
        background-color: rgba(35, 149, 219, 0.15);
        border-radius: 28px;
        border: none;
        cursor: pointer;
        color: #2d98da;
        font-size: 14px;
      }

      & h1 {
        text-align: center;
        font-size: 16px;
      }
    }

    @media (max-width: 450px) {
      width: 90%;
    }
  }

  & .container-box {
    width: 91%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Nav = styled.nav`
  height: 100%;
  min-height: 71px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  width: auto;
  max-width: 73%;
  margin-inline-end: -55px;

  @media (min-width: 980px) and (max-width: 1200px) {
    width: auto;
    max-width: 100%;
    max-height: 71px;
  }
  & .menus {
    height: 100%;
    max-height: 71px;
    display: flex;
    align-items: center;
    @media (max-width: 980px) {
      justify-content: space-around;
      align-items: center;
      padding: 0;
      max-height: 100vh;
      overflow: scroll;
    }
    & > li {
      max-height: 71px;
      /* height: 72px; */
      /* height: 100%; */
    }
    & .dropdown {
      box-shadow: 0 10px 30px rgba(0, 0, 0, 5%);
      position: absolute;
      font-size: 0.875rem;
      z-index: 9999;
      min-width: 11rem;
      list-style: none;
      background-color: #fff;
      display: none;
      border-radius: 0 0 4px 4px;

      & .menu-items {
        text-transform: capitalize;
        /* height: 53px; */
        width: 100%;

        &:not(:last-of-type) {
          &::after {
            content: "";
            width: 100%;
            height: 0.5px;
            background-color: #e8e8e8;
            color: #e8e8e8;
            position: absolute;
            left: 0;
            top: 100%;
          }
        }
        /* &:hover {
          background: #5cabff;
        } */
      }

      & .dropdown-submenu {
        position: absolute;
        left: 100%;
        top: -7px;
      }
      &.show {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      & a {
        color: #000;
        justify-content: center;
        display: flex;
        text-align: center;
        & :not(:last-of-type) {
          &::after {
            content: "";
            width: 100%;
            height: 0.5px;
            background-color: #e8e8e8;
            color: #e8e8e8;
            position: absolute;
            left: 0;
            top: 100%;
          }
        }
        &:hover {
          color: #5cabff;
        }
      }
    }
  }
  & .menu-items {
    position: relative;
    font-size: 12px;
    text-transform: uppercase;
    &::after {
      content: "";
      width: 1px;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.5);
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      @media (max-width: 980px) {
        display: none;
      }
    }
    & a {
      height: 100%;
      min-height: 71px;
      display: flex;
      align-items: center;
      color: white;
      &.active {
        background: rgba(0, 0, 0, 20%);
        @media (max-width: 980px) {
          background: inherit;
        }
      }
    }

    @media (min-width: 980px) and (max-width: 1200px) {
      font-size: 9px;
    }
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  .li {
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    display: flex;
    align-items: center;
    height: 100%;
    padding-inline-end: 19.5px;
    padding-inline-start: 19.5px;
    height: 71px;
    &::after {
      content: "";
      width: 1px;
      height: 71px;
      background-color: rgba(255, 255, 255, 0.5);
      display: flex;
      position: absolute;
      top: 0;
      margin-inline-start: -20px;
      @media (max-width: 1100px) {
        display: none;
      }
    }
    & a {
      &.active {
        background: rgba(0, 0, 0, 20%);
        @media (max-width: 980px) {
          background: inherit;
        }
      }
    }
    @media (min-width: 979px) and (max-width: 1100px) {
      font-size: 12px;
      padding-inline-end: 10px;
      padding-inline-start: 10px;
    }
  }
  @media (max-width: 980px) {
    flex-flow: column nowrap;
    background-color: #2395db;
    position: fixed;
    align-items: center;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: ${({ open }) =>
      open ? "transform 0.3s ease-in-out" : "translateX(100%)"};
    z-index: 222;
  }

  & .logout,
  .forum {
    display: none;
    @media (max-width: 980px) {
      display: flex;
    }
  }
`;

export const profileInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline-end: 10px;
  /* max-width: 103px;
  word-break: break-all; */
  & img {
    width: 41px;
    height: 41px;
    border-radius: 50%;
  }
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
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
`;

export const ContainerBtn = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
`;
