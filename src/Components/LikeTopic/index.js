import * as S from "./style";

function LikeTopic({
  date,
  paragraph,

  commentText,
  comment,
  settingsData,
}) {
  return (
    <S.topicContainer>
      <h6>
        {settingsData?.items?.translation?.asked_Forum_Details}: {date}
      </h6>
      <span
        dangerouslySetInnerHTML={{
          __html: paragraph,
        }}
      />
      {commentText && (
        <p
          className="text"
          dangerouslySetInnerHTML={{
            __html: comment,
          }}
        />
      )}
    </S.topicContainer>
  );
}

export default LikeTopic;
