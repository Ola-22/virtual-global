import { Link } from "react-router-dom";
import * as S from "./style";

function HeaderForum({ profileInformation, settingsData, onChange, value }) {
  return (
    <S.ForumContainer>
      <S.Container>
        <div className="input-container">
          <img src="./images/searchPage.png" alt="search of the page" />
          <input
            type="text"
            placeholder={settingsData?.items?.translation?.placeholder_search}
            onChange={onChange}
            value={value}
          />
        </div>

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
      </S.Container>
    </S.ForumContainer>
  );
}

export default HeaderForum;
