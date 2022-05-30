import axiosInstance from "../../helpers/axios";
import * as S from "./style";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import Header from "../../Components/Header";

function BML({ settingsData, profileInformation, handleSetLanguage }) {
  const [bmlData, setBMLData] = useState();

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/bml", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setBMLData(res.data);
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
              __html: bmlData?.items?.title,
            }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html: bmlData?.items?.text,
            }}
          />
          <S.BoxAbout>
            <img src={bmlData?.items?.image} alt="" />
          </S.BoxAbout>
        </div>
      </S.AboutContainer>
    </S.Main>
  );
}

export default BML;
