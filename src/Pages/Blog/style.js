import styled from "styled-components";

export const BlogContainer = styled.div`
  background-color: #f8f8f8;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 29px;
  width: 100%;

  & .box {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin-top: 27px;
    min-height: 90vh;

    & .container {
      width: 100%;
    }

    & h1 {
      font-size: 22px;
      margin-top: 10px;
      width: 100%;
      margin-bottom: 22px;

      @media (max-width: 500px) {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 400px) {
    background-color: #ffffff;
  }
`;

export const Main = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  width: 100%;
  height: 100%;
  & .box-virtual {
    max-width: 1170px;
    width: 100%;
  }
  & .right {
    max-width: 110px;
    width: 100%;
  }
`;

export const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  background-color: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  align-items: center;
  height: 200px;

  & .author {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  & h3 {
    font-size: 20px;
    text-transform: capitalize;
  }

  & .card-header {
    display: flex;
    align-items: center;
    width: 55%;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;

    & div {
      display: flex;
      align-items: center;
    }

    @media (max-width: 500px) {
      width: 100%;
    }
  }

  & .card-body {
    width: 92%;

    & button {
      max-width: 150px;
      min-height: 40px;
      margin-top: 10px;
    }

    & p {
      height: 40px;
      overflow: hidden;
      max-width: 100%;
      font-size: 16px;
      font-weight: normal;
    }
  }
`;
