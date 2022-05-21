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

    & div {
      max-width: 176px;
      width: 100%;
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
        margin-left: 15px;

        & h2 {
          font-size: 16px;
          color: #ff3a3a;
          text-transform: capitalize;
        }
      }
    }

    @media (max-width: 700px) {
      justify-content: space-between;
    }
  }

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }

  & .box-one {
    width: 25%;
    @media (max-width: 700px) {
      width: 90%;
    }

    /* @media (max-width: 1100px) {
      width: 30%;
    } */
  }
  & .tab {
    width: 100%;
    max-width: 100%;
  }
`;

export const MainTopic = styled.div`
  @media (max-width: 1100px) {
    width: 60%;
  }

  @media (max-width: 700px) {
    width: 90% !important;
  }
`;
