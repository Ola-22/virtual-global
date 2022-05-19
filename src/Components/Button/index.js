import * as S from "./style";

function Button({ title, onClick, img, className }) {
  return (
    <S.ButtonContainer className={className} onClick={onClick}>
      {title}

      {img && <img src="/images/send.png" alt="send data" />}
    </S.ButtonContainer>
  );
}

export default Button;
