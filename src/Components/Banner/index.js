import * as S from "./style";
import Social from "../Social";
import { NumberFormat } from "../../lib/NumberFormat";
import Typed from "react-typed";
import { useEffect, useState } from "react";

export default function SliderComponent({ homeData, settingsData }) {
  const [data, setData] = useState(`${" "}`);
  useEffect(() => {
    setData(homeData);
  }, [homeData]);
  console.log(homeData, "home");
  console.log(data);
  const textLines = [
    `${" "}`,
    `${homeData?.items?.sliders[0]?.text}`,
    `${homeData?.items?.sliders[1]?.text}`,
    `${homeData?.items?.sliders[2]?.text}`,
    `${homeData?.items?.sliders[3]?.text}`,
    `${homeData?.items?.sliders[4]?.text}`,
  ];
  return (
    <S.sliderMain>
      <div className="container-writer">
        <div className="Typewriter">
          <Typed
            loop
            typeSpeed={100}
            backSpeed={null}
            strings={textLines}
            smartBackspace={false}
            backDelay={0}
            fadeOut
            fadeOutDelay={null}
            loopCount={0}
            showCursor
            cursorChar="|"
          />
        </div>
        <S.BackGround>
          <span></span>
        </S.BackGround>
        <S.ContainerBanner>
          <div className="slider">
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
                <a href={homeData?.items?.sliders[4]?.link}>
                  <img
                    src={homeData?.items?.sliders[4]?.image}
                    alt="banner virtual global"
                  />
                </a>
              </div>
            </div>
          </div>
        </S.ContainerBanner>
      </div>

      <S.NumberVirtual>
        <div className="box-number">
          <h4> {settingsData?.items?.translation?.slider}</h4>
          <h2>{NumberFormat(settingsData?.items?.number_virtial_citizens)}</h2>
        </div>

        <Social settingsData={settingsData} />
      </S.NumberVirtual>
    </S.sliderMain>
  );
}
