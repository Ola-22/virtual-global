import styled from "styled-components";

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 47px;
  & > a {
    background-color: #ffffff;
    min-width: 47px;
    width: 100%;
    height: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 14px;
    &:hover {
      background-color: #1976d2;
      color: #ffffff;
      transition: 0.5s ease-in-out;
      & svg {
        color: #ffffff;
      }
    }
    & svg {
      color: #1976d2;
    }
    & svg[data-icon="instagram"] {
      /* font-size: 30px;
      color: white;
      background: linear-gradient(#ffc107, #9c27b0);
      background: radial-gradient(
        circle at 30% 107%,
        #fdf497 0%,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #fff 90%
      ); */
      /* border-radius: 5px 5px 15px 15px; */
    }
  }
  @media (max-width: 900px) {
    /* display: none; */
  }
`;
