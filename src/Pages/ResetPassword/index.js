import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../../Components/Button";
import * as S from "./style";

import axiosInstance from "../../helpers/axios";

function ResetPassword({ settingsData }) {
  const [password, setPassword] = useState();
  const [password_confirmation, setPasswordConfirmation] = useState();

  const token = useParams();

  const [ResetData, setResetData] = useState();

  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

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
        `/api/reset-password/${token.token}/${token.emailRequest}`,
        data,

        config
      )
      .then((res) => {
        // console.log("reset", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <S.ForgetContainer>
      <div className="header">
        <Link to="/">
          <img src="/images/Back.png" alt="back pages" />
        </Link>
      </div>
      <div className="main-box">
        <div className="box">
          <h1>reset password</h1>
          <p>Please enter your new password</p>
          <S.InputBox>
            <label>new password</label>
            <input
              type="password"
              value={password ?? ""}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* <h3 className="error"> {ResetData?.message}</h3> */}
          </S.InputBox>

          <S.InputBox>
            <label>confirm new password</label>
            <input
              type="password"
              value={password_confirmation ?? ""}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />

            {/* <h3 className="error"> {ResetData?.message}</h3> */}
          </S.InputBox>
          {!loading && (
            <Button
              onClick={(e) => {
                e.preventDefault();
                sendResetPassword();
                handleClick();
              }}
              title="Send"
            />
          )}

          {loading && (
            <Button
              className="disabled"
              onClick={(e) => {
                e.preventDefault();
                sendResetPassword();
                handleClick();
              }}
              title="Send"
              spinner
            />
          )}
        </div>
      </div>
    </S.ForgetContainer>
  );
}

export default ResetPassword;
