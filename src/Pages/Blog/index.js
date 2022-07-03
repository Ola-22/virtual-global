import Header from "../../Components/Header";
import Nav from "../../Components/Nav";
import PaginationComponent from "./PaginationComponent";

import * as S from "./style";

function PagesMain({
  settingsData,
  handleSetLanguage,
  profileInformation,
  language,
}) {
  return (
    <S.Main>
      <Nav settingsData={settingsData} handleSetLanguage={handleSetLanguage} />
      <Header
        profileInformation={profileInformation}
        settingsData={settingsData}
      />
      <S.BlogContainer>
        <div className="box">
          <div className="container">
            <h1>{settingsData?.items?.translation?.testimonies_blog}</h1>

            <PaginationComponent
              settingsData={settingsData}
              language={language}
            />
          </div>
        </div>
      </S.BlogContainer>
    </S.Main>
  );
}

export default PagesMain;
