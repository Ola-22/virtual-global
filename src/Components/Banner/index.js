import Slider from "react-slick";
import Banner from "./Banner";
import * as S from "./style";
import TypeAnimation from "react-type-animation";
import { TypeWriter } from "./TypeWriter";

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

export default function SliderComponent({ homeData, settingsData }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
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
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 1500,
    fade: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <S.sliderMain>
      <div className="slider">
        {homeData?.items?.sliders?.map((data) => (
          <div className="slide" key={data.id}>
            <div className="content">
              <TypeAnimation
                cursor={true}
                sequence={[data.text, 2000, ""]}
                wrapper="span"
                repeat={Infinity}
              />
              <img src={data.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </S.sliderMain>
  );
}
