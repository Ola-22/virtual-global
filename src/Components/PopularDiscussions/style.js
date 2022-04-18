import styled from "styled-components";

export const PopularContainer = styled.div`
  position: relative;
  background: linear-gradient(
      to right,
      rgba(241, 242, 245, 0.9),
      rgba(241, 242, 245, 0.9)
    ),
    url(/images/background.png);

  padding-top: 70px;
  & h1 {
    font-size: 36px;
    text-align: center;
    text-transform: uppercase;
    position: relative;
    margin-bottom: 89px;

    &::after {
      content: "";
      width: 91px;
      height: 2px;
      color: #4bb1f1;
      background-color: #4bb1f1;
      position: absolute;
      left: 47%;
      display: flex;
    }
  }
`;

export const PrevArrow = styled.div`
  position: absolute;
  top: 40%;
  left: 2%;
  z-index: 2;
  cursor: pointer;
  &:before {
    display: none;
  }
`;

export const NextArrow = styled.div`
  position: absolute;
  top: 40%;
  right: 2%;
  cursor: pointer;

  &:before {
    display: none;
  }
`;
