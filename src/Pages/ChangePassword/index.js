import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import axiosInstance from "../../helpers/axios";
import * as S from "./style";

function ChangePassword({ settingsData, language }) {
  const [currentPassword, setCurrentPassword] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setCofirmPassword] = useState();

  const [changetData, setChangeData] = useState();

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleClick() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  async function sendChangePassword() {
    const data = {
      current_password: currentPassword,
      password: password,
      password_confirmation: confirmPassword,
    };
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: localStorage.getItem("language"),
      },
    };
    await axiosInstance
      .post(`/api/user/profile/update-password`, data, config)
      .then((res) => {
        setChangeData(res.data);
        if (res.data.status === true) {
          navigate("/profile");
        }

        // console.log(res);
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
          <h1>{settingsData?.items?.translation?.btn_change_pass}</h1>
          <p>{settingsData?.items?.translation?.paragraph_change_pass}</p>
          <S.InputBox>
            <label>{settingsData?.items?.translation?.current_password}</label>
            <input
              type="password"
              value={currentPassword ?? ""}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder={settingsData?.items?.translation?.placeholder_pages}
            />

            {changetData?.status === false
              ? changetData?.items?.map(
                  (err, index) =>
                    err?.field_name === "current_password" && (
                      <h3 className="error" key={index}>
                        {err.message}
                      </h3>
                    )
                )
              : ""}
          </S.InputBox>

          <S.InputBox>
            <label>{settingsData?.items?.translation?.password}</label>
            <input
              type="password"
              value={password ?? ""}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={settingsData?.items?.translation?.placeholder_pages}
            />
          </S.InputBox>

          <S.InputBox>
            <label>{settingsData?.items?.translation?.Confirm_Password}</label>
            <input
              type="password"
              value={confirmPassword ?? ""}
              onChange={(e) => setCofirmPassword(e.target.value)}
              placeholder={settingsData?.items?.translation?.placeholder_pages}
            />
            {changetData?.status === false
              ? changetData?.items?.map(
                  (err, index) =>
                    err?.field_name === "password" && (
                      <h3 className="error" key={index}>
                        {err.message}
                      </h3>
                    )
                )
              : ""}
          </S.InputBox>

          {!loading && (
            <Button
              onClick={(e) => {
                e.preventDefault();
                sendChangePassword();
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
                sendChangePassword();
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

export default ChangePassword;
