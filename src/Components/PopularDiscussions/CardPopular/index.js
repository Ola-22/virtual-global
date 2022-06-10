import { Link } from "react-router-dom";
import * as S from "./style";

function CardPolular({
  link,
  title,
  text,
  likesCount,
  commentCount,
  key,
  language,
}) {
  return (
    <S.CardContainer key={key}>
      <div
        className="card-box"
        style={{
          direction: language === "ar" ? "rtl" : "ltr",
        }}
      >
        <h3>{title}</h3>
        <p
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
        <S.LikeCard>
          <div>
            <div>
              <img src="/images/like.png" alt="like the popular discussions" />
              <h6>{likesCount}</h6>
            </div>
            <div>
              <img src="/images/chat.png" alt="like the popular discussions" />
              <h6>{commentCount}</h6>
            </div>
          </div>

          <Link to={`/discussion/${link}`}>
            <img src="/images/slideMore.png" alt="slide more of the popular" />
          </Link>
        </S.LikeCard>
      </div>

      {/* <div>
        <div
          className="card-box two"
          style={{ backgroundColor: " #fff", marginBottom: "10px" }}
        >
          <h3>{title}</h3>
          <p>{text}</p>
          <S.LikeCard>
            <div>
              <div>
                <img
                  src="/images/like.png"
                  alt="like the popular discussions"
                />
                <h6>{likesCount}</h6>
              </div>
              <div>
                <img
                  src="/images/chat.png"
                  alt="like the popular discussions"
                />
                <h6>{commentCount}</h6>
              </div>
            </div>

            <img src="/images/slideMore.png" alt="slide more of the popular" />
          </S.LikeCard>
        </div>
        <div className="card-box" style={{ backgroundColor: " #fff" }}>
          <h3>{title}</h3>
          <p>{text}</p>
          <S.LikeCard>
            <div>
              <div>
                <img
                  src="/images/like.png"
                  alt="like the popular discussions"
                />
                <h6>{likesCount}</h6>
              </div>
              <div>
                <img
                  src="/images/chat.png"
                  alt="like the popular discussions"
                />
                <h6>{commentCount}</h6>
              </div>
            </div>

            <img src="/images/slideMore.png" alt="slide more of the popular" />
          </S.LikeCard>
        </div>
      </div> */}
    </S.CardContainer>
  );
}

export default CardPolular;
