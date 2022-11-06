import Header from "../../Components/Header";
import Nav from "../../Components/Nav";
import * as S from "./style";
import PaginationComponent from "../../Components/PaginationComponent";

function Faqs({
  settingsData,
  profileInformation,
  handleSetLanguage,
  language,
  rtlLang,
}) {
  return (
    <S.Main>
      <Nav
        profileInformation={profileInformation}
        settingsData={settingsData}
        handleSetLanguage={handleSetLanguage}
      />
      <Header
        profileInformation={profileInformation}
        settingsData={settingsData}
      />
      <S.FaqsContainer>
        <PaginationComponent language={language} rtlLang={rtlLang} />
      </S.FaqsContainer>
    </S.Main>
  );
}

export default Faqs;
