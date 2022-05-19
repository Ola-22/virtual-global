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

  const [setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  // const logOut = () => {
  //   authService.logout();
  // };

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
            element={<Forum settingsData={settingsData} />}
          />

          <Route
            path="/discussion/:id"
            element={<Details settingsData={settingsData} />}
          />
          <Route path="/ml" element={<ML />} />
          <Route
            path="/profile"
            element={<Profile settingsData={settingsData} />}
          />
          <Route
            path="/who-we-are"
            element={<About settingsData={settingsData} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
