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
import authService from "./Pages/Register/Auth";
import EditProfile from "./Pages/EditProfile";
import ForgetPassword from "./Pages/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword";
import ChangePassword from "./Pages/ChangePassword";

function App() {
  const [settingsData, setSettingsData] = useState();
  const [homeData, setHomeData] = useState();

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/settings")
      .then((res) => {
        setSettingsData(res.data);
        // console.log("settings", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/home-page", {
        headers: {
          lang: "en",
        },
      })
      .then((res) => {
        setHomeData(res.data);
        // console.log("home", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const [currentUser, setCurrentUser] = useState(undefined);

  // useEffect(() => {
  //   const user = authService.getCurrentUser();

  //   if (user) {
  //     setCurrentUser(user);
  //   }
  // }, []);

  // const logOut = () => {
  //   authService.logout();
  // };

  const [profileInformation, setProfileInformation] = useState();
  useEffect(() => {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: "en",
      },
    };

    axiosInstance
      .get(
        `/api/user/profile/edit`,

        config
      )
      .then((res) => {
        // console.log("profile", res);
        setProfileInformation(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Home settingsData={settingsData} homeData={homeData} />}
          />
          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />
          <Route
            path="/discussion/"
            element={
              <Forum
                profileInformation={profileInformation}
                settingsData={settingsData}
              />
            }
          />

          <Route
            path="/discussion/:id"
            element={
              <Details
                settingsData={settingsData}
                profileInformation={profileInformation}
              />
            }
          />
          <Route path="/ml" element={<ML />} />
          <Route
            path="/profile"
            element={
              <Profile
                profileInformation={profileInformation}
                settingsData={settingsData}
              />
            }
          />
          <Route
            path="/who-we-are"
            element={<About settingsData={settingsData} />}
          />

          <Route
            path="/edit-profile"
            element={<EditProfile settingsData={settingsData} />}
          />
          <Route
            path="/forget-password"
            element={<ForgetPassword settingsData={settingsData} />}
          />

          <Route
            path="/reset-password/:token/:emailRequest"
            element={<ResetPassword />}
          />

          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
