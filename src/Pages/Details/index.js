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
// import { FaSpinner } from "react-icons/fa";

function Details({ settingsData, profileInformation }) {
  const { id } = useParams();

  const [result, setResult] = useState();

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
      },
    };

    axiosInstance
      .get(
        `/api/user/discussions/${id}`,

        config
      )
      .then((res) => {
        // console.log("d", res);
        setResult(res.data.items);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const [textComment, setTextComment] = useState();
  const [parentId, setParentId] = useState("0");

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
        // console.log("comment", res);
        // window.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const [showInput, setShowInput] = useState(false);
  const [userName, setUserName] = useState("");
  // console.log(parentId);

  // console.log(userName);

  const [lengthComment, setLengthComment] = useState(0);
  const [loadComment, setLoadComment] = useState();
  const [showComments, setShowComments] = useState(false);

  // console.log(lengthComment);
  async function loadMoreComment() {
    const data = {
      count: lengthComment,
      parent_id: parentId,
    };
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: "en",
      },
    };
    await axiosInstance
      .post(`/api/user/discussions/load-more-comment/${id}`, data, config)
      .then((res) => {
        // console.log("loadcomment", res);
        setLoadComment(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setLengthComment(result?.discussion?.comments.length);
  }, []);

  const [likeData, setLikeData] = useState();
  async function sendLike() {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: "en",
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
        // console.log("Tsss", res);
        setLikeData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div style={{ width: "100%" }}>
      <Nav settingsData={settingsData} />
      <HeaderForum profileInformation={profileInformation} />
      <S.DetailsContainer>
        <S.CardForum>
          <h3>Related Topics</h3>
          {result?.related_topics?.map((topic) => (
            <CardBox
              paragraph={topic?.text}
              totalLikes={topic?.likes_count}
              totalComments={topic?.comments_count}
              id={id}
              // onClick={() => sendLike()}
            />
          ))}
        </S.CardForum>

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
                  {result?.discussion?.comments?.length} comments
                </h5>
                {result?.discussion?.comments.length !== 0 &&
                  result?.discussion?.comments?.map((comment) => (
                    <>
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
                      {/* <h3>{result?.discussion?.comments?.discussion_id}</h3> */}

                      {comment?.replies?.map((reply) => (
                        <ReplyComment
                          key={reply.id}
                          src={reply.user_image}
                          name={reply.user_name}
                          time={reply.data}
                          comment={reply.text}
                        />
                      ))}
                    </>
                  ))}

                {lengthComment >= 5 && (
                  <button
                    onClick={() => {
                      loadMoreComment();
                      // setLengthComment(result?.discussion?.comments.length);
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
                        //  setShowInput(!showInput);
                        //  setUserName(comment.user_name);
                      }}
                    />
                  ))}

                <div className="add-comment">
                  <img src="/images/user.png" alt="" />
                  <input
                    type="text"
                    placeholder="write here"
                    value={textComment ?? ""}
                    onChange={(e) => setTextComment(e.target.value)}
                  />

                  {!loading && (
                    <Button
                      title="comment"
                      onClick={(e) => {
                        e.preventDefault();
                        // window.location.reload(false);
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
                        // window.location.reload(false);
                        e.preventDefault();
                        sendComment();
                        handleClick();
                        window.reload();
                      }}
                    />
                  )}
                </div>
              </div>
            </>
          )}
        </S.DetailsBox>
      </S.DetailsContainer>
      <Footer settingsData={settingsData} />
    </div>
  );
}

export default Details;
