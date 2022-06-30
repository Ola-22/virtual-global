import Nav from "../../Components/Nav";
import HeaderForum from "../../Components/HeaderForum";
import Footer from "../../Components/Footer";
import * as S from "./style";
import Comments from "../../Components/Comments";
import Button from "../../Components/Button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../helpers/axios";
// import CardBox from "../../Components/CardForum/CardBox";
import ReplyComment from "../../Components/Comments/ReplyComment";

function BlogDetails({ settingsData, profileInformation, handleSetLanguage }) {
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
  //   const [discussionsSearch, setDiscussionsSearch] = useState();
  const [searchQuery, setSearchQuery] = useState();

  function handleClick() {
    setLoading(true);
    setTextComment("");
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
        `/api/posts/${id}`,

        config
      )
      .then((res) => {
        setResult(res.data.items);
      })
      .catch((err) => console.log(err));
  }, [id]);

  console.log(result);

  async function sendComment() {
    const data = {
      text: textComment,
      parent_id: parentId,
    };
    const config = {
      headers: {
        Accept: "application/vnd.api+json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
      },
    };
    await axiosInstance
      .post(`/api/posts/save-comment/${id}`, data, config)
      .then((res) => {
        setCommentStatus(res.data);
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
        Accept: "application/vnd.api+json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: localStorage.getItem("language"),
      },
    };
    await axiosInstance
      .post(`/api/posts/load-more-comment/${id}`, data, config)
      .then((res) => {
        setLoadComment(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setLengthComment(result?.post?.comments.length);
  }, [result?.post?.comments.length]);

  //   useEffect(() => {
  //     const config = {
  //       headers: {
  //         Accept: "application/json",
  //         Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
  //         lang: localStorage.getItem("language"),
  //       },
  //     };
  //     axiosInstance
  //       .get(
  //         `/api/user/discussions/all?title=${searchQuery}`,

  //         config
  //       )
  //       .then((res) => {
  //         setDiscussionsSearch(res.data.items.discussions);
  //       })
  //       .catch((err) => console.log(err));
  //   }, [searchQuery]);
  return (
    <S.Main>
      <Nav settingsData={settingsData} handleSetLanguage={handleSetLanguage} />

      <HeaderForum
        settingsData={settingsData}
        profileInformation={profileInformation}
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery || ""}
      />
      <S.DetailsContainer>
        <S.CardForum>
          {/* <h3>{settingsData?.items?.translation?.title_special}</h3> */}
          <h3>related posts</h3>

          {/* {discussionsSearch?.length !== 0
            ? discussionsSearch?.map((topic) => (
                <S.LinkContainer to={`/post/${topic?.id}`}>
                  <CardBox
                    paragraph={topic?.title}
                    totalLikes={topic?.likes_count}
                    totalComments={topic?.comments_count}
                    id={id}
                    discussionsSearch={discussionsSearch}
                  />
                </S.LinkContainer>
              ))
            : result?.related_topics?.map((topic) => (
                <S.LinkContainer to={`/post/${topic?.id}`}>
                  <CardBox
                    paragraph={topic?.title}
                    totalLikes={topic?.likes_count}
                    totalComments={topic?.comments_count}
                    id={id}
                    discussionsSearch={discussionsSearch}
                  />
                </S.LinkContainer>
              ))} */}
        </S.CardForum>

        <S.DetailsBox>
          {result && (
            <>
              <h3>{result?.post?.title}</h3>

              <p
                dangerouslySetInnerHTML={{
                  __html: result?.post?.text,
                }}
              />

              <div className="comments">
                <h5 className="number-comments">
                  {result?.post?.comments?.length}
                  {settingsData?.items?.translation?.comments_count}
                </h5>
                {result?.post?.comments.length !== 0 &&
                  result?.post?.comments?.map((comment) => (
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

export default BlogDetails;
