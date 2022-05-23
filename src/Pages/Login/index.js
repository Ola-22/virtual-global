import * as S from "./style";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import { useState } from "react";
import authService from "../Register/Auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    // e.preventDefault();
    try {
      await authService.SignIn(email, password).then(
        (response) => {
          // console.log(response);

          if (response.status === true) {
            // console.log("Sign in successfully", response.items.token);
            navigate("/");
          }

          if (response.status === false) {
            // console.log("Sign in unsuccessfully", response.message);
            // navigate("/");
          }
        },
        (error) => {
          // console.log("Er,", error);
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
        <img src="/images/logo.png" alt="logo of the VGS" />
        <h6>welcome to</h6>
        <h2>Virtual Global State</h2>
        <p>
          join the Virtual Global, register now and get it's virtual citizenship
          !
        </p>
      </div>
      <div className="right-login">
        <Link to="/" style={{ alignSelf: "flex-start" }}>
          <img src="/images/Back.png" alt="back to the home page" />
        </Link>
        <S.LoginBox>
          <h2>Login</h2>
          <h6>Login with your data</h6>

          <label>Email</label>
          <input
            type="email"
            value={email ?? ""}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password ?? ""}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="forget-pass">
            <Link to="/forget-password">Forget Password </Link>
          </div>
          <div className="error"> {error}</div>
          <S.FooterLogin>
            <Button title="Login" onClick={() => handleSignIn()} />
            {/* {error && <div>{error?.message}</div>} */}
            <div>
              You don't have a citizenship ?<Link to="/register">Create</Link>
            </div>
          </S.FooterLogin>
        </S.LoginBox>
      </div>
    </S.loginContainer>
  );
}

export default Login;
