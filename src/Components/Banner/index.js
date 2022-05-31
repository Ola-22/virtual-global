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
              homeData?.items?.sliders[2].text,
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <S.ContainerBanner>
          {/* <S.BackGround>
            <span></span>
          </S.BackGround> */}
          <div className="slider">
            <S.BackGround>
              <span></span>
            </S.BackGround>
            <div className="slide">
              <div className="content">
                <a href={homeData?.items?.sliders[0]?.link}>
                  <img
                    src={homeData?.items?.sliders[0]?.image}
                    alt="banner virtual global"
                  />
                </a>
              </div>
            </div>

            <div className="slide">
              <div className="content">
                <a href={homeData?.items?.sliders[1]?.link}>
                  <img
                    src={homeData?.items?.sliders[1]?.image}
                    alt="banner virtual global"
                  />
                </a>
              </div>
            </div>

            <div className="slide">
              <div className="content">
                <a href={homeData?.items?.sliders[2]?.link}>
                  <img
                    src={homeData?.items?.sliders[2]?.image}
                    alt="banner virtual global"
                  />
                </a>
              </div>
            </div>

            <div className="slide">
              <div className="content">
                <a href={homeData?.items?.sliders[3]?.link}>
                  <img
                    src={homeData?.items?.sliders[3]?.image}
                    alt="banner virtual global"
                  />
                </a>
              </div>
            </div>
            <div className="slide">
              <div className="content">
                <a href={homeData?.items?.sliders[3]?.link}>
                  <img
                    src={homeData?.items?.sliders[3]?.image}
                    alt="banner virtual global"
                  />
                </a>
              </div>
            </div>

            {/* {homeData?.items?.sliders?.map((data) => (
              <div className="slide" key={data.id}>
                <div className="content">
                  <a href={data.link}>
                    <img src={data.image} alt="banner virtual global" />
                  </a>
                </div>
              </div>
            ))} */}
          </div>
        </S.ContainerBanner>
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
