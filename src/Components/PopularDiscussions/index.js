import Slider from "react-slick";
import CardPolular from "./CardPopular";
import * as S from "./style";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <S.NextArrow className={className} onClick={onClick}>
      <img src="/images/arrowNext.png" alt="" />
    </S.NextArrow>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
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

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // console.log("first", homeData);
  return (
    <S.PopularContainer>
      <h1>popular Discussions</h1>
      <div className="slider-popular">
        <Slider {...settings}>
          {homeData?.items?.discussions?.map((data) => (
            // <div className="card-poplurar">
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
      </div>
    </S.PopularContainer>
  );
}
