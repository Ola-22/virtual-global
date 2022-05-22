import { MenuIcon } from "../svg";
import * as S from "./style";

function Button({ title, onClick, img, className }) {
  return (
    <S.ButtonContainer className={className} onClick={onClick}>
      {title}

      {img && <MenuIcon fill="white" />}
    </S.ButtonContainer>
  );
}

export default Button;
