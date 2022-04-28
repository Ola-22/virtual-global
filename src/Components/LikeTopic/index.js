import * as S from "./style";

function LikeTopic({ date, paragraph, name, time, comment }) {
  return (
    <S.topicContainer>
      <h5>like topic</h5>
      <h6>Asked: {date}</h6>
      <p>{paragraph}</p>
      <div>
        <img src="/images/user.png" alt="user img" />
        <div>
          <h3> {name}</h3>
          <h6>{time}</h6>
        </div>
      </div>
      <p>{comment}</p>
    </S.topicContainer>
  );
}

export default LikeTopic;
