import AboutVGS from "../Components/AboutVGS";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import VirtualState from "../Components/VirtualState";

export default function Home() {
  return (
    <div style={{ width: "100%" }}>
      <Nav />
      <Header />
      <Banner />
      <VirtualState />
      <AboutVGS />
    </div>
  );
}
