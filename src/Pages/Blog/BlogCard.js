import * as S from "./style";
import { Link } from "react-router-dom";
import { BiTimeFive, BiUser, BiFile } from "react-icons/bi";
import Button from "../../Components/Button";

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
  rtlLang,
}) {
  return (
    <S.BlogCard
      style={{
        direction: rtlLang === 1 ? "rtl" : "ltr",
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
