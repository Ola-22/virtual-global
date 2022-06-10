import * as S from "./style";
import { Link } from "react-router-dom";

function Nav({ settingsData, language, handleSetLanguage }) {
  console.log(language);
  console.log(settingsData?.items?.languages);

  return (
    <S.NavContainer className="nav-container">
      <Link className="box-virtual" to="/">
        <div>
          <div className="img-container">
            <img
              src={settingsData?.items?.logo}
              alt="logo"
              width="110"
              height="65"
            />
          </div>

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
