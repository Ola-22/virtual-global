import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import axiosInstance from "../../helpers/axios";
import * as S from "./style";

function ForgetPassword({ settingsData }) {
  const [email, setEmail] = useState();
  const [forgetData, setForgetData] = useState();

  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

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
        setForgetData(res.data);
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
          <h1>forget password</h1>
          <p>
            Please enter your registered email to receive forget password link
          </p>
          <S.InputBox>
            <label>Email</label>
            <input
              type="email"
              value={email ?? ""}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h3 className="error"> {forgetData?.message}</h3>
          </S.InputBox>

          {!loading && (
            <Button
              onClick={(e) => {
                e.preventDefault();
                sendRequestPassword();
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
                sendRequestPassword();
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

export default ForgetPassword;
