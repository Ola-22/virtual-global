import * as S from "./style";

function CardPolular() {
  return (
    <S.CardContainer>
      <div className="card-box">
        <h3>Title</h3>
        <p>
          In light of the current situation of wars and human tragedies in the
          World and the absence of a promising horizon where real peace and
          constructive cooperation between people prevails, this proposal urges
          us to think outside the box, looking for creative solutions to try to
          change this reality. The World is made up of many nations and entities
          that differ in interests and goals. Therefore, it is difficult to
          build a unified strategy for a better future for human life on Earth!
          To overcome this reality, this ambitious – long term- proposal
          suggests the creation of a Virtual Global State (VGS) that liberates
          people from the complexities of their geopolitical, civilizational,
          ethnic, racial, religious and ideological differences, though
          respected, and helps address the world’s vital issues, with innovative
          ideas, freely and without restrictions. The goal is to Re-engineer
          Thoughts Toward a Better World. VGS will benefit from the tremendous
          development
        </p>
        <S.LikeCard>
          <div>
            <div>
              <img src="/images/like.png" alt="like the popular discussions" />
              <h6>1,555</h6>
            </div>
            <div>
              <img src="/images/chat.png" alt="like the popular discussions" />
              <h6>1,555</h6>
            </div>
          </div>

          <img src="/images/slideMore.png" alt="slide more of the popular" />
        </S.LikeCard>
      </div>

      <div>
        <div
          className="card-box"
          style={{ backgroundColor: " #fff", marginBottom: "10px" }}
        >
          <h3>Title</h3>
          <p>
            In light of the current situation of wars and human tragedies in the
            World and the absence of a promising horizon where real peace and
            constructive cooperation between people prevails,
          </p>
          <S.LikeCard>
            <div>
              <div>
                <img
                  src="/images/like.png"
                  alt="like the popular discussions"
                />
                <h6>1,555</h6>
              </div>
              <div>
                <img
                  src="/images/chat.png"
                  alt="like the popular discussions"
                />
                <h6>1,555</h6>
              </div>
            </div>

            <img src="/images/slideMore.png" alt="slide more of the popular" />
          </S.LikeCard>
        </div>
        <div className="card-box" style={{ backgroundColor: " #fff" }}>
          <h3>Title</h3>
          <p>
            In light of the current situation of wars and human tragedies in the
            World and the absence of a promising horizon where real peace and
            constructive cooperation between people prevails,
          </p>
          <S.LikeCard>
            <div>
              <div>
                <img
                  src="/images/like.png"
                  alt="like the popular discussions"
                />
                <h6>1,555</h6>
              </div>
              <div>
                <img
                  src="/images/chat.png"
                  alt="like the popular discussions"
                />
                <h6>1,555</h6>
              </div>
            </div>

            <img src="/images/slideMore.png" alt="slide more of the popular" />
          </S.LikeCard>
        </div>
      </div>
    </S.CardContainer>
  );
}

export default CardPolular;
