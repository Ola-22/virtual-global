import CardForum from "../../Components/CardForum";
import Nav from "../../Components/Nav";
import HeaderForum from "../../Components/HeaderForum";
import Footer from "../../Components/Footer";
import * as S from "./style";
import Comments from "../../Components/Comments";
import Button from "../../Components/Button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../helpers/axios";

function Details({ settingsData }) {
  const { id } = useParams();

  const [result, setResult] = useState();

  useEffect(() => {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
      },
    };

    axiosInstance
      .get(
        `/api/user/discussions/${id}`,

        config
      )
      .then((res) => {
        console.log("d", res);
        setResult(res.data.items);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div style={{ width: "100%" }}>
      <Nav settingsData={settingsData} />
      <HeaderForum />
      <S.DetailsContainer>
        <CardForum
          title="Related Topics"
          paragraph="In light of the current situation of wars and human tragedies in the World and "
          totalComments="1.555"
          totalLikes="1.555"
        />

        <S.DetailsBox>
          {result && (
            <>
              <h6>Asked : {result?.discussion?.created_at}</h6>
              <h3>{result?.discussion?.title}</h3>

              <p
                dangerouslySetInnerHTML={{
                  __html: result?.discussion?.text,
                }}
              />

              <div className="container">
                <div>
                  <img src="/images/like.png" alt="likes of the content" />
                  <span>{result?.discussion?.likes_count}</span>
                </div>
                <div>
                  <img src="/images/chat.png" alt="likes of the content" />
                  <span>{result?.discussion?.comments_count}</span>
                </div>
              </div>
              <div className="comments">
                <h5 className="number-comments">
                  {result?.discussion?.comments?.length} comments
                </h5>
                <Comments replyComment />
                <Comments />
                <div className="add-comment">
                  <img src="/images/user.png" alt="" />
                  <input type="text" placeholder="write here" />
                  <Button title="comment" />
                </div>
              </div>
            </>
          )}
        </S.DetailsBox>
      </S.DetailsContainer>
      <Footer />
    </div>
  );
}

export default Details;
