import axiosInstance from "../../helpers/axios";
import * as S from "./style";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav";
import Header from "../../Components/Header";

function About({ settingsData }) {
  const [aboutData, setAboutData] = useState();

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/who_we_are")
      .then((res) => {
        setAboutData(res.data);
        // console.log("about", aboutData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log("about", aboutData);

  return (
    <div style={{ width: "100%" }}>
      <Nav settingsData={settingsData} />
      <Header />
      <S.AboutContainer>
        <div className="box">
          <h1
            dangerouslySetInnerHTML={{
              __html: aboutData?.items?.title,
            }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html: aboutData?.items?.text,
            }}
          />
          <img src={aboutData?.items?.image} alt="" />
        </div>
      </S.AboutContainer>
    </div>
  );
}

export default About;
