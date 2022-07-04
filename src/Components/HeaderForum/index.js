import { Link } from "react-router-dom";
import * as S from "./style";
import { useState, useEffect } from "react";
import authService from "../../Pages/Register/Auth";

function HeaderForum({
  profileInformation,
  settingsData,
  onChange,
  value,
  onSubmit,
}) {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <S.ForumContainer>
      <S.Container>
        <form onSubmit={onSubmit}>
          <div className="input-container">
            <img
              onClick={onSubmit}
              src="./images/searchPage.png"
              alt="search of the page"
            />
            <input
              type="text"
              placeholder={settingsData?.items?.translation?.placeholder_search}
              onChange={onChange}
              value={value}
            />
          </div>
        </form>

        {currentUser ? (
          <div className="profile-box">
            <Link to="/profile">
              <img
                className="user-image"
                src={profileInformation?.user.image}
                alt="user profile"
              />
            </Link>
            <div>
              <p> {settingsData?.items?.translation?.special_welcome}</p>
              <h6>{profileInformation?.user.first_name}</h6>
            </div>
            <span>
              <img src="./images/view.png" alt="view the profile of the user" />
            </span>
            <span>
              <img
                src="./images/notifications.png"
                alt="notifications of the user"
              />
            </span>
          </div>
        ) : (
          <S.ContainerBtn>
            <Link to="/register">
              {settingsData?.items?.translation?.register}
            </Link>

            <Link className="login" to="/login">
              {settingsData?.items?.translation?.login}
            </Link>
          </S.ContainerBtn>
        )}
      </S.Container>
    </S.ForumContainer>
  );
}

export default HeaderForum;
