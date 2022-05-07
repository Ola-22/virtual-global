import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: linear-gradient(to top right, #2395db, #5abbf8) #2395db;
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

  & img {
    margin-left: 46px;
  }
`;
