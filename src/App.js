import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Details from "./Pages/Details";
import Forum from "./Pages/Forum";
import Profile from "./Pages/Profile";
import axiosInstance from "./helpers/axios";
import { useEffect, useState, useCallback } from "react";
import EditProfile from "./Pages/EditProfile";
import ForgetPassword from "./Pages/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword";
import ChangePassword from "./Pages/ChangePassword";
import Faqs from "./Pages/Faqs";
import Helmet from "react-helmet";
import PagesMain from "./Components/PagesMain";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import authService from "./Pages/Register/Auth";

function App() {
  const [settingsData, setSettingsData] = useState();
  const [homeData, setHomeData] = useState();

  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "en"
  );

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

  const [profileInformation, setProfileInformation] = useState();

  const fetchData = useCallback(() => {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: language,
      },
    };
    const response = axiosInstance
      .get(
        `/api/user/profile/edit`,

        config
      )
      .then((res) => {
        if (currentUser) {
          setProfileInformation(res.data.items);
        }
      })
      .catch((err) => {
        if (currentUser) {
          console.log(err, "rrr");
        }
      });

    return response;
  }, [currentUser, language]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Router>
      <div
        className="App"
        style={{
          direction: localStorage.getItem("language") === "ar" ? "rtl" : "ltr",
          fontFamily:
            localStorage.getItem("language") === "ar" ? "Cairo" : "Verdana",
        }}
      >
        <Helmet>
          <title>{settingsData?.items?.title}</title>
          <link rel="icon" href="./images/logo-footer.png" />
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
              <Register
                language={language}
                settingsData={settingsData}
                fetchData={fetchData}
              />
            }
          />

          <Route
            path="/login"
            element={
              <Login
                language={language}
                settingsData={settingsData}
                fetchData={fetchData}
              />
            }
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
                language={language}
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
                fetchData={fetchData}
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
            element={
              <ResetPassword settingsData={settingsData} language={language} />
            }
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

          <Route
            path="/blog"
            element={
              <Blog
                settingsData={settingsData}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
                profileInformation={profileInformation}
                language={language}
              />
            }
          />

          <Route
            path="/blog/:id"
            element={
              <BlogDetails
                settingsData={settingsData}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
                profileInformation={profileInformation}
                language={language}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
