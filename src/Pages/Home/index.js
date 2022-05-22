import AboutVGS from "../../Components/AboutVGS";
import AnswerQuestions from "../../Components/Answer&Questions";
import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Nav from "../../Components/Nav";
import PopularDiscussions from "../../Components/PopularDiscussions";
import VirtualState from "../../Components/VirtualState";

export default function Home({ settingsData, homeData }) {
  return (
    <div style={{ width: "100%" }}>
      <Nav settingsData={settingsData} />
      <Header />
      <Banner homeData={homeData} settingsData={settingsData} />
      <VirtualState homeData={homeData} />
      <AboutVGS homeData={homeData} />
      <PopularDiscussions homeData={homeData} />
      <AnswerQuestions homeData={homeData} />
      <Footer settingsData={settingsData} />
    </div>
  );
}
