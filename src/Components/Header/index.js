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
      <div>
        <Link to="/">
          <img
            src="/images/forum.png"
            alt="form button"
            width="15"
            height="15"
          />
          Forum
        </Link>
        <Link to="/">Register</Link>
        <input type="text" placeholder="Enter" />
        <button>
          <img src="/images/search.png" alt="search" />
        </button>
      </div>
    </S.HeaderContainer>
  );
}

export default Header;
