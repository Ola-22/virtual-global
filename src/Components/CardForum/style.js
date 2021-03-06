import styled from "styled-components";

export const CardForum = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  align-items: center;
  border-radius: 10px;
  width: 100%;

  & h3 {
    font-size: 22px;
    color: #2d98da;
    text-transform: capitalize;
    margin-top: 33px;
    margin-inline-end: 0;
    margin-bottom: 30.5px;
    margin-inline-start: 22px;
    width: 90%;
    @media (max-width: 500px) {
      font-size: 18px;
    }
  }

  & .boxCard {
    height: 135px;
    border-radius: 10px;
    border: 1px solid #e8e8e8;
    padding: 21px;
    margin-bottom: 7px;
    width: 90%;
    & div:first-of-type {
      display: flex;
      align-items: center;
      margin-inline-end: 13px;

      @media (max-width: 800px) {
        justify-content: space-around;
      }
    }
    & p {
      font-size: 16px;
      max-width: 290px;
      height: 58px;
      overflow: hidden;
      text-overflow: ellipsis;
      @media (max-width: 500px) {
        font-size: 14px;
      }
    }
    & img {
      width: 23px;
      @media (max-width: 500px) {
        width: 18px;
      }
    }
    & span {
      font-size: 18px;
      margin-inline-start: 14.6px;

      @media (max-width: 500px) {
        font-size: 14px;
      }
    }

    & div {
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 700px) {
    max-width: 100%;
    width: 100%;
  }

  & a {
    width: 100%;
    color: #000000;
  }
`;
