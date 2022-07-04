import Nav from "../../Components/Nav";
import HeaderForum from "../../Components/HeaderForum";
import Footer from "../../Components/Footer";
import * as S from "./style";
import Comments from "../../Components/Comments";
import Button from "../../Components/Button";
import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import axiosInstance from "../../helpers/axios";
import CardBox from "../../Components/CardForum/CardBox";
import ReplyComment from "../../Components/Comments/ReplyComment";
import { useNavigate } from "react-router-dom";

function Details({
  settingsData,
  profileInformation,
  handleSetLanguage,
  language,
}) {
  const { id } = useParams();
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [textComment, setTextComment] = useState();
  const [parentId, setParentId] = useState();
  const [commentStatus, setCommentStatus] = useState();
  const [showInput, setShowInput] = useState(false);
  const [setUserName] = useState("");
  const [lengthComment, setLengthComment] = useState(0);
  const [loadComment, setLoadComment] = useState();
  const [showComments, setShowComments] = useState(false);
  const [likeData, setLikeData] = useState();
  const [discussionsSearch, setDiscussionsSearch] = useState();
  const [searchQuery, setSearchQuery] = useState();
  const navigate = useNavigate();

  function handleClick() {
    setLoading(true);
    setTextComment("");
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  const fetchData = useCallback(() => {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: language,
      },
    };
    const response = axiosInstance
      .get(
        `/api/user/discussions/${id}`,

        config
      )
      .then((res) => {
        setResult(res.data.items);
      })
      .catch((err) => console.log(err));

    return response;
  }, [id, language]);

  useEffect(() => {
    fetchData();
  }, [id, fetchData]);

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
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function loadMoreComment() {
    const data = {
      count: lengthComment,
      parent_id: 0,
    };
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: language,
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

  async function sendLike() {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: language,
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

  useEffect(() => {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: language,
      },
    };
    axiosInstance
      .get(
        `/api/user/discussions/all?title=${searchQuery}`,

        config
      )
      .then((res) => {
        setDiscussionsSearch(res.data.items.discussions);
      })
      .catch((err) => console.log(err));
  }, [searchQuery, language]);

  return (
    <S.Main>
      <Nav settingsData={settingsData} handleSetLanguage={handleSetLanguage} />

      <HeaderForum
        settingsData={settingsData}
        profileInformation={profileInformation}
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery || ""}
        onSubmit={() => navigate("/discussion")}
      />
      <S.DetailsContainer>
        <S.CardForum>
          <h3>{settingsData?.items?.translation?.title_special}</h3>

          {result?.related_topics?.map((topic) => (
            <S.LinkContainer to={`/discussion/${topic?.id}`} key={topic.id}>
              <CardBox
                paragraph={topic?.title}
                totalLikes={topic?.likes_count}
                totalComments={topic?.comments_count}
                id={id}
                discussionsSearch={discussionsSearch}
              />
            </S.LinkContainer>
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
                className="content-details"
                dangerouslySetInnerHTML={{
                  __html: result?.discussion?.text,
                }}
              />

              <div className="container">
                <div>
                  {likeData?.items?.is_like === false ? (
                    <img
                      src="./images/like.png"
                      alt="likes of the content"
                      onClick={() => sendLike()}
                    />
                  ) : (
                    <img
                      src="./images/unlike.png"
                      alt="likes of the content"
                      onClick={() => sendLike()}
                    />
                  )}

                  <span>{result?.discussion?.likes_count}</span>
                </div>
                <div>
                  <img src="./images/chat.png" alt="likes of the content" />
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
                    <S.CommentsWrapper key={comment.id}>
                      <Comments
                        name={comment?.user_name}
                        date={comment?.date}
                        comment={comment?.text}
                        src={comment?.user_image}
                        onClick={() => {
                          setParentId(comment.id);
                          setShowInput(!showInput);
                          setUserName(comment.user_name);
                        }}
                        likeComment
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
                    {settingsData?.items?.translation?.load_more_comment}
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
                      placeholder={
                        settingsData?.items?.translation?.placeholder
                      }
                      value={textComment ?? ""}
                      onChange={(e) => setTextComment(e.target.value)}
                    />
                  </div>

                  {!loading && (
                    <Button
                      title={settingsData?.items?.translation?.btn_comment}
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
                      title={settingsData?.items?.translation?.btn_comment}
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
