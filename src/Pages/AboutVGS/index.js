import axiosInstance from "../../helpers/axios";
import * as S from "./style";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import Header from "../../Components/Header";

function AboutVGS({ settingsData, profileInformation, handleSetLanguage }) {
  const [aboutVGSData, setAboutVGSData] = useState();

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/about-vgs", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setAboutVGSData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [handleSetLanguage]);

  return (
    <S.Main>
      <Nav settingsData={settingsData} handleSetLanguage={handleSetLanguage} />
      <Header
        profileInformation={profileInformation}
        settingsData={settingsData}
      />
      <S.AboutContainer>
        <div className="box">
          <h1
            dangerouslySetInnerHTML={{
              __html: aboutVGSData?.items?.title,
            }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html: aboutVGSData?.items?.text,
            }}
          />
          <S.BoxAbout>
            <img src={aboutVGSData?.items?.image} alt="" />
          </S.BoxAbout>
        </div>
      </S.AboutContainer>
    </S.Main>
  );
}

export default AboutVGS;
