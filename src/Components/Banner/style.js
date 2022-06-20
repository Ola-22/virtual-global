import styled from "styled-components";

export const sliderMain = styled.div`
  position: relative;
  display: flex;
  direction: ltr;
  align-items: center;
  justify-content: center;
  justify-content: space-between;

  & .video {
    width: 100%;
    height: auto;
    min-height: 500px;
    object-fit: inherit;
  }
`;

export const NumberVirtual = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  margin-inline-start: 83%;
  direction: ltr;
  top: 0;
  width: 12%;
  @media (min-width: 750px) and (max-width: 1100) {
    margin-inline-start: 86%;
  }
  & .box-number {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 212px;
    height: 71px;
    background-color: #ffffff;
    border-radius: 7px;
    @media (max-width: 900px) {
      width: 115px;
      height: 50px;
      margin-top: 5px;
    }

    & h2 {
      @media (max-width: 900px) {
        font-size: 18px;
      }
    }
  }
  & .social {
    /* margin-inline-end: 1rem; */
    @media (max-width: 500px) {
      display: none;
    }
    & a {
      @media (max-width: 1060px) {
        width: 36px;
        height: 36px;
        min-width: 36px;
      }

      & svg {
        @media (max-width: 1060px) {
          width: 14px;
          height: 14px;
        }
      }
    }
  }
  & h4 {
    color: rgba(0, 0, 0, 0.6);
    font-size: 11px;
    text-transform: uppercase;
    text-align: center;

    @media (max-width: 450px) {
      font-size: 10px;
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;

  margin-inline-start: 2%;

  color: rgb(45, 152, 218);

  & svg {
    cursor: pointer;

    &:last-of-type {
      margin-inline-start: 8px;
    }
  }
`;
