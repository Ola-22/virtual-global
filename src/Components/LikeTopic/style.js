import styled from "styled-components";

export const topicContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 17px;
  padding-left: 32px;
  padding-bottom: 20px;
  padding-top: 20px;
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
      margin-left: 12px;
    }
  }

  & p {
    font-size: 22px;
  }
  & .text {
    max-width: 1066px;
    background-color: #f9f9f9;
    min-height: 94px;
    display: flex;
    align-items: center;
    padding-left: 22px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    @media (max-width: 1200px) {
      width: 95%;
    }
  }

  /* @media (max-width: 1200px) {
    width: 90%;
  } */
`;
