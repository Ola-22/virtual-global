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

export default function PopularDiscussions({
  homeData,
  settingsData,
  language,
}) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    rtl: language === "ar" && true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
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

  return (
    <S.PopularContainer>
      <h1>{settingsData?.items?.translation?.title_popular_discussions}</h1>
      <div className="slider-popular">
        <Slider {...settings}>
          {homeData?.items?.discussions?.map((data) => (
            // <S.MainSlider>
            <CardPolular
              key={data?.id}
              text={data?.text}
              title={data?.title}
              src={data?.image}
              likesCount={data?.likes_count}
              commentCount={data?.comments_count}
              link={data.id}
              language={language}
            />
            // </S.MainSlider>
          ))}
        </Slider>
      </div>
    </S.PopularContainer>
  );
}
