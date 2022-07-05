import * as S from "./style";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import { useState } from "react";
import authService from "../Register/Auth";

function Login({ settingsData, fetchData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [dataLogin, setDataLogin] = useState();
  const handleSignIn = async (e) => {
    try {
      await authService.SignIn(email, password).then(
        (response) => {
          if (response.status === true) {
            navigate("/");
            fetchData();
          }
          setDataLogin(response);

          if (response.status === false) {
            // navigate("/");
          }
        },
        (error) => {
          setError(error.response.data?.message);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.loginContainer>
      <div>
        <img src="./images/FlagLogo.png" alt="logo of the VGS" />
        <h6>{settingsData?.items?.translation?.welcome_to}</h6>
        <h2>{settingsData?.items?.translation?.virtual_global_login}</h2>
        <p>{settingsData?.items?.translation?.join_login}</p>
      </div>
      <div className="right-login">
        <Link to="/" style={{ alignSelf: "flex-start" }}>
          <img src="./images/Back.png" alt="back to the home page" />
        </Link>
        <S.LoginBox>
          <h2>{settingsData?.items?.translation?.login}</h2>
          <h6>{settingsData?.items?.translation?.Login_with_data}</h6>
          <form onSubmit={handleSignIn}>
            <label>{settingsData?.items?.translation?.email}</label>
            <input
              type="email"
              value={email ?? ""}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={settingsData?.items?.translation?.placeholder_pages}
            />

            {dataLogin?.status === false &&
              dataLogin?.items?.map(
                (err, index) =>
                  err?.field_name === "email" && (
                    <h3 className="error" key={index}>
                      {err.message}
                    </h3>
                  )
              )}
            <label>{settingsData?.items?.translation?.password}</label>
            <input
              type="password"
              value={password ?? ""}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={settingsData?.items?.translation?.placeholder_pages}
            />

            {dataLogin?.status === false &&
              dataLogin?.items?.map(
                (err, index) =>
                  err?.field_name === "password" && (
                    <h3 className="error" key={index}>
                      {err.message}
                    </h3>
                  )
              )}

            <div className="forget-pass">
              <Link to="/forget-password">
                {settingsData?.items?.translation?.title_forget_pass}
              </Link>
            </div>
            <div className="error"> {error}</div>
            <S.FooterLogin>
              <Button
                title="Login"
                onClick={(e) => {
                  e.preventDefault();
                  handleSignIn();
                }}
              />
              <S.citizenshipBox>
                {settingsData?.items?.translation?.dont_have_citizenship} {""}
                <Link to="/register">
                  {settingsData?.items?.translation?.create_acount}
                </Link>
              </S.citizenshipBox>
            </S.FooterLogin>
          </form>
        </S.LoginBox>
      </div>
    </S.loginContainer>
  );
}

export default Login;
