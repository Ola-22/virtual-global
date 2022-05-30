import axiosInstance from "../../helpers/axios";
import * as S from "./style";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import Header from "../../Components/Header";

function About({
  settingsData,
  profileInformation,
  language,
  setLanguage,
  handleSetLanguage,
}) {
  const [aboutData, setAboutData] = useState();

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/who_we_are", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setAboutData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [handleSetLanguage]);

  return (
    <S.Main>
      <Nav
        language={language}
        handleSetLanguage={handleSetLanguage}
        setLanguage={setLanguage}
        settingsData={settingsData}
      />
      <Header
        profileInformation={profileInformation}
        settingsData={settingsData}
      />
      <S.AboutContainer>
        <div className="box">
          <h1
            dangerouslySetInnerHTML={{
              __html: aboutData?.items?.title,
            }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html: aboutData?.items?.text,
            }}
          />
          <S.BoxAbout>
            <img src={aboutData?.items?.image} alt="" />
          </S.BoxAbout>
        </div>
      </S.AboutContainer>
    </S.Main>
  );
}

export default About;
