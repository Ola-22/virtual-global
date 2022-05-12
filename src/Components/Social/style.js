import styled from "styled-components";

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 47px;
  & > a {
    background-color: #ffffff;
    max-width: 47px;
    width: 100%;
    height: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 14px;

    & img {
      object-fit: contain;
    }

    & svg {
      color: #1976d2;
    }
    /* & svg[data-icon="instagram"] {
      font-size: 30px;
      color: white;
      background: linear-gradient(#ffc107, #9c27b0);

      background: radial-gradient(
        circle at 30% 107%,
        #fdf497 0%,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #fff 90%
      );
    } */
  }
  @media (max-width: 900px) {
    /* display: none; */
  }
`;
