import * as S from "./style";
import Typewriter from "typewriter-effect";
import Social from "../Social";

export default function SliderComponent({ homeData, settingsData }) {
  return (
    <S.sliderMain>
      <div className="container-writer">
        <Typewriter
          options={{
            strings: [
              homeData?.items?.sliders[0].text,
              homeData?.items?.sliders[1].text,
            ],
            autoStart: true,
            loop: true,
          }}
        />

        <div className="slider">
          {homeData?.items?.sliders?.map((data) => (
            <div className="slide" key={data.id}>
              <div className="content">
                <img src={data.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <S.NumberVirtual>
        <div className="box-number">
          <h4> {settingsData?.items?.translation?.slider}</h4>
          <h2>{settingsData?.items?.number_virtial_citizens}</h2>
        </div>

        <Social settingsData={settingsData} />
      </S.NumberVirtual>
    </S.sliderMain>
  );
}
