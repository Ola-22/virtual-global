import { Link } from "react-router-dom";
import * as S from "./style";

function HeaderForum({ profileInformation }) {
  console.log("firstss", profileInformation);
  return (
    <S.ForumContainer>
      <div>
        <img src="/images/searchPage.png" alt="search of the page" />
        <input type="text" placeholder="search here" />
      </div>
      <div>
        <Link to="/profile">
          <img
            className="user-image"
            src={profileInformation?.user.image}
            alt="user profile"
          />
        </Link>
        <div>
          <p>welocome</p>
          <h6>{profileInformation?.user.first_name}</h6>
        </div>
        <span>
          <img src="/images/view.png" alt="view the profile of the user" />
        </span>
        <span>
          <img
            src="/images/notifications.png"
            alt="notifications of the user"
          />
        </span>
      </div>
    </S.ForumContainer>
  );
}

export default HeaderForum;
