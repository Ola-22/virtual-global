import { MenuIcon } from "../svg";
import * as S from "./style";
import { FaSpinner } from "react-icons/fa";

function Button({ title, onClick, img, className, spinner }) {
  return (
    <S.ButtonContainer className={className} onClick={onClick}>
      {title}

      {img && <MenuIcon fill="white" />}
      {spinner && <FaSpinner icon="spinner" />}
    </S.ButtonContainer>
  );
}

export default Button;
