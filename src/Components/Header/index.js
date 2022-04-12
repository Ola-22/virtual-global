import { Link } from "react-router-dom";
import * as S from "./style";

function Header() {
  return (
    <S.HeaderContainer>
      <div>
        <Link to="/">Home</Link>
        <Link to="/">who we are</Link>
        <Link to="/">q&a</Link>
        <Link to="/">vgs</Link>
        <Link to="/">bmi</Link>
        <Link to="/">ml</Link>
        <Link to="/">wc</Link>
        <Link to="/">vission</Link>
      </div>
    </S.HeaderContainer>
  );
}

export default Header;
