import * as S from "./style";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import { BiTimeFive, BiUser, BiFile } from "react-icons/bi";

function BlogCard({
  title,
  date,
  content,
  author,
  id,
  category,
  language,
  settingsData,
  author_image,
}) {
  return (
    <S.BlogCard
      style={{
        direction: language === "ar" ? "rtl" : "ltr",
      }}
    >
      <div className="card-body">
        <h3
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
        <div className="card-header">
          <div>
            {author_image?.length !== 0 ? (
              <img className="img-author" src={author_image} alt="" />
            ) : (
              <BiUser />
            )}

            <span>{author}</span>
          </div>
          <div>
            <BiTimeFive />
            <span>{date}</span>
          </div>
          <div>
            <BiFile />
            <span>{category}</span>
          </div>
        </div>
        <p
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />

        <Link to={`/blog/${id}`}>
          <Button title={settingsData?.items?.translation?.button_who_we} />
        </Link>
      </div>
    </S.BlogCard>
  );
}

export default BlogCard;
