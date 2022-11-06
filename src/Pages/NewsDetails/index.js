import * as S from "./style";
import Header from "../../Components/Header";
import Nav from "../../Components/Nav";

function NewsDetails({
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
      <S.AboutContainer>
        <div className="box">
          <div className="container">
            <h1
              dangerouslySetInnerHTML={{
                __html: settingsData?.items?.news_title,
              }}
            />

            <p
              dangerouslySetInnerHTML={{
                __html: settingsData?.items?.news_description,
              }}
            />
          </div>
        </div>
      </S.AboutContainer>
    </S.Main>
  );
}

export default NewsDetails;
