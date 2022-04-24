import { Link } from "react-router-dom";
import * as S from "./style";
import Menu from "./Menu";

function Header({ open }) {
  return (
    <S.HeaderContainer>
      <Menu />

      <div className="rightNav">
        <Link to="/forum">
          <img
            src="/images/forum.png"
            alt="form button"
            width="15"
            height="15"
          />
          Forum
        </Link>
        <Link to="/register">Register</Link>
        <input type="text" placeholder="Enter" />
        <button>
          <img src="/images/search.png" alt="search" />
        </button>
      </div>
    </S.HeaderContainer>
  );
}

export default Header;
