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
import axios from "axios";

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

  async function sendData() {
    const data = {
      email: "a.alghazali44@hotmailc.om",
    };
    const config = {
      headers: {
        Accept: "application/json",
        lang: "en",
      },
    };
    await axiosInstance
      .post("/api/web-site/subscribe-mailing-list", data, config)
      .then((res) => {
        // console.log("mailing", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    sendData();
  }, []);

  // useEffect(() => {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { Accept: "application/json", lang: "en" },
  //     body: JSON.stringify({ email: "a.alghazali8@hotmailc.om" }),
  //   };
  //   fetch(
  //     "https://virtualnational.nstechs-dev.com/api/web-site/subscribe-mailing-list",
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // });

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
            path="/forum"
            element={<Forum settingsData={settingsData} />}
          />
          <Route path="/forum/1" element={<Details />} />
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
