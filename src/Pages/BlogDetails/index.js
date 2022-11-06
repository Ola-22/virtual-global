import Nav from "../../Components/Nav";
import HeaderForum from "../../Components/HeaderForum";
import Footer from "../../Components/Footer";
import * as S from "./style";
import Comments from "../../Components/Comments";
import Button from "../../Components/Button";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import axiosInstance from "../../helpers/axios";
import CardBox from "../../Components/CardForum/CardBox";
import ReplyComment from "../../Components/Comments/ReplyComment";
import authService from "../Register/Auth";

function BlogDetails({
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
  const [postsSearch, setPostsSearch] = useState();
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
        lang: language,
      },
    };
    const response = axiosInstance
      .get(
        `/api/posts/${id}`,

        config
      )
      .then((res) => {
        setResult(res.data.items);
        console.log(res, "blog");
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
        Accept: "application/vnd.api+json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
      },
    };
    await axiosInstance
      .post(`/api/posts/save-comment/${id}`, data, config)
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
        Accept: "application/vnd.api+json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: language,
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
        `/api/posts/all?title=${searchQuery}`,

        config
      )
      .then((res) => {
        setPostsSearch(res.data.items.posts);
      })
      .catch((err) => console.log(err));
  }, [searchQuery, language]);

  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <S.Main>
      <Nav settingsData={settingsData} handleSetLanguage={handleSetLanguage} />

      <HeaderForum
        settingsData={settingsData}
        profileInformation={profileInformation}
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery || ""}
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/blog");
        }}
      />
      <S.DetailsContainer>
        <S.CardForum>
          <h3>{settingsData?.items?.translation?.related_posts}</h3>

          {result?.related_posts?.map((post) => (
            <S.LinkContainer to={`/blog/${post?.id}`} key={post.id}>
              <CardBox
                paragraph={post?.title}
                totalComments={post?.comments_count}
                id={id}
                postsSearch={postsSearch}
              />
            </S.LinkContainer>
          ))}
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
                  {result?.post?.comments?.length}{" "}
                  {settingsData?.items?.translation?.comments_count}
                </h5>
                {result?.post?.comments.length !== 0 &&
                  result?.post?.comments?.map((comment) => (
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
                {currentUser && (
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
                )}

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
