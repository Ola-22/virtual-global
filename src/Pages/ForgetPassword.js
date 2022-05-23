import { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import axiosInstance from "../helpers/axios";

function ForgetPassword({ settingsData }) {
  const [email, setEmail] = useState();
  async function sendRequestPassword() {
    const data = {
      email: email,
    };
    const config = {
      headers: {
        Accept: "application/json",
        lang: "en",
      },
    };
    await axiosInstance
      .post(`/api/forget-password`, data, config)
      .then((res) => {
        console.log("forget", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    sendRequestPassword();
  }, []);
  return (
    <div>
      <Nav settingsData={settingsData} />
      <input
        type="text"
        value={email ?? ""}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}

export default ForgetPassword;
