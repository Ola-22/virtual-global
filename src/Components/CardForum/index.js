import * as S from "./style";

function CardForum({ title, paragraph, totalLikes, totalComments }) {
  return (
    <S.CardForum>
      <h3>{title}</h3>
      <div className="boxCard">
        <p>{paragraph}</p>
        <div>
          <div>
            <img src="/images/like.png" alt="like the discussions" />
            <span>1.555</span>
          </div>

          <div>
            <img src="/images/chat.png" alt="like the discussions" />
            <span>1.555</span>
          </div>
        </div>
      </div>
    </S.CardForum>
  );
}

export default CardForum;
