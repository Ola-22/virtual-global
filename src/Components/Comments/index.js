import * as S from "./style";

function Comments({
  replyComment,
  name,
  date,
  comment,
  likes_count,
  comments_count,
}) {
  return (
    <S.commentContainer>
      <div>
        <img src="/images/user.png" alt="user comments" />
        <div className="user">
          <h5>{name}</h5>
          <h6>{date}</h6>
        </div>
      </div>
      <div className="paragraph">
        <p>{comment}</p>
      </div>

      <div className="likeComment">
        <div>
          <img src="/images/like.png" alt="likes of the content" />
          <span>{likes_count}</span>
        </div>
        <div>
          <img src="/images/chat.png" alt="likes of the content" />
          <span>{comments_count}</span>
        </div>
      </div>
    </S.commentContainer>
  );
}

export default Comments;
