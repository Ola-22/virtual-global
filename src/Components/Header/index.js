import { Link } from "react-router-dom";
import * as S from "./style";
import Menu from "./Menu";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`;

function Header({ open }) {
  return (
    <S.HeaderContainer>
      <Nav>
        <Menu />
      </Nav>

      <div className="rightNav">
        <Link to="/">
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
