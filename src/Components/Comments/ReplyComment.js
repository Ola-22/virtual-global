import * as S from "./style";

function ReplyComment({ name, time, comment, likes_count }) {
  return (
    <S.replyComments>
      <div>
        <img src="/images/user.png" alt="user reply comment" />
        <div className="user">
          <h5>{name}</h5>
          <h6>{time}</h6>
        </div>
      </div>
      <div className="paragraph">
        <p>{comment}</p>
      </div>
      <div className="likeComment">
        <img src="/images/like.png" alt="likes of the content" />
        <span>{likes_count}</span>
      </div>
    </S.replyComments>
  );
}

export default ReplyComment;
