import CardBox from "./CardBox";
import * as S from "./style";
import { useState, useEffect } from "react";
import axiosInstance from "../../helpers/axios";

function CardForum({
  title,
  paragraph,
  totalLikes,
  totalComments,
  title_Box,
  text_Box,
  participated_discussions,
  special_discussions,
}) {
  const [special, setSpecial] = useState();

  useEffect(() => {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: "en",
      },
    };

    axiosInstance
      .get(
        `/api/user/discussions/special`,

        config
      )
      .then((res) => {
        // console.log("dderr", res);
        setSpecial(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <S.CardForum>
      <h3>{title}</h3>
      {/* {[...Array(3)].map(() => (
        )
      )]} */}
      <>
        {participated_discussions &&
          special?.participated_discussions?.map((disc) => (
            <CardBox
              title={title_Box}
              paragraph={disc.text}
              totalComments={disc.comments_count}
              totalLikes={disc.likes_count}
            />
          ))}
        {special_discussions &&
          special?.special_discussions?.map((disc) => (
            <CardBox
              title={title_Box}
              paragraph={disc.text}
              totalComments={disc.comments_count}
              totalLikes={disc.likes_count}
            />
          ))}
      </>
      {/* ) })} */}
    </S.CardForum>
  );
}

export default CardForum;
