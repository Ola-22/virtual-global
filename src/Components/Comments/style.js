import styled from "styled-components";

export const commentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 44px;
  & div {
    display: flex;
    & .user {
      display: flex;
      flex-direction: column;
      margin-inline-start: 12px;
    }
  }

  & .user-image {
    width: 54px;
    height: 54px;
    object-fit: cover;
    border-radius: 50%;
  }
  & .paragraph {
    background-color: #f9f9f9;
    max-width: 689px;
    width: 100%;
    min-height: 94px;
    border-radius: 10px;
    display: flex;
    overflow-y: scroll;
    height: 20px;
    word-break: break-all;
    /* align-items: center; */
    margin-top: 17px;
    margin-bottom: 17.5px;
    padding: 1% 2% 2% 5%;
    & p {
      max-width: 633px;
      align-self: center;
    }
  }

  & .likeComment {
    display: flex;
    align-items: center;
    & > div:last-of-type {
      margin-left: 71px;
    }
    & span {
      margin-left: 14.6px;
    }
    & img {
      cursor: pointer;
    }
  }
`;

export const replyComments = styled.div`
  padding-inline-start: 52.5px;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  border-left: 5px solid rgba(45, 152, 218, 10%);

  & p {
    width: 92%;
  }

  & .user-image {
    width: 54px;
    height: 54px;
    object-fit: cover;
    border-radius: 50%;
  }
`;
