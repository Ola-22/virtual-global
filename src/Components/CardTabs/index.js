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
}) {
  const [joinData, setJoinData] = useState();

  async function sendJoin() {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: localStorage.getItem("language"),
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
      <Link to={`/discussion/${id}`}>
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

      <div className="box">
        <div>
          <div>
            {is_like === true ? (
              <img src="/images/unlike.png" alt="likes of the content" />
            ) : (
              <img src="/images/like.png" alt="likes of the content" />
            )}
            <span>{totalLikes}</span>
          </div>
          <div className="chat">
            <img src="/images/chat.png" alt="likes of the content" />
            <span>{totalComment}</span>
          </div>
        </div>
        <S.JoinButton>
          <Button onClick={() => sendJoin()} title="join Discussion" />
          <h4> {joinData?.message}</h4>
        </S.JoinButton>
      </div>
    </S.CardMain>
  );
}

export default CardTabs;
