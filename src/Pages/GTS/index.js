import axiosInstance from "../../helpers/axios";
import * as S from "./style";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import Header from "../../Components/Header";

function GTS({ settingsData, profileInformation, handleSetLanguage }) {
  const [gtsData, setGtsData] = useState();

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/gts", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setGtsData(res.data);
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
              __html: gtsData?.items?.title,
            }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html: gtsData?.items?.text,
            }}
          />
          <S.BoxAbout>
            <img src={gtsData?.items?.image} alt="" />
          </S.BoxAbout>
        </div>
      </S.AboutContainer>
    </S.Main>
  );
}

export default GTS;
