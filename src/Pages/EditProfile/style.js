import styled from "styled-components";

export const MainEdit = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;

  & .header {
    height: 10%;
    width: 80%;
    display: flex;
    align-items: center;

    & div {
      cursor: pointer;
    }
  }

  & .main-box {
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    background: #f8f8f8;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;

    & .box {
      background-color: #fff;
      height: 85%;
      width: 60%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;
      border-radius: 8px;
      @media (max-width: 1000px) {
        width: 80%;
      }
    }
  }

  & .box-inputs {
    height: 75%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    & input,
    select {
      width: 100%;
      height: 40px;
      border-radius: 8px;
      border: 1px solid #dfdfdf;
      padding-inline-start: 24px;
    }
    & label {
      font-size: 13px;
      text-transform: capitalize;
      margin-bottom: 7px;
    }
  }
`;
export const userImage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10%;
  top: 10%;

  input[type="file"] {
    display: none;
  }
`;

export const boxInput = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  & div {
    display: flex;
    flex-direction: column;
    width: 47%;
  }
  & .gender {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    & input[type="radio"] {
      width: 20px;
      height: 20px;
    }

    & span {
      font-size: 14px;
    }
  }

  & .date {
    background: #fff url("./images/calendar.png") 97% 50% no-repeat;
    position: relative;
    &::-webkit-calendar-picker-indicator {
      bottom: 0;
      cursor: pointer;
      height: auto;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      width: auto;
      border: 1px solid #dfdfdf;
    }
    &::-webkit-inner-spin-button {
      display: none;
    }
    &::-webkit-calendar-picker-indicator {
      opacity: 0;
    }
  }

  & select {
    background: #fff url("./images/arrow.png") 97% 50% no-repeat;
    color: rgba(0, 0, 0, 0.3);
    appearance: none;
    & option {
      color: rgba(0, 0, 0);
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  & img {
    width: 90px;
    height: 90px;
    border: 5px solid white;
    padding: 3px;
    border-radius: 50%;
  }

  & .label {
    cursor: pointer;
  }

  & label {
    cursor: pointer;
  }
`;
