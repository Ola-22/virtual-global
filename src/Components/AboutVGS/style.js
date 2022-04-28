import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-around;
  /* flex-wrap: wrap; */
  margin-top: 84px;

  @media (max-width: 970px) {
    flex-wrap: wrap;
  }

  & > div:first-of-type {
    @media (max-width: 1200px) {
      /* width: 50%; */
      margin-left: 20px;
    }
    & h1 {
      font-size: 36px;
      color: #4bb1f1;
      text-transform: uppercase;
    }
    & h6 {
      font-size: 25px;
      margin-top: 18px;
    }
    & p {
      font-size: 15px;
      opacity: 0.5;
      max-width: 558px;
      width: 100%;
      white-space: break-spaces;
      &:first-of-type {
        margin-top: 19px;
      }
    }

    & button {
      background: linear-gradient(to bottom right, #2395db, #5abbf8) #2395db;
      max-width: 184px;
      width: 100%;
      height: 50px;
      border: none;
      border-radius: 88px;
      font-size: 14px;
      color: #ffffff;
      margin-top: 36px;
      margin-bottom: 89px;
    }
  }

  & > div:last-of-type {
    /* background: url(/images/AboutBack.png) no-repeat; */
    background-size: contain;
    & img {
      max-width: 550px;
      width: 100%;
    }
  }
`;
