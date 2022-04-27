import * as S from "./style";

function CardBox({ paragraph, totalLikes, totalComments }) {
  return (
    <S.CardForum>
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

export default CardBox;
