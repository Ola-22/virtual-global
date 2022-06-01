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
  }

  & .main-box {
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    background: linear-gradient(
        to right,
        rgba(248, 248, 248, 0.8),
        rgba(248, 248, 248, 0.9)
      ),
      url(/images/background.png);
    background-size: cover;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    & .box {
      background-color: #fff;
      height: 85%;
      width: 60%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;
      border-radius: 8px;
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
      padding-inline-start: 15px;
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
  & img {
    width: 90px;
    height: 90px;
    margin: 0;
    border: 5px solid white;
    padding: 3px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
  }
  input[type="file"] {
    display: none;
  }
  & .label {
    display: flex;
    flex-flow: column;
    margin-top: 84%;
    justify-content: center;
    align-items: center;
    & .image-upload {
      cursor: pointer;
    }
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
  }
`;
