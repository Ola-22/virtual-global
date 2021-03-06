import styled from "styled-components";

export const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  /* max-width: 765px; */
  width: 100%;
  min-height: 287px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px 42px;
  margin-bottom: 15px;
  & h6 {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: normal;
    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
  & h3 {
    font-size: 22px;
    margin: 12px 0 23px;
    color: #000000;
    font-weight: normal;

    @media (max-width: 500px) {
      font-size: 16px;
    }
  }
  & p {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    max-height: 58px;
    overflow: hidden;
    width: 90%;
    text-overflow: ellips;
    @media (max-width: 500px) {
      font-size: 12px;
    }
  }

  & .box {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 100%;
    width: 100%;
    background-color: #f9f9f9;
    border-radius: 10px;
    height: 78px;
    margin-top: 8px;
    & div {
      display: flex;
      align-items: center;
      & span {
        font-size: 18px;
        margin-inline-start: 14.5px;

        @media (max-width: 500px) {
          font-size: 14px;
        }
      }
      & .chat {
        margin-inline-start: 42px;
      }
    }

    & button {
      width: 149px;
      /* width: 100%; */
      height: 45px;

      @media (max-width: 500px) {
        width: 100px;
        max-height: 30px;
        font-size: 12px;
        min-height: 40px;
      }
    }

    & img {
      @media (max-width: 500px) {
        width: 20px;
        height: 18px;
      }
    }
  }
`;

export const JoinButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h4 {
    font-size: 12px;
    font-weight: normal;
  }
`;
