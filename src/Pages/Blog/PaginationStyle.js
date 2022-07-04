import styled from "styled-components";

export const PageNumber = styled.ul`
  list-style: none;
  display: flex;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  & li {
    padding: 10px;
    border: 1px solid #2395db;
    color: #000;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    &.active {
      background-color: #2395db;
      color: black;
    }
    & button {
      background-color: transparent;
      border: none;
      color: #000;
      font-size: 1rem;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }

    &:hover {
      background-color: #fff;
      color: black;
      height: 100%;
    }
  }
`;
