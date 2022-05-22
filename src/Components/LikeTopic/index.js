import * as S from "./style";

function LikeTopic({ date, paragraph, name, time, comment }) {
  return (
    <S.topicContainer>
      <h6>Asked: {date}</h6>
      {/* <span>{paragraph}</p> */}
      <span
        dangerouslySetInnerHTML={{
          __html: paragraph,
        }}
      />

      <div>
        <img src="/images/user.png" alt="user img" />
        <div>
          <h3> {name}</h3>
          <h6>{time}</h6>
        </div>
      </div>

      <p
        className="text"
        dangerouslySetInnerHTML={{
          __html: comment,
        }}
      />
    </S.topicContainer>
  );
}

export default LikeTopic;
