import styled from "styled-components";

export const sliderMain = styled.div`
  position: relative;
  display: flex;

  align-items: center;
  justify-content: center;
  /* background-size: cover;
  min-height: 600px;
  height: auto; */
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
  top: 0;
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

    @media (max-width: 1060px) {
      width: 100px;
      font-size: 10px;
    }
  }
  & .social {
    margin-inline-end: 1rem;
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
  @media (max-width: 450px) {
    margin-inline-start: 71%;
  }
  /* 
  @media (max-width: 900px) {
    margin-top: -32%;
  } */
`;

export const Controls = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;

  margin-inline-start: 2%;

  color: rgb(45, 152, 218);

  & svg {
    cursor: pointer;
  }
`;
