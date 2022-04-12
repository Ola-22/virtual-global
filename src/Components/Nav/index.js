import * as S from "./style";

function Nav() {
  return (
    <S.NavContainer>
      <div>
        <img src="/images/logo.png" alt="logo" width="110" height="65" />
        <h3>Virtual Global State ( Virland )</h3>
      </div>
      <div>
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
