import { Link } from "react-router-dom";
import * as S from "./style";

function VirtualState({ homeData, settingsData }) {
  return (
    <S.VirtualState>
      <div>
        <img
          //   width="343"
          src={homeData?.items?.register_now_section?.image}
          alt="join the virtual global"
        />
      </div>
      <S.virtualBox>
        <h6
          dangerouslySetInnerHTML={{
            __html: homeData?.items?.register_now_section?.text,
          }}
        />

        <Link to="/register">
          {settingsData?.items?.translation?.button_join}
        </Link>
      </S.virtualBox>
    </S.VirtualState>
  );
}

export default VirtualState;
