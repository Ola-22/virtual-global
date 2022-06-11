import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../helpers/axios";
import Nav from "../Nav";
import Header from "../Header";
import * as S from "./style";

function PagesMain({
  settingsData,
  handleSetLanguage,
  profileInformation,
  language,
}) {
  const slug = useParams();

  const slugNew = slug?.slug;

  const [data, setData] = useState();

  useEffect(() => {
    axiosInstance
      .get(
        `/api/web-site/pages/${slugNew}`,

        {
          headers: {
            lang: language,
          },
        }
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [handleSetLanguage, slugNew]);

  return (
    <S.Main>
      <Nav settingsData={settingsData} handleSetLanguage={handleSetLanguage} />
      <Header
        profileInformation={profileInformation}
        settingsData={settingsData}
      />
      <S.AboutContainer>
        <div className="box">
          <div className="container">
            <h1
              dangerouslySetInnerHTML={{
                __html: data?.items?.title,
              }}
            />

            <p
              dangerouslySetInnerHTML={{
                __html: data?.items?.text,
              }}
            />
            <S.BoxAbout>
              {data?.items?.image.length > 0 && (
                <img src={data?.items?.image} alt="" />
              )}
            </S.BoxAbout>
          </div>
        </div>
      </S.AboutContainer>
    </S.Main>
  );
}

export default PagesMain;
