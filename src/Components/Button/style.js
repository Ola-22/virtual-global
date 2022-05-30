import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: ${(props) =>
    props.primaryGround
      ? "#ffffff"
      : "linear-gradient(to top right, #2395db, #5abbf8) #2395db"};

  max-width: ${(props) => (props.primary ? "184px" : "290px")};
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 88px;
  font-size: 14px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  &:hover {
    background: #ffffff;
    color: #5abbf8;
    border: 1px solid #5abbf8;
    transition: 0.5s ease-in-out;
  }

  & img {
    margin-inline-start: 46px;
  }
`;
