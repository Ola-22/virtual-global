import * as S from "./style";

function Button({ title, onClick, img }) {
  return (
    <S.ButtonContainer onClick={onClick}>
      {title}

      {img && <img src="/images/send.png" alt="send data" />}
    </S.ButtonContainer>
  );
}

export default Button;
