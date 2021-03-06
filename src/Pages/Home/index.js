import AnswerQuestions from "../../Components/Answer&Questions";
import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Nav from "../../Components/Nav";
import PopularDiscussions from "../../Components/PopularDiscussions";
import Testimonials from "../../Components/Testimonials";
import VirtualState from "../../Components/VirtualState";
import * as S from "./style";

export default function Home({
  settingsData,
  homeData,
  profileInformation,
  language,
  handleSetLanguage,
  setLanguage,
}) {
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
      />
      <Banner
        homeData={homeData}
        settingsData={settingsData}
        language={language}
      />
      <VirtualState
        homeData={homeData}
        language={language}
        settingsData={settingsData}
      />
      <S.HomeContainer>
        <PopularDiscussions
          homeData={homeData}
          language={language}
          settingsData={settingsData}
        />
        <Testimonials
          homeData={homeData}
          language={language}
          settingsData={settingsData}
        />
        <AnswerQuestions
          settingsData={settingsData}
          homeData={homeData}
          language={language}
        />
      </S.HomeContainer>

      <Footer settingsData={settingsData} language={language} />
    </S.headerContainer>
  );
}
