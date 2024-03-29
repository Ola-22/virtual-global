import * as S from "./style";
import Button from "../Button";
import { Link } from "react-router-dom";
import axiosInstance from "../../helpers/axios";
import { useState } from "react";

function CardTabs({
  date,
  title,
  paragraph,
  totalLikes,
  totalComment,
  id,
  is_like,
  language,
  settingsData,
  rtlLang,
}) {
  const [joinData, setJoinData] = useState();

  async function sendJoin() {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: language,
      },
    };
    await axiosInstance
      .post(
        `/api/user/discussions/join/${id}`,
        {
          params: {
            product: id,
          },
        },
        config
      )
      .then((res) => {
        setJoinData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <S.CardMain>
      <Link
        to={`/discussion/${id}`}
        style={{
          direction: rtlLang === 1 ? "rtl" : "ltr",
        }}
      >
        <h6>
          {settingsData?.items?.translation?.asked_Forum_Details}: {date}
        </h6>

        <h3>{title}</h3>
        <p
          className="text"
          dangerouslySetInnerHTML={{
            __html: paragraph,
          }}
        />
      </Link>

      <div
        className="box"
        style={{
          direction: rtlLang === 1 ? "rtl" : "ltr",
        }}
      >
        <div>
          <div>
            {is_like === true ? (
              <img
                width={24}
                height={23}
                src="./images/unlike.png"
                alt="likes of the content"
              />
            ) : (
              <img
                width={24}
                height={23}
                src="./images/like.png"
                alt="likes of the content"
              />
            )}
            <span>{totalLikes}</span>
          </div>
          <div className="chat">
            <img src="./images/chat.png" alt="likes of the content" />
            <span>{totalComment}</span>
          </div>
        </div>
        <S.JoinButton>
          <Button
            onClick={() => sendJoin()}
            title={settingsData?.items?.translation?.join_discussion}
          />
          <h4> {joinData?.message}</h4>
        </S.JoinButton>
      </div>
    </S.CardMain>
  );
}

export default CardTabs;
