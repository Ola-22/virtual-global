import * as S from "./style";

function CardBox({
  paragraph,
  totalLikes,
  totalComments,
  onClick,
  likesCount,
}) {
  return (
    <S.CardForum className="card-box">
      <div className="boxCard">
        <p
          dangerouslySetInnerHTML={{
            __html: paragraph,
          }}
        />
        <div>
          {likesCount && (
            <div>
              <img
                src="./images/like.png"
                onClick={onClick}
                alt="like the discussions"
              />
              <span>{totalLikes}</span>
            </div>
          )}

          <div>
            <img src="./images/chat.png" alt="like the discussions" />
            <span>{totalComments}</span>
          </div>
        </div>
      </div>
    </S.CardForum>
  );
}

export default CardBox;
