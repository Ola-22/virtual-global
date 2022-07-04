import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import * as S from "./style";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div style={{ display: "none" }} className={className} onClick={onClick}>
      <img src="./images/arrowNext.png" alt="" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div style={{ display: "none" }} className={className} onClick={onClick}>
      <img src="./images/arrowPrev.png" alt="" />
    </div>
  );
}

function Testimonials({ homeData, language, settingsData }) {
  const settings = {
    dots: true,
    infinite: false,
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
          infinite: homeData?.items?.testimonials.length < 2 ? false : true,
          dots: true,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: homeData?.items?.testimonials.length < 2 ? false : true,
          dots: false,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <S.Container>
      <h1>{settingsData?.items?.translation?.testimonals}</h1>

      <S.slideMain>
        <Slider {...settings}>
          {homeData?.items?.testimonials?.map((testimonial) => (
            <div key={testimonial.id}>
              <TestimonialsCard
                text={testimonial.text}
                rating={testimonial.rate}
                name={testimonial.name}
                img={testimonial.image}
                language={language}
              />
            </div>
          ))}
        </Slider>
      </S.slideMain>
    </S.Container>
  );
}

export default Testimonials;
