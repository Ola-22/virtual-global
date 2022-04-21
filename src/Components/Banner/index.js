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
        <p>
          Do you suffer when witnessing killings and massacres due to wars? Do
          you feel the danger of
        </p>

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
