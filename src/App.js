import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Details from "./Pages/Details";
import Forum from "./Pages/Forum";
import Profile from "./Pages/Profile";
import axiosInstance from "./helpers/axios";
import { useEffect, useState, useCallback, useTransition } from "react";

import Helmet from "react-helmet";
import BlogDetails from "./Pages/BlogDetails";
import authService from "./Pages/Register/Auth";
import Home from "./Pages/Home";
import EditProfile from "./Pages/EditProfile";
import ForgetPassword from "./Pages/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword";
import ChangePassword from "./Pages/ChangePassword";
import Faqs from "./Pages/Faqs";
import PagesMain from "./Components/PagesMain";
import Blog from "./Pages/Blog";
import NewsDetails from "./Pages/NewsDetails";

function App() {
  const [settingsData, setSettingsData] = useState();
  const [homeData, setHomeData] = useState();
  const [currentUser, setCurrentUser] = useState(undefined);

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const [langDefault, setLangDefault] = useState();

  useEffect(() => {
    settingsData?.items?.languages.map((lang) =>
      lang.is_default === 1 ? setLangDefault(lang.lang) : ""
    );
  }, [settingsData?.items?.languages]);

  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : langDefault
  );

  useEffect(() => {
    setLanguage(langDefault);
  }, [langDefault]);

  const [rtlLang, setRtlLang] = useState();

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
    settingsData?.items?.languages.map(
      (lang) => language === lang.lang && setRtlLang(lang.is_rtl)
    );
  }, [settingsData?.items?.languages, language]);

  const fetchHomeData = useCallback(() => {
    const response = axiosInstance
      .get("/api/web-site/home-page", {
        headers: {
          lang: language,
        },
      })
      .then((res) => {
        startTransition(() => {
          setHomeData(res.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });

    return response;
  }, [language]);

  useEffect(() => {
    fetchHomeData();
  }, [fetchHomeData]);

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
        startTransition(() => {
          if (res.status !== 401) {
            setProfileInformation(res.data.items);
          }
        });
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
          direction: rtlLang === 1 ? "rtl" : "ltr",
          fontFamily: rtlLang === 1 ? "Cairo" : "Verdana",
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
                isPending={isPending}
                rtlLang={rtlLang}
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
                profileInformation={profileInformation}
                rtlLang={rtlLang}
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
                rtlLang={rtlLang}
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
                rtlLang={rtlLang}
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
                rtlLang={rtlLang}
              />
            }
          />
          <Route
            path="/forget-password"
            element={
              <ForgetPassword
                language={language}
                settingsData={settingsData}
                rtlLang={rtlLang}
              />
            }
          />

          <Route
            path="/reset-password/:token/:emailRequest"
            element={
              <ResetPassword
                settingsData={settingsData}
                language={language}
                rtlLang={rtlLang}
              />
            }
          />

          <Route
            path="/change-password"
            element={
              <ChangePassword
                settingsData={settingsData}
                language={language}
                rtlLang={rtlLang}
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
                rtlLang={rtlLang}
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
                rtlLang={rtlLang}
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

          <Route
            path="/news"
            element={
              <NewsDetails
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
