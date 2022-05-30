import axiosInstance from "../../helpers/axios";
import * as S from "./style";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import Header from "../../Components/Header";

function SMW({ settingsData, profileInformation, handleSetLanguage }) {
  const [SMWData, setSMWData] = useState();

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/vgs-smw", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setSMWData(res.data);
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
              __html: SMWData?.items?.title,
            }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html: SMWData?.items?.text,
            }}
          />
          <S.BoxAbout>
            <img src={SMWData?.items?.image} alt="" />
          </S.BoxAbout>
        </div>
      </S.AboutContainer>
    </S.Main>
  );
}

export default SMW;
