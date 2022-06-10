import styled from "styled-components";

export const FaqsContainer = styled.div`
  background: #f8f8f8;
  flex-direction: column;
  min-height: 100vh;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-wrap: wrap;
  padding-bottom: 29px;

  & .box {
    width: 70%;
    margin-top: 10%;
    display: flex;
    flex-direction: column;

    & .accordian {
      background: white;
      max-width: 100%;
    }
  }

  & .accordion_faq {
    max-width: 90%;
    justify-content: space-between;
  }
`;

export const Main = styled.div`
  width: 100%;

  & .box-virtual {
    max-width: 1000px;
    width: 100%;
    @media (max-width: 1200px) {
      max-width: 820px;
    }
  }

  & .nav-container {
    width: 100%;
  }
`;
