import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import * as S from "./style";

function Rating({ rating }) {
  return (
    <S.RatingContainer>
      {[...Array(5)].map((_, i) => (
        <span key={i}>
          {rating > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </S.RatingContainer>
  );
}

export default Rating;
