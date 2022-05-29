import axiosInstance from "../../helpers/axios";
import * as S from "./style";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import Header from "../../Components/Header";

function Project({ settingsData, profileInformation }) {
  const [projectData, setProjectData] = useState();

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/vgs-project", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setProjectData(res.data);
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
              __html: projectData?.items?.title,
            }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html: projectData?.items?.text,
            }}
          />
          <S.BoxAbout>
            <img src={projectData?.items?.image} alt="" />
          </S.BoxAbout>
        </div>
      </S.AboutContainer>
    </S.Main>
  );
}

export default Project;
