import * as S from "./style";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";

function Login() {
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
          <input type="email" />
          <label>Password</label>
          <input type="password" />
          <div className="forget-pass">Forget Password</div>
          <S.FooterLogin>
            <Button title="Login" />

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
