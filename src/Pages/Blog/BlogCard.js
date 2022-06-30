import * as S from "./style";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

function BlogCard({ title, date, content, image, author, id }) {
  return (
    <S.BlogCard>
      <div className="card-body">
        <h3>{title}</h3>
        <div className="card-header">
          <div>
            <img className="author" src={image} alt="" />
            <span>{author}</span>
          </div>
          <div>
            <span>{date}</span>
          </div>
        </div>
        <p>{content}</p>
        <Link to={`/blog/${id}`}>
          <Button title="Read more" />
        </Link>
      </div>
    </S.BlogCard>
  );
}

export default BlogCard;
