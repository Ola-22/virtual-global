import Social from "../Social";
import * as S from "./style";

function Banner({ paragraphOne, src, settingsData }) {
  return (
    <S.BannerContainer>
      <div>
        <h4>NUMBER of VIRTUAL Citizens</h4>
        <h2>1,115,887</h2>
      </div>
      <div>
        <div className="box-one">
          <S.contentBanner>
            <span
              dangerouslySetInnerHTML={{
                __html: paragraphOne,
              }}
            />
          </S.contentBanner>
        </div>

        <S.BackGround>
          <span></span>
          <img src={src} alt="banner virtual global" />
        </S.BackGround>

        <Social settingsData={settingsData} />
      </div>
    </S.BannerContainer>
  );
}

export default Banner;
