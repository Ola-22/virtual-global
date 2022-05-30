import axiosInstance from "../../helpers/axios";
import * as S from "./style";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import Header from "../../Components/Header";

function Implementation({
  settingsData,
  profileInformation,
  handleSetLanguage,
}) {
  const [implementationData, setImplementationData] = useState();

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/vgs-implementation", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setImplementationData(res.data);
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
              __html: implementationData?.items?.title,
            }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html: implementationData?.items?.text,
            }}
          />
          <S.BoxAbout>
            <img src={implementationData?.items?.image} alt="" />
          </S.BoxAbout>
        </div>
      </S.AboutContainer>
    </S.Main>
  );
}

export default Implementation;
