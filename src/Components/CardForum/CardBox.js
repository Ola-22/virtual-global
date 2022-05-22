import { useEffect } from "react";
import axiosInstance from "../../helpers/axios";
import * as S from "./style";

function CardBox({ paragraph, totalLikes, totalComments, id, onClick }) {
  // const { id } = useParams();

  // console.log("first", id);
  // async function sendLike() {
  //   const config = {
  //     headers: {
  //       Accept: "application/json",
  //       Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
  //       lang: "en",
  //     },
  //   };
  //   await axiosInstance
  //     .post(`/api/user/discussions/like/3`, config)
  //     .then((res) => {
  //       // setMailingData(res.data);
  //       console.log("T", res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  // useEffect(() => {
  //   sendLike();
  // }, []);

  return (
    <S.CardForum className="card-box">
      <div className="boxCard">
        <p
          dangerouslySetInnerHTML={{
            __html: paragraph,
          }}
        />
        <div>
          <div>
            <img
              src="/images/like.png"
              onClick={onClick}
              alt="like the discussions"
            />
            <span>{totalLikes}</span>
          </div>

          <div>
            <img src="/images/chat.png" alt="like the discussions" />
            <span>{totalComments}</span>
          </div>
        </div>
      </div>
    </S.CardForum>
  );
}

export default CardBox;
