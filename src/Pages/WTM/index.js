import axiosInstance from "../../helpers/axios";
import * as S from "./style";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import Header from "../../Components/Header";

function WTM({ settingsData, profileInformation, handleSetLanguage }) {
  const [wtmData, setWtmData] = useState();

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/wtm", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setWtmData(res.data);
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
              __html: wtmData?.items?.title,
            }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html: wtmData?.items?.text,
            }}
          />
          <S.BoxAbout>
            <img src={wtmData?.items?.image} alt="" />
          </S.BoxAbout>
        </div>
      </S.AboutContainer>
    </S.Main>
  );
}

export default WTM;
