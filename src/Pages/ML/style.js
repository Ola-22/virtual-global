import styled from "styled-components";

export const MLContainer = styled.div`
  background: linear-gradient(
      to right,
      rgba(248, 248, 248, 0.8),
      rgba(248, 248, 248, 0.9)
    ),
    url(/images/background.png);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 29px;

  & .box {
    background-color: #ffffff;
    max-width: 1140px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin-top: 27px;

    & h1 {
      font-size: 22px;
      align-self: flex-start;
      margin: 55px 0 42px 4%;
    }

    & > p {
      font-size: 18px;
      max-width: 1043px;
      width: 100%;
      @media (max-width: 1200px) {
        width: 90%;
      }
      &:not(:first-of-type) {
        margin-top: 2%;
      }

      &:last-of-type {
        margin-bottom: 15%;
      }
    }
    @media (max-width: 1200px) {
      width: 90%;
    }
  }
`;

export const BoxContent = styled.div`
  border: 1px solid #d6d6d6;
  max-width: 1078px;
  width: 100%;
  min-height: 443px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 92px;
  & span {
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    & div {
      max-width: 180px;
      width: 100%;
      height: 100px;
      border-radius: 100px / 50px;
      font-size: 20px;
      text-align: center;
      box-shadow: 0 3px 10px #707070;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f8f8f8;
      text-transform: capitalize;
      margin-left: 2px;

      @media (max-width: 500px) {
        max-width: 140px;
        height: 70px;
      }
    }
  }

  & .box-bt {
    width: 130px;
    height: 70px;
    background: red;
    position: relative;
    border-radius: 10px;
    transform: rotate(90deg);
    margin-top: 5%;
    background: #f8f8f8;
    box-shadow: 0 3px 10px #707070;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    & p {
      transform: rotate(180deg);
      text-transform: uppercase;
      font-size: 20px;
      font-weight: normal;
    }
  }

  @media (max-width: 1200px) {
    width: 90%;
  }

  .arrow {
    transform: rotate(135deg);
    margin-top: 2%;
    margin-bottom: -2%;

    @media (max-width: 500px) {
      margin-top: 5%;
      margin-bottom: 1%;
    }
  }

  .arrow .arrow {
    width: 30px;
    height: 15px;
    background: #f8f8f8;
    margin: 0.3em;
    box-shadow: 0 3px 10px #707070;
  }
  .arrow .arrow:after {
    display: block;
    float: left;
    padding: 0;
    content: "";
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    margin: -0.5em 1.9em;
    border-left: 15px solid #f8f8f8;
  }
`;
