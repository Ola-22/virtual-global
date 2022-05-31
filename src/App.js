import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Details from "./Pages/Details";
import ML from "./Pages/ML";
import Forum from "./Pages/Forum";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import axiosInstance from "./helpers/axios";
import { useEffect, useState } from "react";
import EditProfile from "./Pages/EditProfile";
import ForgetPassword from "./Pages/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword";
import ChangePassword from "./Pages/ChangePassword";
import Abstract from "./Pages/abstract";
import Implementation from "./Pages/Implementation";
import Project from "./Pages/Project";
import SMW from "./Pages/SMW";
import List from "./Pages/List";
import BML from "./Pages/BML";
import WC from "./Pages/WC";
import VissionIntroduction from "./Pages/VissionIntroduction";
import VissionGIV from "./Pages/VissionGIV";
import VissionWTL from "./Pages/VissionWTL";
import Goals from "./Pages/Goals";
import Faqs from "./Pages/Faqs";
import MO from "./Pages/MO";
import WTM from "./Pages/WTM";
import GTS from "./Pages/GTS";
import AboutVGS from "./Pages/AboutVGS";

import song from "./music/background-music.mp3";

import Helmet from "react-helmet";


function App() {
  const [settingsData, setSettingsData] = useState();
  const [homeData, setHomeData] = useState();

  const [songs, setSongs] = useState(new Audio(song));

  useEffect(() => {
    // songs.play();
  }, []);

  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/settings", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setSettingsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [language]);

  console.log(settingsData);

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/home-page", {
        headers: {
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setHomeData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [language]);

  console.log(localStorage.getItem("language"));
  const [profileInformation, setProfileInformation] = useState();
  useEffect(() => {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: localStorage.getItem("language"),
      },
    };

    axiosInstance
      .get(
        `/api/user/profile/edit`,

        config
      )
      .then((res) => {
        setProfileInformation(res.data.items);
      })
      .catch((err) => console.log(err));
  }, [language]);

  return (
    <BrowserRouter>
      <div
        className="App"
        style={{
          direction: localStorage.getItem("language") === "ar" ? "rtl" : "ltr",
        }}
      >
        {/* <audio autoplay>
          <source
            src="../public/music/background-music.mp3"
            type="audio/mpeg"
          />
        </audio> */}

        <Helmet>
          <title>{settingsData?.items?.title}</title>
        </Helmet>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setLanguage={setLanguage}
                language={language}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
                settingsData={settingsData}
                homeData={homeData}
                profileInformation={profileInformation}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register language={language} settingsData={settingsData} />
            }
          />

          <Route
            path="/login"
            element={<Login language={language} settingsData={settingsData} />}
          />
          <Route
            path="/discussion"
            element={
              <Forum
                profileInformation={profileInformation}
                settingsData={settingsData}
                language={language}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
              />
            }
          />

          <Route
            path="/discussion/:id"
            element={
              <Details
                settingsData={settingsData}
                profileInformation={profileInformation}
                language={language}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                profileInformation={profileInformation}
                settingsData={settingsData}
                language={language}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
              />
            }
          />
          <Route
            path="/who-we-are"
            element={
              <About
                profileInformation={profileInformation}
                settingsData={settingsData}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
              />
            }
          />

          <Route
            path="/edit-profile"
            element={
              <EditProfile
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
                language={language}
                settingsData={settingsData}
                profileInformation={profileInformation}
              />
            }
          />
          <Route
            path="/forget-password"
            element={
              <ForgetPassword language={language} settingsData={settingsData} />
            }
          />

          <Route
            path="/reset-password/:token/:emailRequest"
            element={<ResetPassword />}
          />

          <Route
            path="/change-password"
            element={
              <ChangePassword settingsData={settingsData} language={language} />
            }
          />

          <Route
            path="/vgs-abstract"
            element={
              <Abstract
                profileInformation={profileInformation}
                language={language}
                settingsData={settingsData}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
              />
            }
          />

          <Route
            path="/vgs-implementation"
            element={
              <Implementation
                profileInformation={profileInformation}
                language={language}
                settingsData={settingsData}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
              />
            }
          />

          <Route
            path="/vgs-project"
            element={
              <Project
                profileInformation={profileInformation}
                language={language}
                settingsData={settingsData}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
              />
            }
          />

          <Route
            path="/vgs-smw"
            element={
              <SMW
                profileInformation={profileInformation}
                language={language}
                settingsData={settingsData}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
              />
            }
          />
          <Route
            path="/vgs-list"
            element={
              <List
                profileInformation={profileInformation}
                language={language}
                settingsData={settingsData}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
              />
            }
          />

          <Route
            path="/bml"
            element={
              <BML
                profileInformation={profileInformation}
                language={language}
                settingsData={settingsData}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
              />
            }
          />

          <Route
            path="/ml"
            element={
              <ML
                profileInformation={profileInformation}
                language={language}
                settingsData={settingsData}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
              />
            }
          />

          <Route
            path="/wc"
            element={
              <WC
                profileInformation={profileInformation}
                language={language}
                settingsData={settingsData}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
              />
            }
          />
          <Route
            path="/vission-introduction"
            element={
              <VissionIntroduction
                language={language}
                settingsData={settingsData}
                profileInformation={profileInformation}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
              />
            }
          />

          <Route
            path="/vission-giv"
            element={
              <VissionGIV
                profileInformation={profileInformation}
                language={language}
                settingsData={settingsData}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
              />
            }
          />
          <Route
            path="/vission-wtl"
            element={
              <VissionWTL
                profileInformation={profileInformation}
                language={language}
                settingsData={settingsData}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
              />
            }
          />
          <Route
            path="/goals"
            element={
              <Goals
                profileInformation={profileInformation}
                language={language}
                settingsData={settingsData}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
              />
            }
          />
          <Route
            path="/q&a"
            element={
              <Faqs
                profileInformation={profileInformation}
                language={language}
                settingsData={settingsData}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
              />
            }
          />

          <Route
            path="/mo"
            element={
              <MO
                profileInformation={profileInformation}
                language={language}
                settingsData={settingsData}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
              />
            }
          />

          <Route
            path="/wtm"
            element={
              <WTM
                profileInformation={profileInformation}
                language={language}
                settingsData={settingsData}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
              />
            }
          />
          <Route
            path="/gts"
            element={
              <GTS
                profileInformation={profileInformation}
                language={language}
                settingsData={settingsData}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
              />
            }
          />
          <Route
            path="/about-vgs"
            element={
              <AboutVGS
                profileInformation={profileInformation}
                language={language}
                settingsData={settingsData}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
