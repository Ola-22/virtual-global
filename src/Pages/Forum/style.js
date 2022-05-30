import styled from "styled-components";

export const ForumContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  background: #f8f8f8;
  min-height: 100vh;
  padding-top: 31px;
  padding-bottom: 94px;

  & .topForum {
    display: flex;
    justify-content: space-around;
    margin-bottom: 21.5px;
    @media (min-width: 700px) and (max-width: 800px) {
      flex-wrap: wrap;
    }

    & div {
      width: 176px;
      /* width: 100%; */
      border-radius: 10px;
      background-color: #ffffff;
      height: 140px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      & p {
        font-size: 29px;
        margin-top: 16px;
      }
      &:first-of-type {
        & h2 {
          font-size: 16px;
          color: #2d98da;
          text-transform: capitalize;
        }
      }

      &:last-of-type {
        margin-inline-start: 15px;

        & h2 {
          font-size: 16px;
          color: #ff3a3a;
          text-transform: capitalize;
        }

        @media (min-width: 700px) and (max-width: 800px) {
          margin-inline-start: 0px;
          margin-top: 15px;
        }
      }
    }

    @media (max-width: 700px) {
      justify-content: space-between;
    }
  }

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }

  & .box-one {
    width: 25%;
    display: flex;
    flex-direction: column;
    margin-inline-end: -7%;
    @media (max-width: 700px) {
      width: 90%;
      margin-inline-end: 0;
    }
  }
  & .tab {
    width: 100%;
    max-width: 100%;
  }
`;

export const MainTopic = styled.div`
  display: flex;
  flex-direction: column;
  width: 56%;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    width: 56%;
  }

  @media (max-width: 700px) {
    width: 90% !important;
  }
`;

export const Main = styled.div`
  width: 100%;
  & .box-virtual {
    max-width: 840px;
    width: 100%;
  }
`;
