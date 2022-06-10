import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  padding-bottom: 22px;
  & > div:first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    flex-direction: column;
    max-width: 212px;
    width: 100%;
    height: 71px;
    background-color: #ffffff;
    border-radius: 7px;
    align-content: center;
    margin: 15px 14px 25px 0;
    & h4 {
      color: rgba(0, 0, 0, 0.6);
      font-size: 11px;
    }
  }
  & > div:last-of-type {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    & img {
      z-index: 5;
      @media (max-width: 500px) {
        max-width: 90%;
        margin: auto;
      }
    }
  }
  & .social {
    @media (max-width: 600px) {
      width: 100%;
      justify-content: space-evenly;
      align-items: center;
      display: flex;
      flex-direction: row;
    }
  }
`;

export const BackGround = styled.div`
  position: absolute;
  width: 419px;
  max-width: 100%;
  opacity: 0.4;
  /* z-index: 2; */
  height: 410px;
  border-radius: 20px;
  background-color: #4bb1f1;
  transform: rotate(-5deg);
  margin-inline-start: 47%;
  margin-top: 7.5%;
  @media (max-width: 960px) {
    display: none;
  }

  @media (max-width: 800px) {
    display: none;
  }
  @media (min-width: 960px) and (max-width: 1200px) {
    margin-inline-start: 44%;
  }

  @media (min-width: 1400px) {
    margin-inline-start: 48%;
  }
`;

export const sliderMain = styled.div`
  position: relative;
  display: flex;
  background: linear-gradient(
      to right,
      rgba(248, 248, 248, 0.8),
      rgba(248, 248, 248, 0.9)
    ),
    url(/images/background.png);
  align-items: center;
  justify-content: center;
  background-size: cover;
  min-height: 600px;
  height: auto;
  justify-content: space-between;
  @media (max-width: 850px) {
    min-height: 870px;
  }

  & .container-writer {
    display: flex;
    width: 100%;
    height: 100%;
    /* flex-direction: column; */
    justify-content: space-around;
    @media (max-width: 960px) {
      width: 100%;
      justify-content: space-between;
    }
    @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;
      min-height: 870px;
      height: 100%;
      justify-content: space-between;
    }
    @media (min-width: 450px) and (max-width: 600px) {
      min-width: 86%;
      width: 100%;
    }
  }
`;

export const contentBanner = styled.h1`
  /* max-width: 650px;
  width: 100%; */
  padding-top: 20%;
  max-width: 500px;
  & span {
    font-size: 30px;
    text-transform: uppercase;
    color: #ffffff !important;
    background-color: #2f2f2f;
    border-radius: 5px;
    line-height: 65px;
    padding: 10px;
    box-decoration-break: clone;
    margin-inline-start: 7%;
    @media (max-width: 700px) {
      font-size: 20px;
    }
  }
  @media (max-width: 700px) {
    text-align: center;
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

export const NumberVirtual = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & .box-number {
    margin-top: 15px;
    margin-inline-end: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 212px;
    width: 100%;
    height: 71px;
    background-color: #ffffff;
    border-radius: 7px;
    @media (max-width: 1100px) {
      max-width: 152px;
      font-size: 12px;
    }
  }
  & .social {
    margin-inline-end: 1rem;
  }
  & h4 {
    color: rgba(0, 0, 0, 0.6);
    font-size: 11px;
    text-transform: uppercase;
    text-align: center;
  }

  @media (max-width: 450px) {
    display: none;
  }
  @media (max-width: 900px) {
    margin-top: -32%;
  }
`;

export const ContainerBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* @media (max-width: 960px) {
    margin-inline-start: 80%;
  } */
`;
