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
}) {
  return (
    <S.BlogCard
      style={{
        direction: language === "ar" ? "rtl" : "ltr",
      }}
    >
      <div className="card-body">
        <h3>{title}</h3>
        <div className="card-header">
          <div>
            <BiUser />
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
        <p>{content}</p>

        <Link to={`/blog/${id}`}>
          <Button title={settingsData?.items?.translation?.button_who_we} />
        </Link>
      </div>
    </S.BlogCard>
  );
}

export default BlogCard;
