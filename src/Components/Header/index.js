import { Link } from "react-router-dom";
import * as S from "./style";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import authService from "../../Pages/Register/Auth";

function Header() {
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
        <Link to="/discussion">
          <img
            src="/images/forum.png"
            alt="form button"
            width="15"
            height="15"
          />
          Forum
        </Link>
        {currentUser ? (
          <Link to="/login" onClick={logOut}>
            Logout
          </Link>
        ) : (
          <Link to="/register">Register</Link>
        )}
        <input type="text" placeholder="Enter" />
        <button>
          <img src="/images/search.png" alt="search" />
        </button>
      </div>
    </S.HeaderContainer>
  );
}

export default Header;
