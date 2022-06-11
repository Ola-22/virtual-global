import styled from "styled-components";

export const replyComments = styled.div`
  padding-inline-start: 52.5px;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  border-inline-start: 5px solid rgba(45, 152, 218, 10%);

  & div {
    display: flex;
    & .user {
      display: flex;
      flex-direction: column;
      margin-inline-start: 12px;
    }
  }
  & p {
    width: 92%;
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
    /* min-height: 94px; */
    border-radius: 10px;
    display: flex;
    /* overflow-y: scroll; */
    height: auto;
    word-break: break-all;
    /* align-items: center; */
    margin-top: 17px;
    margin-bottom: 17.5px;
    padding: 2% 2% 2% 5%;
    & p {
      max-width: 633px;
      align-self: center;
    }
  }

  & .likeComment {
    display: flex;
    align-items: center;
    & > div:last-of-type {
      margin-inline-start: 71px;
    }
    & span {
      margin-inline-start: 14.6px;
    }
    & img {
      cursor: pointer;
    }
  }
`;
