import * as S from "./style";
import Button from "../Button";
import { Link } from "react-router-dom";
import axiosInstance from "../../helpers/axios";
import { useState } from "react";

function CardTabs({
  discussion,
  date,
  title,
  paragraph,
  totalLikes,
  totalComment,
  id,
  is_join,
  is_like,
}) {
  const [setJoinData] = useState();

  // console.log(discussion, "T");

  async function sendJoin() {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: "en",
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
        // console.log("join", res);
        setJoinData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // console.log(is_join);
  return (
    <S.CardMain>
      <Link to={`/discussion/${id}`}>
        <h6>Asked : {date}</h6>

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
        <div>
          {/* {joinData?.status === false ? ( */}
          {/* <Button onClick={() => sendJoin()} title="unjoin Discussion" /> */}
          {/* ) : ( */}
          {/* <Button onClick={() => sendJoin()} title="Join Discussion" /> */}
          {/* )} */}

          {is_join === true ? (
            <Button onClick={() => sendJoin()} title="unjoin Discussion" />
          ) : (
            <Button onClick={() => sendJoin()} title="join Discussion" />
          )}
        </div>
      </div>
    </S.CardMain>
  );
}

export default CardTabs;
