import CardForum from "../../Components/CardForum";
import Nav from "../../Components/Nav";
import HeaderForum from "../../Components/HeaderForum";
import Footer from "../../Components/Footer";
import CardTabs from "../../Components/CardTabs";
import * as S from "./style";
import Comments from "../../Components/Comments";

function Details() {
  return (
    <div style={{ width: "100%" }}>
      <Nav />
      <HeaderForum />
      <S.DetailsContainer>
        <CardForum
          title="Related Topics"
          paragraph="In light of the current situation of wars and human tragedies in the World and "
          totalComments="1.555"
          totalLikes="1.555"
        />

        <S.DetailsBox>
          <h6>Asked : June 18, 2020</h6>
          <h3>In light of the current situation of wars and human</h3>
          <p>
            In light of the current situation of wars and human tragedies in the
            World and the absence of a promising horizon where real peace and
            constructive cooperation between people prevails, this proposal
            urges us to think outside the box, looking for creative solutions to
            try to change this reality. The World is made up of many nations and
            entities that differ in interests and goals. Therefore, it is
            difficult to build a unified strategy for a better future for human
            life on Earth! To overcome this reality, this ambitious – long term-
            proposal suggests the creation of a Virtual Global State (VGS) that
            liberates people from the complexities of their geopolitical,
            civilizational, ethnic, racial, religious and ideological
            differences, though respected, and helps address
          </p>
          <div className="container">
            <div>
              <img src="/images/like.png" alt="likes of the content" />
              <span>1.555</span>
            </div>
            <div>
              <img src="/images/chat.png" alt="likes of the content" />
              <span>1.555</span>
            </div>
          </div>
          <div className="comments">
            <h5 className="number-comments">195 comments</h5>
            <Comments replyComment />
            <Comments />
          </div>
        </S.DetailsBox>
      </S.DetailsContainer>
      <Footer />
    </div>
  );
}

export default Details;
