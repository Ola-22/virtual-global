import CardBox from "./CardBox";
import * as S from "./style";

function CardForum({ title, paragraph, totalLikes, totalComments }) {
  return (
    <S.CardForum>
      <h3>{title}</h3>
      <CardBox
        title="hot discussions"
        paragraph="In light of the current situation of wars and human tragedies in the World and "
      />
      <CardBox
        title="hot discussions"
        paragraph="In light of the current situation of wars and human tragedies in the World and "
      />
      <CardBox
        title="hot discussions"
        paragraph="In light of the current situation of wars and human tragedies in the World and "
      />
    </S.CardForum>
  );
}

export default CardForum;
