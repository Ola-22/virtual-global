import Slider from "react-slick";
import CardPolular from "./CardPopular";
import * as S from "./style";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <S.NextArrow className={className} onClick={onClick}>
      <img src="/images/arrowNext.png" alt="" />
    </S.NextArrow>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <S.PrevArrow className={className} onClick={onClick}>
      <img src="/images/arrowPrev.png" alt="" />
    </S.PrevArrow>
  );
}

export default function PopularDiscussions({ homeData }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // console.log("first", homeData);
  return (
    <S.PopularContainer>
      <h1>popular Discussions</h1>
      <Slider {...settings}>
        {homeData?.items?.discussions?.map((data) => (
          // <div className="card-poplurar" key={data?.id}>
          <CardPolular
            key={data?.id}
            text={data?.text}
            title={data?.title}
            src={data?.image}
            likesCount={data?.likes_count}
            commentCount={data?.comments_count}
          />
          // </div>
        ))}
      </Slider>
    </S.PopularContainer>
  );
}
