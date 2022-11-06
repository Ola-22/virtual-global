import { Link } from "react-router-dom";
import * as S from "./style";
import authService from "../../../Pages/Register/Auth";
import { useState, useEffect } from "react";

function CardPolular({
  link,
  title,
  text,
  likesCount,
  commentCount,
  key,
  rtlLang,
}) {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);
  return (
    <S.CardContainer key={key}>
      <div
        className="card-box"
        style={{
          direction: rtlLang === 1 ? "rtl" : "ltr",
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
              <img
                width={24}
                height={23}
                src="./images/like.png"
                alt="like the popular discussions"
              />
              <h6>{likesCount}</h6>
            </div>
            <div>
              <img
                width={24}
                height={23}
                src="./images/chat.png"
                alt="like the popular discussions"
              />
              <h6>{commentCount}</h6>
            </div>
          </div>

          <Link to={`${!currentUser ? "/login" : `/discussion/${link}`}`}>
            <img src="./images/slideMore.png" alt="slide more of the popular" />
          </Link>
        </S.LikeCard>
      </div>
    </S.CardContainer>
  );
}

export default CardPolular;
