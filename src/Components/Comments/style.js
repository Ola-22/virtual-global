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
    }
  }

  & .paragraph {
    background-color: #f9f9f9;
    max-width: 689px;
    min-height: 94px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 17px;
    margin-bottom: 17.5px;
    & p {
      max-width: 633px;
      align-self: center;
    }
  }
`;
