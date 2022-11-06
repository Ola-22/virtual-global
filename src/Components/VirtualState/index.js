import { Link } from "react-router-dom";
import * as S from "./style";
import { useState, useEffect } from "react";
import authService from "../../Pages/Register/Auth";
import { LazyImage } from "../LazyImage";

function VirtualState({ homeData, settingsData, isPending }) {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);
  return (
    <S.VirtualState>
      <div>
        <LazyImage
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
        {!currentUser && (
          <Link to="/register">
            {settingsData?.items?.translation?.button_join}
          </Link>
        )}
      </S.virtualBox>
    </S.VirtualState>
  );
}

export default VirtualState;
