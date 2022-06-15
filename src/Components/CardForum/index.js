import CardBox from "./CardBox";
import * as S from "./style";
import { useState, useEffect } from "react";
import axiosInstance from "../../helpers/axios";
import { Link } from "react-router-dom";

function CardForum({
  title,
  title_Box,
  participated_discussions,
  special_discussions,
}) {
  const [special, setSpecial] = useState();

  useEffect(() => {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: localStorage.getItem("language"),
      },
    };

    axiosInstance
      .get(
        `/api/user/discussions/special`,

        config
      )
      .then((res) => {
        setSpecial(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <S.CardForum>
      <h3>{title}</h3>

      <>
        {participated_discussions &&
          special?.participated_discussions?.map((disc) => (
            <Link to={`/discussion/${disc.id}`} key={disc.id}>
              <CardBox
                title={title_Box}
                paragraph={disc.title}
                totalComments={disc.comments_count}
                totalLikes={disc.likes_count}
              />
            </Link>
          ))}
        {special_discussions &&
          special?.special_discussions?.map((disc) => (
            <Link to={`/discussion/${disc.id}`} key={disc.id}>
              <CardBox
                title={title_Box}
                paragraph={disc.title}
                totalComments={disc.comments_count}
                totalLikes={disc.likes_count}
              />
            </Link>
          ))}
      </>
    </S.CardForum>
  );
}

export default CardForum;
