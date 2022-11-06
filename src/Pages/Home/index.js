import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnswerQuestions from "../../Components/Answer&Questions";
import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Nav from "../../Components/Nav";
import PopularDiscussions from "../../Components/PopularDiscussions";
import Testimonials from "../../Components/Testimonials";
import VirtualState from "../../Components/VirtualState";
import * as S from "./style";
import { AiOutlineClose } from "react-icons/ai";

export default function Home({
  settingsData,
  homeData,
  profileInformation,
  language,
  handleSetLanguage,
  setLanguage,
  isPending,
  rtlLang,
}) {
  const [show, setShow] = useState(true);

  const navigate = useNavigate();

  return (
    <S.headerContainer style={{ width: "100%" }}>
      <Nav
        settingsData={settingsData}
        language={language}
        handleSetLanguage={handleSetLanguage}
        setLanguage={setLanguage}
      />

      <Header
        profileInformation={profileInformation}
        settingsData={settingsData}
        language={language}
        isPending={isPending}
        rtlLang={rtlLang}
      />

      {settingsData?.items?.news_title !== "" && (
        <S.NewsBar
          style={{
            direction: rtlLang === 1 ? "rtl" : "ltr",
            display: show === false ? "none" : "flex",
          }}
        >
          <div className="news-wrapper">
            <div onClick={() => navigate("/news")}>
              {language === "ar" ? (
                <S.TitleNew>أخبار</S.TitleNew>
              ) : language === "en" ? (
                <S.TitleNew>News</S.TitleNew>
              ) : language === "fr" ? (
                <S.TitleNew>Nouvelles</S.TitleNew>
              ) : (
                <S.TitleNew>News</S.TitleNew>
              )}

              <div
                className={`${rtlLang === 1 ? "movetxtRtl" : "movetxt"}`}
                dangerouslySetInnerHTML={{
                  __html: settingsData?.items?.news_title,
                }}
              />
            </div>

            {/* onClick={() => navigate("/news")} */}

            <div
              style={{ flex: 1, position: "fixed", right: "0", height: "16px" }}
            >
              {/* <div
                    className={`${rtlLang === 1 ? "movetxtRtl" : "movetxt"}`}
                    dangerouslySetInnerHTML={{
                      __html: settingsData?.items?.news_title,
                    }}
                  /> */}

              <AiOutlineClose onClick={() => setShow(false)} />
            </div>
          </div>
        </S.NewsBar>
      )}
      <Banner
        homeData={homeData}
        settingsData={settingsData}
        language={language}
      />
      <VirtualState
        homeData={homeData}
        language={language}
        settingsData={settingsData}
        isPending={isPending}
      />
      <S.HomeContainer>
        <PopularDiscussions
          homeData={homeData}
          language={language}
          settingsData={settingsData}
          rtlLang={rtlLang}
        />
        <Testimonials
          homeData={homeData}
          language={language}
          settingsData={settingsData}
          rtlLang={rtlLang}
        />
        <AnswerQuestions
          settingsData={settingsData}
          homeData={homeData}
          language={language}
          rtlLang={rtlLang}
        />
      </S.HomeContainer>

      <Footer settingsData={settingsData} language={language} />
    </S.headerContainer>
  );
}
