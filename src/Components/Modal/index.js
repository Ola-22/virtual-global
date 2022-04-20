import React from "react";
import * as S from "./style";

export const Modal = ({ show, close, paragraph, Title }) => {
  return (
    <S.ModalWrapper
      style={{
        transform: show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="modal-header">
        <p>{Title}</p>
        <span onClick={close} className="close-modal-btn">
          <img src="/images/close.png" alt="close the Modal" />
        </span>
      </div>

      <div className="modal-body">
        <p>{paragraph}</p>
      </div>
    </S.ModalWrapper>
  );
};
