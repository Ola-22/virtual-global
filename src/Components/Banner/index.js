import Social from "../Social";
import * as S from "./style";

function Banner() {
  return (
    <S.BannerContainer>
      <div>
        <h4>NUMBER of VIRTUAL Citizens</h4>
        <h2>1,115,887</h2>
      </div>
      <div>
        <div>
          <p>Do you suffer when witnessing</p>
          <p>killings and massacres due to</p>
          <p> wars? Do you feel the danger of</p>
        </div>

        {/* #2F2F2F */}
        <S.BackGround>
          <span></span>
          <img src="/images/banner.png" alt="banner virtual global" />
        </S.BackGround>

        <Social />
      </div>
    </S.BannerContainer>
  );
}

export default Banner;
