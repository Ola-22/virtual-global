import * as S from "./style";
import { Link } from "react-router-dom";

function Nav({ settingsData, language, handleSetLanguage }) {
  return (
    <S.NavContainer>
      <Link className="box-virtual" to="/">
        <div>
          <img
            src={settingsData?.items?.logo}
            alt="logo"
            width="140"
            height="85"
          />
          <h3>{settingsData?.items?.title}</h3>
        </div>
      </Link>

      <div className="right">
        <img src="/images/language.png" alt="language" />

        <select
          className="custom-select"
          value={language}
          onChange={(e) => handleSetLanguage(e.target.value)}
        >
          {settingsData?.items?.languages?.map((lang, index) => (
            <>
              <option key={index} value={lang?.lang}>
                {lang?.lang}
              </option>
            </>
          ))}
        </select>
      </div>
    </S.NavContainer>
  );
}

export default Nav;
