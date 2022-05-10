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

function App() {
  const [settingsData, setSettingsData] = useState();

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/settings")
      .then((res) => {
        setSettingsData(res.data);
        console.log("settings", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/api/web-site/home-page")
      .then((res) => {
        // setSettingsData(res.data);
        console.log("home", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home settingsData={settingsData} />} />
          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/forum/1" element={<Details />} />
          <Route path="/ml" element={<ML />} />
          <Route
            path="/profile"
            element={<Profile settingsData={settingsData} />}
          />
          <Route path="/who-we-are" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
