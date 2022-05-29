import { useEffect, useState } from "react";
import authService from "../../Pages/Register/Auth";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import Menu from "./Munu";

function Header({ settingsData, profileInformation }) {
  const [currentUser, setCurrentUser] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    authService.logout();
    navigate("/");
  };

  return (
    <S.HeaderContainer>
      <Menu settingsData={settingsData} />

      <div className="rightNav">
        {currentUser && (
          <>
            <S.profileInformation>
              <Link to="/profile">
                <img src={profileInformation?.user.image} alt="" />
              </Link>
              <div>
                <p>{settingsData?.items?.translation?.special_welcome}</p>
                <h6>{profileInformation?.user.first_name}</h6>
              </div>
            </S.profileInformation>

            <Link to="/discussion">
              <img
                src="/images/forum.png"
                alt="form button"
                width="15"
                height="15"
              />
              {settingsData?.items?.translation?.forum_btn}
            </Link>
          </>
        )}

        {currentUser ? (
          <Link
            to="/"
            onClick={() => {
              logOut();
              navigate("/login");
            }}
          >
            {settingsData?.items?.translation?.log_out}
          </Link>
        ) : (
          <Link to="/register">Register</Link>
        )}
        {!currentUser && (
          <Link className="login" to="/login">
            {settingsData?.items?.translation?.login}
          </Link>
        )}
      </div>
    </S.HeaderContainer>
  );
}

export default Header;
