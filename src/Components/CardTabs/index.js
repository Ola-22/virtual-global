import * as S from "./style";
import Button from "../Button";
import { Link } from "react-router-dom";

function CardTabs({ date, title, paragraph, totalLikes, totalComment }) {
  return (
    <Link to="/forum/1">
      <S.CardMain>
        <h6>Asked : {date}</h6>
        <h3>{title}</h3>
        <p>{paragraph}</p>

        <div className="box">
          <div>
            <div>
              <img src="/images/like.png" alt="likes of the content" />
              <span>{totalLikes}</span>
            </div>
            <div>
              <img src="/images/chat.png" alt="likes of the content" />
              <span>{totalComment}</span>
            </div>
          </div>
          <div>
            <Button title="Join Discussion" />
          </div>
        </div>
      </S.CardMain>
    </Link>
  );
}

export default CardTabs;
