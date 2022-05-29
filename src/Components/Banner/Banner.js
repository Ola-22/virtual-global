import Social from "../Social";
import * as S from "./style";

function Banner({ paragraphOne, src, settingsData, link }) {
  return (
    <S.BannerContainer>
      <div>
        <h4> {settingsData?.items?.translation?.slider}</h4>
        <h2>{settingsData?.items?.number_virtial_citizens}</h2>
      </div>
      <div>
        <div className="box-one">
          <S.contentBanner>
            <h6
              dangerouslySetInnerHTML={{
                __html: paragraphOne,
              }}
            />
          </S.contentBanner>
        </div>

        <S.BackGround>
          <span></span>
          <a href={link}>
            <img src={src} alt="banner virtual global" />
          </a>
        </S.BackGround>

        <Social settingsData={settingsData} />
      </div>
    </S.BannerContainer>
  );
}

export default Banner;
