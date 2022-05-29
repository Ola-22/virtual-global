import axiosInstance from "../../helpers/axios";
import * as S from "./style";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import Header from "../../Components/Header";

function VissionIntroduction({ settingsData, profileInformation }) {
  const [introductionData, setIntroduction] = useState();

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/vission-introduction", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setIntroduction(res.data);
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
              __html: introductionData?.items?.title,
            }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html: introductionData?.items?.text,
            }}
          />
          <S.BoxAbout>
            <img src={introductionData?.items?.image} alt="" />
          </S.BoxAbout>
        </div>
      </S.AboutContainer>
    </S.Main>
  );
}

export default VissionIntroduction;
