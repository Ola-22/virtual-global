import React from "react";
import Rating from "./Rating";
import * as S from "./style";

function TestimonialsCard({ text, rating, name, img }) {
  return (
    <S.CardContainer>
      <div className="card-box">
        <img src={img} alt="user rating" />
        <h3>{name}</h3>
        <Rating rating={rating} />

        <p
          className="modal-body data"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </S.CardContainer>
  );
}

export default TestimonialsCard;
