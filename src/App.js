import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Details from "./Pages/Details";
import Forum from "./Pages/Forum";
import Profile from "./Pages/Profile";
import axiosInstance from "./helpers/axios";
import { useEffect, useState } from "react";
import EditProfile from "./Pages/EditProfile";
import ForgetPassword from "./Pages/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword";
import ChangePassword from "./Pages/ChangePassword";
import Faqs from "./Pages/Faqs";

// import song from "./music/background-music.mp3";

import Helmet from "react-helmet";
import PagesMain from "./Components/PagesMain";
import { PlayAudio } from "./sound";

function App() {
  const [settingsData, setSettingsData] = useState();
  const [homeData, setHomeData] = useState();

  // const [setSongs] = useState("");

  // useEffect(() => {
  //   songs.play();
  // }, [songs]);

  // window.onload = function () {
  //   setSongs(new Audio(song));
  // };

  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "en"
  );

  console.log(language, "D");

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/settings", {
        headers: {
          lang: language,
        },
      })
      .then((res) => {
        setSettingsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [language]);

  // console.log(settingsData);

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/home-page", {
        headers: {
          lang: language,
        },
      })
      .then((res) => {
        setHomeData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [language]);

  // console.log(localStorage.getItem("language"));
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
        <PlayAudio filepath="./music/background-music.mp3" />
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
            path="/:slug"
            element={
              <PagesMain
                settingsData={settingsData}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
                profileInformation={profileInformation}
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
