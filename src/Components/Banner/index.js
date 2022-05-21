import Slider from "react-slick";
import Banner from "./Banner";
import * as S from "./style";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
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
    // infinite: true,
    // speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <S.sliderMain>
      <Slider {...settings}>
        {homeData?.items?.sliders?.map((data) => (
          <div className="banner" key={data?.id}>
            <Banner
              settingsData={settingsData}
              paragraphOne={data?.text}
              src={data?.image}
              link={data?.link}
            />
          </div>
        ))}
      </Slider>
    </S.sliderMain>
  );
}
