import { Link } from "react-router-dom";
import * as S from "./style";

function VirtualState({ homeData }) {
  return (
    <S.VirtualState>
      <div>
        <img
          //   width="343"
          src={homeData?.items?.register_now_section?.image}
          alt="join the virtual global"
        />
      </div>
      <div>
        <h6
          dangerouslySetInnerHTML={{
            __html: homeData?.items?.register_now_section?.text,
          }}
        />

        <Link to="/register">Register Now</Link>
      </div>
    </S.VirtualState>
  );
}

export default VirtualState;
