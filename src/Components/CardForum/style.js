import styled from "styled-components";

export const CardForum = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  /* align-items: center; */
  padding: 21px;
  max-width: 367px;
  width: 100%;
  height: 367px;

  & h3 {
    font-size: 22px;
    color: #2d98da;
    text-transform: capitalize;
  }

  & .boxCard {
    height: 135px;
    border-radius: 10px;
    border: 1px solid #e8e8e8;
    padding: 21px;
    & div:first-of-type {
      display: flex;
      align-items: center;
    }
    & p {
      font-size: 16px;
      max-width: 290px;
      height: 58px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    & img {
      width: 23px;
    }
    & span {
      font-size: 18px;
      margin-left: 14.6px;
    }
  }
`;
