import { useEffect, useState } from "react";
import authService from "../../Pages/Register/Auth";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import Menu from "./Munu";
import { Modal } from "../Modal";

function Header({ settingsData, profileInformation }) {
  const [currentUser, setCurrentUser] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    authService.logout();
    localStorage.removeItem("user");
    // navigate("/");
  };

  const closeModalTerms = () => setShowTerms(false);
  const [showTerms, setShowTerms] = useState(false);
  const [val, setVal] = useState(null);

  useEffect(() => {
    if (val === "yes") {
      navigate("/login");
      localStorage.removeItem("user");
    }

    if (val === "no") {
      navigate("/");
      setShowTerms(false);
    }
  }, [navigate, val]);

  return (
    <S.HeaderContainer>
      <div className="container-box">
        <Menu settingsData={settingsData} />
        <div className="rightNav">
          {currentUser && (
            <>
              <S.profileInformation>
                <Link to="/profile">
                  <img src={profileInformation?.user.image} alt="" />
                </Link>
                <div>
                  <p>{settingsData?.items?.translation?.special_welcome}</p>
                  <h6>{profileInformation?.user.first_name}</h6>
                </div>
              </S.profileInformation>

              <Link to="/discussion" className="forum">
                <img
                  src="/images/forum.png"
                  alt="form button"
                  width="15"
                  height="15"
                />
                {settingsData?.items?.translation?.forum_btn}
              </Link>
            </>
          )}

          {currentUser ? (
            <Link to="/" onClick={() => setShowTerms(true)} className="logout">
              {settingsData?.items?.translation?.log_out}
            </Link>
          ) : (
            <Link to="/register">Register</Link>
          )}

          {showTerms ? (
            <div onClick={closeModalTerms} className="back-drop"></div>
          ) : null}

          <Modal
            content={
              <>
                <div className="modal-header">
                  <span onClick={closeModalTerms} className="close-modal-btn">
                    <img src="/images/close.png" alt="close the Modal" />
                  </span>
                </div>

                <div className="modal-body">
                  <h1>
                    {settingsData?.items?.translation?.are_you_sure_to_log_out}
                  </h1>
                  <S.ContainerBtn>
                    <button
                      className={val === "yes" ? "activeBtn" : ""}
                      onClick={() => {
                        setVal("yes");
                        logOut();
                        navigate("/login");
                      }}
                    >
                      {settingsData?.items?.translation?.btn_yes}
                    </button>
                    <button
                      className={val === "no" ? "activeBtn" : ""}
                      onClick={() => {
                        setVal("no");
                        navigate("/");
                        setShowTerms(false);
                      }}
                    >
                      {settingsData?.items?.translation?.btn_no}
                    </button>
                  </S.ContainerBtn>
                </div>
              </>
            }
            show={showTerms}
            close={closeModalTerms}
          />
          {!currentUser && (
            <Link className="login" to="/login">
              {settingsData?.items?.translation?.login}
            </Link>
          )}
        </div>{" "}
      </div>
    </S.HeaderContainer>
  );
}

export default Header;
