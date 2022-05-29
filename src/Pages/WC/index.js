import axiosInstance from "../../helpers/axios";
import * as S from "./style";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import Header from "../../Components/Header";

function WC({ settingsData, profileInformation }) {
  const [wcData, setWCData] = useState();

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/wc", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setWCData(res.data);
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
              __html: wcData?.items?.title,
            }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html: wcData?.items?.text,
            }}
          />
          <S.BoxAbout>
            <img src={wcData?.items?.image} alt="" />
          </S.BoxAbout>
        </div>
      </S.AboutContainer>
    </S.Main>
  );
}

export default WC;
