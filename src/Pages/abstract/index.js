import axiosInstance from "../../helpers/axios";
import * as S from "./style";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import Header from "../../Components/Header";

function Abstract({ settingsData, profileInformation, handleSetLanguage }) {
  const [abstractData, setAbstractData] = useState();

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/vgs-abstract", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setAbstractData(res.data);
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
              __html: abstractData?.items?.title,
            }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html: abstractData?.items?.text,
            }}
          />
          <S.BoxAbout>
            <img src={abstractData?.items?.image} alt="" />
          </S.BoxAbout>
        </div>
      </S.AboutContainer>
    </S.Main>
  );
}

export default Abstract;
