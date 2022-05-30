import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  /* max-width: 765px; */
  width: 100%;
  position: relative;
  background-color: #ffffff;
  height: 75px;
  border-radius: 10px;
  margin-bottom: 24px;

  /* @media (min-width: 400px) and (max-width: 1300px) {
    width: 90%;
  } */

  & li {
    color: rgba(0, 0, 0, 0.25);
    /* margin-inline-end: 51px; */
    cursor: pointer;

    &:first-of-type {
      /* margin-inline-start: 51px; */
    }
  }

  & .tab-link {
    position: relative;
    &.activeSelect {
      color: #2d98da;
      &::after {
        content: "";
        width: 90px;
        height: 3px;
        background-color: #2d98da;
        display: flex;
        position: absolute;
        bottom: -158%;

        @media (max-width: 500px) {
          display: none;
        }
      }
    }
  }
  @media (max-width: 700px) {
    /* width: 93%; */
    margin-top: 10px;
  }
`;

export const MainTab = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
`;
