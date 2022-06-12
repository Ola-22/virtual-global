import * as S from "./style";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import { useState } from "react";
import authService from "../Register/Auth";

function Login({ settingsData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    // e.preventDefault();
    try {
      await authService.SignIn(email, password).then(
        (response) => {
          if (response.status === true) {
            navigate("/");
            window.location.reload();
          }

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

  console.log(error);

  return (
    <S.loginContainer>
      <div>
        <img src="/images/FlagLogo.png" alt="logo of the VGS" />
        <h6>{settingsData?.items?.translation?.welcome_to}</h6>
        <h2>{settingsData?.items?.translation?.virtual_global_login}</h2>
        <p>{settingsData?.items?.translation?.join_login}</p>
      </div>
      <div className="right-login">
        <Link to="/" style={{ alignSelf: "flex-start" }}>
          <img src="/images/Back.png" alt="back to the home page" />
        </Link>
        <S.LoginBox>
          <h2>{settingsData?.items?.translation?.login}</h2>
          <h6>{settingsData?.items?.translation?.Login_with_data}</h6>

          <label>{settingsData?.items?.translation?.email}</label>
          <input
            type="email"
            value={email ?? ""}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={settingsData?.items?.translation?.placeholder_pages}
          />
          <label>{settingsData?.items?.translation?.password}</label>
          <input
            type="password"
            value={password ?? ""}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={settingsData?.items?.translation?.placeholder_pages}
          />

          <div className="forget-pass">
            <Link to="/forget-password">
              {settingsData?.items?.translation?.title_forget_pass}
            </Link>
          </div>
          <div className="error"> {error}</div>
          <S.FooterLogin>
            <Button title="Login" onClick={() => handleSignIn()} />
            <S.citizenshipBox>
              {settingsData?.items?.translation?.dont_have_citizenship} {""}
              <Link to="/register">
                {settingsData?.items?.translation?.create_acount}
              </Link>
            </S.citizenshipBox>
          </S.FooterLogin>
        </S.LoginBox>
      </div>
    </S.loginContainer>
  );
}

export default Login;
