import styled from "styled-components";

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > a {
    background-color: #ffffff;
    max-width: 47px;
    width: 100%;
    height: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    margin-top: 14px;

    & img {
      object-fit: contain;
    }
  }

  @media (max-width: 900px) {
    /* display: none; */
  }
`;
