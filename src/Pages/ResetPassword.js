import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../Components/Nav";
import axiosInstance from "../helpers/axios";

function ResetPassword({ settingsData }) {
  const [password, setPassword] = useState();
  const [password_confirmation, setPasswordConfirmation] = useState();

  const token = useParams();

  async function sendResetPassword() {
    const data = {
      email: token.emailRequest,
      password: password,
      password_confirmation: password_confirmation,
      token: token.token,
    };
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    await axiosInstance
      .post(
        `/api/reset-password/:${token.token}/${token.emailRequest}`,
        data,
        config
      )
      .then((res) => {
        console.log("forget", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    sendResetPassword();
  });
  return (
    <div>
      <Nav settingsData={settingsData} />
      <input
        type="password"
        value={password ?? ""}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="password"
        value={password_confirmation ?? ""}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
    </div>
  );
}

export default ResetPassword;
