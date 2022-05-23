import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Button from "../../Components/Button";
import axiosInstance from "../../helpers/axios";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

function ChangePassword({ settingsData }) {
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
        lang: "en",
      },
    };
    await axiosInstance
      .post(`/api/user/profile/update-password`, data, config)
      .then((res) => {
        console.log("change", res);
        setChangeData(res.data);
        if (res.data.status === true) {
          navigate("/profile");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // useEffect(() => {
  //   sendRequestPassword();
  // });
  return (
    <S.ForgetContainer>
      <div className="header">
        <Link to="/">
          <img src="/images/Back.png" alt="back pages" />
        </Link>
      </div>
      <div className="main-box">
        <div className="box">
          <h1>change password</h1>
          <p>Please enter your new password</p>
          <S.InputBox>
            <label>current password</label>
            <input
              type="password"
              value={currentPassword ?? ""}
              onChange={(e) => setCurrentPassword(e.target.value)}
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
            <label>password</label>
            <input
              type="password"
              value={password ?? ""}
              onChange={(e) => setPassword(e.target.value)}
            />
          </S.InputBox>

          <S.InputBox>
            <label>confirm password</label>
            <input
              type="password"
              value={confirmPassword ?? ""}
              onChange={(e) => setCofirmPassword(e.target.value)}
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
