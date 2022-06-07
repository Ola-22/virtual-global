import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import * as S from "./style";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src="/images/arrowNext.png" alt="" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src="/images/arrowPrev.png" alt="" />
    </div>
  );
}

function Testimonials({ homeData }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // appendDots: (dots) => (
    //   <div
    //     style={{
    //       backgroundColor: "transparent",
    //       borderRadius: "10px",
    //       padding: "10px",
    //     }}
    //   >
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: (i) => (
    //   <div
    //     style={{
    //       width: "30px",
    //       color: "blue",
    //       border: "1px blue solid",
    //     }}
    //   >
    //     {i + 1}
    //   </div>
    // ),

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
    <S.Container>
      <h1>Testimonials</h1>

      <div>
        <Slider {...settings}>
          {homeData?.items?.testimonials.map((testimonial) => (
            <div>
              <TestimonialsCard
                text={testimonial.text}
                rating={testimonial.rate}
                name={testimonial.name}
                img={testimonial.image}
              />
            </div>
          ))}
        </Slider>
      </div>
    </S.Container>
  );
}

export default Testimonials;
