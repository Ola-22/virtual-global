import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-around;
  /* flex-wrap: wrap; */
  margin-top: 84px;

  @media (max-width: 800px) {
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

    & button {
      max-width: 184px;
      width: 100%;
      margin-top: 36px;
    }
  }

  & > div:last-of-type {
    & img {
      max-width: 550px;
      width: 100%;
    }
  }

  & .text {
    font-size: 15px;
    opacity: 0.5;
    max-width: 558px;
    width: 100%;
    white-space: break-spaces;
    margin-top: 19px;
  }
`;
