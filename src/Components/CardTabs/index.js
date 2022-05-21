import * as S from "./style";
import Button from "../Button";

function CardTabs({ date, title, paragraph, totalLikes, totalComment }) {
  return (
    <S.CardMain>
      <h6>Asked : {date}</h6>
      <h3>{title}</h3>
      <p
        className="text"
        dangerouslySetInnerHTML={{
          __html: paragraph,
        }}
      />

      <div className="box">
        <div>
          <div>
            <img src="/images/like.png" alt="likes of the content" />
            <span>{totalLikes}</span>
          </div>
          <div className="chat">
            <img src="/images/chat.png" alt="likes of the content" />
            <span>{totalComment}</span>
          </div>
        </div>
        <div>
          <Button title="Join Discussion" />
        </div>
      </div>
    </S.CardMain>
  );
}

export default CardTabs;
