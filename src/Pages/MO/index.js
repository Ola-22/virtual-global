import axiosInstance from "../../helpers/axios";
import * as S from "./style";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import Header from "../../Components/Header";

function MO({ settingsData }) {
  const [moData, setMoData] = useState();

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/mo", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setMoData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Nav settingsData={settingsData} />
      <Header settingsData={settingsData} />
      <S.AboutContainer>
        <div className="box">
          <h1
            dangerouslySetInnerHTML={{
              __html: moData?.items?.title,
            }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html: moData?.items?.text,
            }}
          />
          <S.BoxAbout>
            <img src={moData?.items?.image} alt="" />
          </S.BoxAbout>
        </div>
      </S.AboutContainer>
    </div>
  );
}

export default MO;
