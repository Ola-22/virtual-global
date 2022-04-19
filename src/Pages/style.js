import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  background: linear-gradient(
      to right,
      rgba(248, 248, 248, 0.8),
      rgba(248, 248, 248, 0.9)
    ),
    url(/images/background.png);
  width: 100%;
  height: 100vh;
`;

export const RegisterBox = styled.div`
  max-width: 798px;
  width: 90%;
  height: 90%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.16);
  & h2 {
    text-align: center;
  }
  & input,
  select {
    max-width: 361px;
    width: 100%;
    height: 55px;
    border-radius: 10px;
    border: 1px solid #dfdfdf;

    &::placeholder {
      padding-left: 24px;
    }
    &[type="email"] {
      max-width: 739px;
      width: 90%;
    }
  }
`;

export const RegisterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 739px;
  width: 90%;
  /* margin-bottom: 20px; */

  & div {
    display: flex;
    flex-direction: column;
    width: 45%;
    &:last-of-type {
      margin-left: 1px;
    }
  }

  &:first-of-type {
    margin-top: 36px;
  }
`;

export const RegisterGender = styled.div`
  max-width: 739px;
  width: 90%;

  & div {
    display: flex;
    & input {
      width: 17px;
      height: 17px;
    }
    & .gender {
      margin-left: 66px;
    }
  }
`;

export const AnchorTag = styled.span`
  text-decoration: underline;
  color: #2d98da;
  cursor: pointer;
`;
