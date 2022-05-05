import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: #f8f8f8;
  padding-top: 31px;
  padding-bottom: 46px;
`;

export const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 765px;
  width: 100%;
  min-height: 287px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 0 42px;
  margin-bottom: 15px;
  padding-top: 29px;
  & h6 {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: normal;
  }
  & h3 {
    font-size: 22px;
    margin: 12px 0 23px;
    color: #000000;
    font-weight: normal;
  }
  & p {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
  }
  & .container {
    display: flex;
    justify-content: space-around;
    max-width: 215px;
    width: 100%;
    border-radius: 10px;
    height: 78px;
    margin-top: 8px;
    & div {
      display: flex;
      align-items: center;
      & span {
        font-size: 18px;
        margin-left: 14.5px;
      }
      &:last-of-type {
        margin-inline-start: 42px;
      }
    }
  }

  & .comments {
    display: flex;
    flex-direction: column;
    /* position: relative; */

    & .number-comments {
      font-size: 22px;
      position: relative;
      font-weight: normal;
      &::after {
        content: "";
        max-width: 676px;
        width: 100%;
        height: 1px;
        background: #e8e8e8;
        border-radius: 25px;
        position: absolute;
        bottom: -15px;
        /* top: 100%; */
        left: 0;
      }
    }

    .add-comment {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-bottom: 39px;

      &::before {
        content: "";
        display: flex;
        max-width: 100%;
        width: 100%;
        height: 1px;
        background-color: #e8e8e8;
        margin: 36.5px 0 38px;
      }

      & input {
        max-width: 461px;
        width: 100%;
        max-height: 50px;
        height: 100%;
        border: 1px solid #e6e6e6;
        border-radius: 25px;

        &:placeholder-shown {
          padding-inline-start: 25px;
          text-transform: capitalize;
        }
      }

      & button {
        max-width: 149px;
      }
    }
  }
`;
