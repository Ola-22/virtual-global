import styled from "styled-components";

export const headerContainer = styled.div`
  width: 100%;

  & .box-virtual {
    max-width: 1000px;
    width: 100%;
  }

  & .right {
    @media (min-width: 600px) and (max-width: 900px) {
      margin-inline-end: 70px;
    }
  }

  & .nav-container {
    width: 91%;
    margin: auto;
    justify-content: space-between;
    @media (max-width: 600px) {
      width: 90%;
      margin: auto;
    }
  }
`;
