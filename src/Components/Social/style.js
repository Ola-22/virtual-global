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
  }
`;
