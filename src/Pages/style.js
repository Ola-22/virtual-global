import styled from "styled-components";

export const MainEdit = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  & .box-inputs {
    height: 80%;
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
      padding-left: 15px;
    }
  }
`;

export const EditProfile = styled.div`
  background-color: #f8f8f8;
  height: 88%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const userImage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10%;
  position: absolute;
  top: 10%;
  & img {
    width: 100px;
    height: 100px;
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
    margin-top: 120%;
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
  justify-content: space-between;
  & div {
    display: flex;
    flex-direction: column;
    width: 40%;
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
