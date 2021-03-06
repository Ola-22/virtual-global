import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  min-height: 85px;
  height: 100%;
  width: 90%;
  padding-top: 10px;
  padding-bottom: 10.5px;
  & > div,
  & a > div {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-around;

    & h3 {
      font-size: 21px;
      text-transform: uppercase;
      color: #000000;
      margin-inline-start: 21px;

      @media (max-width: 650px) {
        font-size: 12px;
        text-align: center;
      }
    }

    & select {
      outline: none;
      border: none;
    }
  }
  & .right {
    & img {
      border-inline-start: 1px solid rgba(128, 128, 128, 0.16);
      padding-inline-start: 20px;

      @media (max-width: 450px) {
        display: none;
      }
    }

    @media (max-width: 450px) {
      width: 10%;
    }
  }

  & .box-virtual {
    display: flex;
    justify-content: space-between;
    & .img-container {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      border-radius: 6px;
      & img {
        border-radius: 6px;
        @media (max-width: 450px) {
          width: 80px;
          height: 50px;
        }
      }
    }

    @media (max-width: 450px) {
      max-width: 90%;
      width: 100%;
    }
  }
`;
