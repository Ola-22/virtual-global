import CardForum from "../Components/CardForum";
import HeaderForum from "../Components/HeaderForum";
import Nav from "../Components/Nav";
import * as S from "./style";

function Forum() {
  return (
    <div style={{ width: "100%" }}>
      <Nav />
      <HeaderForum />
      <S.ForumContainer>
        <div>
          <div className="topForum">
            <div>
              <h2>topics</h2>
              <p>+1720</p>
            </div>
            <div>
              <h2>replies</h2>
              <p>1.558.114</p>
            </div>
          </div>

          <CardForum
            title="hot discussions"
            paragraph="In light of the current situation of wars and human tragedies in the World and "
            totalComments="1.555"
            totalLikes="1.555"
          />
        </div>
        <div></div>
      </S.ForumContainer>
    </div>
  );
}

export default Forum;
