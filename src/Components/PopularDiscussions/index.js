import Slider from "react-slick";
import CardPolular from "./CardPopular";
import * as S from "./style";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <S.NextArrow className={className} onClick={onClick}>
      <img src="/images/arrowNext.png" />
    </S.NextArrow>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <S.PrevArrow className={className} onClick={onClick}>
      <img src="/images/arrowPrev.png" />
    </S.PrevArrow>
  );
}

export default function PopularDiscussions() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <S.PopularContainer>
      <h1>popular Discussions</h1>
      <Slider {...settings}>
        <CardPolular />
        <CardPolular />
        <CardPolular />
      </Slider>
    </S.PopularContainer>
  );
}
