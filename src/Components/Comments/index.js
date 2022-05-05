import * as S from "./style";

function Comments({ replyComment }) {
  return (
    <S.commentContainer>
      <div>
        <img src="/images/user.png" alt="user comments" />
        <div className="user">
          <h5>eugene chavez</h5>
          <h6>30 min</h6>
        </div>
      </div>
      <div className="paragraph">
        <p>
          In light of the current situation of wars and human tragedies in the
          World and the absence of a promising horizon where real peace and
          constructive cooperation between
        </p>
      </div>

      <div className="likeComment">
        <div>
          <img src="/images/like.png" alt="likes of the content" />
          <span>1.555</span>
        </div>
        <div>
          <img src="/images/chat.png" alt="likes of the content" />
          <span>1.555</span>
        </div>
      </div>

      {replyComment && (
        <S.replyComments>
          <div>
            <img src="/images/user.png" alt="user reply comment" />
            <div className="user">
              <h5>eugene chavez</h5>
              <h6>30 min</h6>
            </div>
          </div>
          <div className="paragraph">
            <p>
              In light of the current situation of wars and human tragedies in
              the World and the absence of a promising horizon where real peace
              and constructive cooperation between
            </p>
          </div>
          <div className="likeComment">
            <img src="/images/like.png" alt="likes of the content" />
            <span>1.555</span>
          </div>
        </S.replyComments>
      )}
    </S.commentContainer>
  );
}

export default Comments;
