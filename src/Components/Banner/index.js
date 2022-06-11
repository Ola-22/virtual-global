import * as S from "./style";
import Social from "../Social";
import { NumberFormat } from "../../lib/NumberFormat";
import videoBg from "../../music/videoBackground.mp4";

export default function SliderComponent({ homeData, settingsData }) {
  return (
    <S.sliderMain>
      <video className="video" controls src={videoBg} autoPlay loop muted />

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
