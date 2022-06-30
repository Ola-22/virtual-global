import * as S from "./style";

function Comments({
  name,
  date,
  comment,
  likes_count,
  comments_count,
  src,
  onClick,
  likeComment,
}) {
  return (
    <S.commentContainer>
      <div>
        <img className="user-image" src={src} alt="user comments" />
        <div className="user">
          <h5>{name}</h5>
          <h6>{date}</h6>
        </div>
      </div>

      <p
        className="paragraph"
        dangerouslySetInnerHTML={{
          __html: comment,
        }}
      />

      {likeComment && (
        <div className="likeComment">
          <div>
            <img src="./images/like.png" alt="likes of the content" />
            <span>{likes_count}</span>
          </div>
          <div>
            <img
              onClick={onClick}
              src="./images/chat.png"
              alt="likes of the content"
            />
            <span>{comments_count}</span>
          </div>
        </div>
      )}
    </S.commentContainer>
  );
}

export default Comments;
