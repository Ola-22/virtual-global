import styled from "styled-components";

export const CardForum = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  align-items: center;
  /* max-width: 367px;
  width: 100%; */
  border-radius: 10px;
  max-height: 549px;
  height: 100%;
  width: 100%;
  &:last-child {
    padding-bottom: 34.5px;
  }

  & h3 {
    font-size: 22px;
    color: #2d98da;
    text-transform: capitalize;
    margin: 33px 0 30.5px 22px;
    align-self: flex-start;
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
    }
    & img {
      width: 23px;
    }
    & span {
      font-size: 18px;
      margin-left: 14.6px;
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
`;
