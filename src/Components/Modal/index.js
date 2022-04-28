import React from "react";
import * as S from "./style";

export const Modal = ({ show, content }) => {
  return (
    <S.ModalWrapper
      style={{
        transform: show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      {content}
    </S.ModalWrapper>
  );
};
