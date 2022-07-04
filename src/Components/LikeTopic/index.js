import * as S from "./style";

function LikeTopic({
  date,
  paragraph,

  commentText,
  comment,
  settingsData,
  language,
}) {
  return (
    <S.topicContainer
      style={{
        direction: language === "ar" ? "rtl" : "ltr",
      }}
    >
      <h6>
        {settingsData?.items?.translation?.asked_Forum_Details}: {date}
      </h6>
      <span
        className="paragraph"
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
