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

    & > a {
      font-size: 14px;
      text-decoration: none;
      text-transform: uppercase;
      color: white;
      border-inline-start: 1px solid rgba(255, 255, 255, 0.5);
      padding: 19.5px;

      &::after {
        content: "";
        width: 1px;
        height: 100%;
        background-color: red;
        display: flex;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    }
  }
`;
