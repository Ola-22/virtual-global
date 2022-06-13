import Nav from "../../Components/Nav";
import HeaderForum from "../../Components/HeaderForum";
import Footer from "../../Components/Footer";
import * as S from "./style";
import Comments from "../../Components/Comments";
import Button from "../../Components/Button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../helpers/axios";
import CardBox from "../../Components/CardForum/CardBox";
import ReplyComment from "../../Components/Comments/ReplyComment";

function Details({ settingsData, profileInformation, handleSetLanguage }) {
  const { id } = useParams();

  const [result, setResult] = useState([]);

  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

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
        `/api/user/discussions/${id}`,

        config
      )
      .then((res) => {
        setResult(res.data.items);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const [textComment, setTextComment] = useState();
  const [parentId, setParentId] = useState("0");
  const [commentStatus, setCommentStatus] = useState();
  async function sendComment() {
    const data = {
      text: textComment,
      parent_id: parentId,
    };
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
      },
    };
    await axiosInstance
      .post(`/api/user/discussions/save-comment/${id}`, data, config)
      .then((res) => {
        setCommentStatus(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const [showInput, setShowInput] = useState(false);
  const [setUserName] = useState("");

  const [lengthComment, setLengthComment] = useState(0);
  const [loadComment, setLoadComment] = useState();
  const [showComments, setShowComments] = useState(false);

  async function loadMoreComment() {
    const data = {
      count: lengthComment,
      parent_id: parentId,
    };
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: localStorage.getItem("language"),
      },
    };
    await axiosInstance
      .post(`/api/user/discussions/load-more-comment/${id}`, data, config)
      .then((res) => {
        setLoadComment(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setLengthComment(result?.discussion?.comments.length);
  }, [result?.discussion?.comments.length]);

  const [likeData, setLikeData] = useState();
  async function sendLike() {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: localStorage.getItem("language"),
      },
    };
    await axiosInstance
      .post(
        `/api/user/discussions/like/${id}`,
        {
          params: {
            product: id,
          },
        },
        config
      )
      .then((res) => {
        setLikeData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <S.Main>
      <Nav settingsData={settingsData} handleSetLanguage={handleSetLanguage} />

      <HeaderForum
        settingsData={settingsData}
        profileInformation={profileInformation}
      />
      <S.DetailsContainer>
        <S.CardForum>
          <h3>{settingsData?.items?.translation?.title_special}</h3>
          {result?.related_topics?.map((topic) => (
            <CardBox
              paragraph={topic?.text}
              totalLikes={topic?.likes_count}
              totalComments={topic?.comments_count}
              id={id}
            />
          ))}
        </S.CardForum>

        <S.DetailsBox>
          {result && (
            <>
              <h6>
                {settingsData?.items?.translation?.asked_Forum_Details} :
                {result?.discussion?.created_at}
              </h6>
              <h3>{result?.discussion?.title}</h3>

              <p
                dangerouslySetInnerHTML={{
                  __html: result?.discussion?.text,
                }}
              />

              <div className="container">
                <div>
                  {likeData?.items?.is_like === false ? (
                    <img
                      src="/images/like.png"
                      alt="likes of the content"
                      onClick={() => sendLike()}
                    />
                  ) : (
                    <img
                      src="/images/unlike.png"
                      alt="likes of the content"
                      onClick={() => sendLike()}
                    />
                  )}

                  <span>{result?.discussion?.likes_count}</span>
                </div>
                <div>
                  <img src="/images/chat.png" alt="likes of the content" />
                  <span>{result?.discussion?.comments_count}</span>
                </div>
              </div>
              <div className="comments">
                <h5 className="number-comments">
                  {result?.discussion?.comments?.length}{" "}
                  {settingsData?.items?.translation?.comments_count}
                </h5>
                {result?.discussion?.comments.length !== 0 &&
                  result?.discussion?.comments?.map((comment) => (
                    <S.CommentsWrapper>
                      <Comments
                        key={comment.id}
                        name={comment?.user_name}
                        date={comment?.date}
                        comment={comment?.text}
                        src={comment?.user_image}
                        onClick={() => {
                          setParentId(comment.id);
                          setShowInput(!showInput);
                          setUserName(comment.user_name);
                        }}
                      />

                      {comment?.replies?.map((reply) => (
                        <ReplyComment
                          key={reply.id}
                          src={reply.user_image}
                          name={reply.user_name}
                          time={reply.data}
                          comment={reply.text}
                        />
                      ))}
                    </S.CommentsWrapper>
                  ))}

                {lengthComment >= 5 && (
                  <button
                    className="load-comment"
                    onClick={() => {
                      loadMoreComment();
                      setShowComments(!showComments);
                    }}
                  >
                    load more comment
                  </button>
                )}

                {showComments &&
                  loadComment?.comments?.map((comment) => (
                    <Comments
                      key={comment.id}
                      name={comment?.user_name}
                      date={comment?.date}
                      comment={comment?.text}
                      src={comment?.user_image}
                      onClick={() => {
                        setParentId(comment.id);
                      }}
                    />
                  ))}

                <div className="add-comment">
                  <div className="box-comment">
                    <img
                      className="comment-user"
                      src={profileInformation?.user?.image}
                      alt=""
                    />
                    <input
                      type="text"
                      placeholder="write here"
                      value={textComment ?? ""}
                      onChange={(e) => setTextComment(e.target.value)}
                    />
                  </div>

                  {!loading && (
                    <Button
                      title="comment"
                      onClick={(e) => {
                        e.preventDefault();
                        sendComment();
                        handleClick();
                      }}
                    />
                  )}

                  {loading && (
                    <Button
                      className="disabled"
                      title="comment"
                      onClick={(e) => {
                        e.preventDefault();
                        sendComment();
                        handleClick();
                        window.reload();
                      }}
                    />
                  )}
                  <h5 style={{ visibility: "hidden" }}>
                    {" "}
                    {commentStatus?.message}
                  </h5>
                </div>
                <h5> {commentStatus?.message}</h5>
              </div>
            </>
          )}
        </S.DetailsBox>
      </S.DetailsContainer>
      <Footer settingsData={settingsData} />
    </S.Main>
  );
}

export default Details;
