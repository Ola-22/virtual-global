import axiosInstance from "../../helpers/axios";
import * as S from "./style";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import Header from "../../Components/Header";

function List({ settingsData, profileInformation, handleSetLanguage }) {
  const [listData, setListData] = useState();

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/vgs-list", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setListData(res.data);
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
              __html: listData?.items?.title,
            }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html: listData?.items?.text,
            }}
          />
          <S.BoxAbout>
            <img src={listData?.items?.image} alt="" />
          </S.BoxAbout>
        </div>
      </S.AboutContainer>
    </S.Main>
  );
}

export default List;
