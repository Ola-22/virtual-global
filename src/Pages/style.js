import styled from "styled-components";

export const ForumContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: linear-gradient(
      to right,
      rgba(248, 248, 248, 0.8),
      rgba(248, 248, 248, 0.9)
    ),
    url(/images/background.png);
  min-height: 100vh;
  padding-top: 31px;

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
    }
  }
`;
