import axiosInstance from "../../helpers/axios";
import * as S from "./style";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import Header from "../../Components/Header";

function Goals({ settingsData, profileInformation, handleSetLanguage }) {
  const [goalsData, setGoals] = useState();

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/goals", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setGoals(res.data);
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
              __html: goalsData?.items?.title,
            }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html: goalsData?.items?.text,
            }}
          />
          <S.BoxAbout>
            <img src={goalsData?.items?.image} alt="" />
          </S.BoxAbout>
        </div>
      </S.AboutContainer>
    </S.Main>
  );
}

export default Goals;
