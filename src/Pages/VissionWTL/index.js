import axiosInstance from "../../helpers/axios";
import * as S from "./style";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import Header from "../../Components/Header";

function VissionWTL({ settingsData, profileInformation, handleSetLanguage }) {
  const [wtlData, setWTL] = useState();

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/vission-wtl", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setWTL(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [handleSetLanguage]);

  return (
    <S.Main>
      <Nav handleSetLanguage={handleSetLanguage} settingsData={settingsData} />
      <Header
        profileInformation={profileInformation}
        settingsData={settingsData}
      />
      <S.AboutContainer>
        <div className="box">
          <h1
            dangerouslySetInnerHTML={{
              __html: wtlData?.items?.title,
            }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html: wtlData?.items?.text,
            }}
          />
          <S.BoxAbout>
            <img src={wtlData?.items?.image} alt="" />
          </S.BoxAbout>
        </div>
      </S.AboutContainer>
    </S.Main>
  );
}

export default VissionWTL;
