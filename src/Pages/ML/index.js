import axiosInstance from "../../helpers/axios";
import * as S from "./style";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import Header from "../../Components/Header";

function ML({ settingsData, profileInformation, handleSetLanguage }) {
  const [mlData, setMLData] = useState();

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/ml", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setMLData(res.data);
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
              __html: mlData?.items?.title,
            }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html: mlData?.items?.text,
            }}
          />
          <S.BoxAbout>
            <img src={mlData?.items?.image} alt="" />
          </S.BoxAbout>
        </div>
      </S.AboutContainer>
    </S.Main>
  );
}

export default ML;
