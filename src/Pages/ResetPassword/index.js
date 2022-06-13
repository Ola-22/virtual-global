import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Button";
import * as S from "./style";

import axiosInstance from "../../helpers/axios";

function ResetPassword({ settingsData, language }) {
  const [password, setPassword] = useState();
  const [password_confirmation, setPasswordConfirmation] = useState();

  const token = useParams();
  const navigate = useNavigate();

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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <S.ForgetContainer>
      <div className="header">
        <div onClick={() => navigate(-1)}>
          <img
            style={{
              transform:
                localStorage.getItem("language") === "ar"
                  ? "rotate(180deg)"
                  : "",
            }}
            src="/images/Back.png"
            alt="back pages"
          />
        </div>
      </div>
      <div className="main-box">
        <div className="box">
          <h1>{settingsData?.items?.translation?.title_reset_pass}</h1>
          <p>{settingsData?.items?.translation?.paragraph_change_pass}</p>
          <S.InputBox>
            <label>{settingsData?.items?.translation?.new_password}</label>
            <input
              type="password"
              value={password ?? ""}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={settingsData?.items?.translation?.placeholder_pages}
            />
          </S.InputBox>

          <S.InputBox>
            <label>{settingsData?.items?.translation?.confirm_password}</label>
            <input
              type="password"
              value={password_confirmation ?? ""}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </S.InputBox>
          {!loading && (
            <Button
              onClick={(e) => {
                e.preventDefault();
                sendResetPassword();
                handleClick();
              }}
              title={settingsData?.items?.translation?.btn_send}
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
              title={settingsData?.items?.translation?.btn_send}
              spinner
            />
          )}
        </div>
      </div>
    </S.ForgetContainer>
  );
}

export default ResetPassword;
