import styled from "styled-components";

export const paginationContainer = styled.div`
  display: flex;
  margin-top: 20px;
  & a {
    cursor: pointer;
    width: 32px;
    height: 32px;
    border-radius: 6px;
    background: #000;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-inline-end: 20px;

    &.active {
      background: #2d98da;
      color: #fff;
    }
  }
`;
