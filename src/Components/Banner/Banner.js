import Social from "../Social";
import * as S from "./style";

function Banner({ paragraphOne, paragraphTwo, paragraphThree, src }) {
  return (
    <S.BannerContainer>
      <div>
        <h4>NUMBER of VIRTUAL Citizens</h4>
        <h2>1,115,887</h2>
      </div>
      <div>
        <div>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <p>{paragraphThree}</p>
        </div>

        <S.BackGround>
          <span></span>
          <img src={src} alt="banner virtual global" />
        </S.BackGround>

        <Social />
      </div>
    </S.BannerContainer>
  );
}

export default Banner;
