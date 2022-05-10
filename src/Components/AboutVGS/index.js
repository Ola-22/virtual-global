import { useState } from "react";
import * as S from "./style";
import { useEffect } from "react";
import axiosInstance from "../../helpers/axios";

export default function AboutVGS() {
  const [showMore, setShowMore] = useState(false);

  const [aboutData, setAboutData] = useState();

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/pages/who_we_are")
      .then((res) => {
        setAboutData(res.data);
        // console.log("setAboutData", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <S.AboutContainer>
      <div>
        <h1>{aboutData?.items?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: aboutData?.items?.text }} />

        {showMore && (
          <div dangerouslySetInnerHTML={{ __html: aboutData?.items?.text }} />
        )}
        <button onClick={() => setShowMore(!showMore)}>Read More</button>
      </div>
      <div>
        <img src={aboutData?.items?.image} alt="read the about information" />
      </div>
    </S.AboutContainer>
  );
}
