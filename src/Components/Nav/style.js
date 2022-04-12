import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  height: 85px;

  & > div {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    & h3 {
      font-size: 21px;
      text-transform: uppercase;
    }

    & select {
      outline: none;
      border: none;
    }

    &:last-of-type {
      & img {
        border-left: 1px solid rgba(128, 128, 128, 0.16);
        padding-inline-start: 20px;
      }
    }
  }
`;
