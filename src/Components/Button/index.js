import { MenuIcon } from "../svg";
import * as S from "./style";
import { FaSpinner } from "react-icons/fa";

function Button({ title, onClick, img, className, spinner, disabled }) {
  return (
    <S.ButtonContainer
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {title}

      {img && <MenuIcon fill="white" />}
      {spinner && <FaSpinner icon="spinner" />}
    </S.ButtonContainer>
  );
}

export default Button;
