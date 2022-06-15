import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  background-color: #ffffff;
  height: 75px;
  border-radius: 10px;
  margin-bottom: 24px;

  & li {
    color: rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  & .tab-link {
    position: relative;
    @media (max-width: 1000px) {
      font-size: 12px;
    }
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

        @media (max-width: 800px) {
          bottom: -90%;
        }
      }
    }
  }
  @media (max-width: 700px) {
    margin-top: 10px;
  }
`;

export const MainTab = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
`;
