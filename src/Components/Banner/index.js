import * as S from "./style";
import Social from "../Social";
import { NumberFormat } from "../../lib/NumberFormat";
import videoBg from "../../music/videoBackground.mp4";
import { useRef, useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faVolumeLow,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";

library.add(fas, faVolumeLow, faVolumeMute, faFontAwesome);

export default function SliderComponent({ homeData, settingsData }) {
  const [playing, setPlaying] = useState(true);

  const videoRef = useRef(null);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.muted = true;

      setPlaying(true);
    } else if (control === "pause") {
      videoRef.current.play();
      setPlaying(false);
      videoRef.current.muted = false;
      videoRef.current.defaultMuted = false;
    }
  };

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    if (playing) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, [playing]);

  return (
    <S.sliderMain>
      <video
        ref={videoRef}
        className="video"
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
      />

      <S.NumberVirtual>
        <div className="box-number">
          <h4> {settingsData?.items?.translation?.slider}</h4>
          <h2>{NumberFormat(settingsData?.items?.number_virtial_citizens)}</h2>
        </div>

        <Social settingsData={settingsData} />
      </S.NumberVirtual>

      <S.Controls>
        {playing ? (
          <FontAwesomeIcon
            icon={faVolumeMute}
            onClick={() => videoHandler("pause")}
          />
        ) : (
          <FontAwesomeIcon
            icon={faVolumeLow}
            onClick={() => videoHandler("play")}
          />
        )}
      </S.Controls>
    </S.sliderMain>
  );
}
