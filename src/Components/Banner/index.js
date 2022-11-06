import * as S from "./style";
import Social from "../Social";
import { NumberFormat } from "../../lib/NumberFormat";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faVolumeLow,
  faVolumeMute,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";

library.add(fas, faVolumeLow, faVolumeMute, faFontAwesome);

export default function SliderComponent({ settingsData, language }) {
  const [playing, setPlaying] = useState(true);
  const [playingStop, setPlayingStop] = useState(true);

  const videoRef = useRef(null);
  const videoStopRef = useRef(null);

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

  const videoStop = (control) => {
    if (control === "play") {
      videoRef.current.play();

      setPlayingStop(true);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlayingStop(false);
    }
  };

  return (
    <S.sliderMain>
      {language === "en" ? (
        <video
          typeof="video/mp4"
          ref={(video) => {
            videoRef.current = video;
            videoStopRef.current = video;
          }}
          className="video"
          src="./music/videoLangEn.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : language === "ar" ? (
        <video
          ref={(video) => {
            videoRef.current = video;
            videoStopRef.current = video;
          }}
          className="video"
          src="./music/videoLangAr.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : language === "fr" ? (
        <video
          ref={(video) => {
            videoRef.current = video;
            videoStopRef.current = video;
          }}
          className="video"
          src="./music/videoLangFr.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        ""
      )}

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

        {playingStop ? (
          <FontAwesomeIcon icon={faPause} onClick={() => videoStop("pause")} />
        ) : (
          <FontAwesomeIcon icon={faPlay} onClick={() => videoStop("play")} />
        )}
      </S.Controls>
    </S.sliderMain>
  );
}
