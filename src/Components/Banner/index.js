import * as S from "./style";
import TypeAnimation from "react-type-animation";

export default function SliderComponent({ homeData, settingsData }) {
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
