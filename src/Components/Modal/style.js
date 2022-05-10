import styled from "styled-components";

export const ModalWrapper = styled.div`
  background: #fff;
  width: 80%;
  /* max-width: 1140px; */
  max-height: 608px;
  height: 90%;
  position: absolute;
  transition: all 0.5s ease;
  border-radius: 10px;

  & .modal-header {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    & p {
      color: #2d98da;
      font-size: 22px;
      text-transform: uppercase;
      margin-left: 35px;
    }

    & span {
      cursor: pointer;
    }
  }
`;
