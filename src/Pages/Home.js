import AboutVGS from "../Components/AboutVGS";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import PopularDiscussions from "../Components/PopularDiscussions";
import VirtualState from "../Components/VirtualState";

export default function Home() {
  return (
    <div style={{ width: "100%" }}>
      <Nav />
      <Header />
      <Banner />
      <VirtualState />
      <AboutVGS />
      <PopularDiscussions />
      <Footer />
    </div>
  );
}
