import CardBox from "./CardBox";
import * as S from "./style";

function CardForum({
  title,
  paragraph,
  totalLikes,
  totalComments,
  title_Box,
  text_Box,
}) {
  return (
    <S.CardForum>
      <h3>{title}</h3>
      <CardBox
        title={title_Box}
        paragraph={text_Box}
        totalComments={totalComments}
        totalLikes={totalLikes}
      />
    </S.CardForum>
  );
}

export default CardForum;
