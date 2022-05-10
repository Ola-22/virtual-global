import * as S from "./style";
import { Link } from "react-router-dom";

function Nav({ settingsData }) {
  return (
    <S.NavContainer>
      <Link to="/">
        <div>
          <img
            src={settingsData?.items?.logo}
            alt="logo"
            width="110"
            height="65"
          />
          <h3>{settingsData?.items?.title}</h3>
        </div>
      </Link>

      <div className="right">
        <img src="/images/language.png" alt="language" />
        <select className="custom-select">
          <option value="English">En</option>
          <option value="Arabic">Ar</option>
        </select>
      </div>
    </S.NavContainer>
  );
}

export default Nav;
