import { Link } from "react-router-dom";
import * as S from "./style";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import authService from "../../Pages/Register/Auth";

function Header(props) {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    authService.logout();
  };

  return (
    <S.HeaderContainer>
      <Menu />

      <div className="rightNav">
        {currentUser && (
          <Link to="/discussion">
            <img
              src="/images/forum.png"
              alt="form button"
              width="15"
              height="15"
            />
            Forum
          </Link>
        )}

        {currentUser ? (
          <Link to="/" onClick={logOut}>
            logout
          </Link>
        ) : (
          <Link to="/register">Register</Link>
        )}

        <Link className="login" to="/login">
          Login
        </Link>
        <button>
          <img src="/images/search.png" alt="search" />
        </button>
      </div>
    </S.HeaderContainer>
  );
}

export default Header;
