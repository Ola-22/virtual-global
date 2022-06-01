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
  padding-bottom: 121px;

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
  left: 0.5%;
  z-index: 2;
  cursor: pointer;
  &:before {
    display: none;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;

export const NextArrow = styled.div`
  position: absolute;
  top: 40%;
  right: 0.5%;
  cursor: pointer;

  &:before {
    display: none;
  }

  @media (max-width: 550px) {
    display: none;
  }
`;

export const MainSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* height: 543px;
  background: #fff; */
`;
