import axiosInstance from "../../helpers/axios";
import * as S from "./style";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import Header from "../../Components/Header";

function VissionGIV({ settingsData, profileInformation }) {
  const [givData, setGIV] = useState();

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/vission-giv", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setGIV(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <S.Main>
      <Nav settingsData={settingsData} />
      <Header
        profileInformation={profileInformation}
        settingsData={settingsData}
      />
      <S.AboutContainer>
        <div className="box">
          <h1
            dangerouslySetInnerHTML={{
              __html: givData?.items?.title,
            }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html: givData?.items?.text,
            }}
          />
          <S.BoxAbout>
            <img src={givData?.items?.image} alt="" />
          </S.BoxAbout>
        </div>
      </S.AboutContainer>
    </S.Main>
  );
}

export default VissionGIV;
