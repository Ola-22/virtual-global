import styled from "styled-components";

export const topicContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  min-height: 137px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 17px;
  padding-inline-start: 32px;
  padding-bottom: 20px;
  padding-top: 20px;
  color: #000;
  & h5 {
    font-size: 18px;
    font-weight: normal;
    text-transform: capitalize;
  }
  & h6 {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: normal;
  }

  & div {
    display: flex;
    & div {
      flex-direction: column;
      margin-inline-start: 12px;
    }
  }

  & p {
    font-size: 22px;
  }
  & .text {
    max-width: 1066px;
    background-color: #f9f9f9;
    min-height: 50px;
    word-break: break-all;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding-inline-start: 22px;
    padding-inline-end: 22px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    @media (max-width: 1200px) {
      width: 95%;
    }
  }

  & .paragraph {
    width: 97%;
    margin-top: 12px;
    margin-bottom: 12px;
  }
`;
