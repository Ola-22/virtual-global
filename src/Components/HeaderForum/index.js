import * as S from "./style";

function HeaderForum() {
  return (
    <S.ForumContainer>
      <div>
        <img src="/images/searchPage.png" alt="search of the page" />
        <input type="text" placeholder="search here" />
      </div>
      <div>
        <img src="/images/user.png" alt="user profile" />
        <div>
          <p>welocome</p>
          <h6>Marwan</h6>
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
