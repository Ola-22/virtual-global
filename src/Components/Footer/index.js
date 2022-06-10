import * as S from "./style";
import Social from "../Social";
import axiosInstance from "../../helpers/axios";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer({ settingsData, language }) {
  const [email, setEmail] = useState("");
  const [mailingData, setMailingData] = useState("");

  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  async function sendData() {
    const data = {
      email: email,
    };
    const config = {
      headers: {
        Accept: "application/json",
        lang: localStorage.getItem("language"),
      },
    };
    await axiosInstance
      .post("/api/web-site/subscribe-mailing-list", data, config)
      .then((res) => {
        setMailingData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <S.FooterContainer>
        <div className="top-footer">
          <S.AboutContainer>
            <h6>{settingsData?.items?.translation?.about_footer}</h6>
            <div className="box-logo">
              <div>
                <img src="/images/logo-footer.png" alt="logo" />
                <div className="vgs">
                  <h2>THE VIRTUAL GLOBAL STATE (VGS)</h2>
                  <p>A Virtual Entity Parallel to The Real-World</p>
                </div>
              </div>
              <p>{settingsData?.items?.describe}</p>
            </div>
          </S.AboutContainer>

          <S.AccessContainer>
            <h6>{settingsData?.items?.translation?.quick_access_footer}</h6>
            <div className="box">
              <div>
                <Link to="/register">
                  <li>{settingsData?.items?.translation?.link_join}</li>
                </Link>
                <Link to="/who-we-are">
                  <li>{settingsData?.items?.translation?.link_about}</li>
                </Link>
                <Link to="/q&a">
                  <li>{settingsData?.items?.translation?.link_faqs}</li>
                </Link>
                <Link to="/about-vgs">
                  <li>{settingsData?.items?.translation?.link_vgs}</li>
                </Link>
                <Link to="/gts">
                  <li>{settingsData?.items?.translation?.link_gts}</li>
                </Link>
              </div>
              <div>
                <Link to="/wtm">
                  <li>{settingsData?.items?.translation?.link_wtm}</li>
                </Link>
                <Link to="/vission-giv">
                  <li>{settingsData?.items?.translation?.link_giv}</li>
                </Link>
                <Link to="/ml">
                  <li>{settingsData?.items?.translation?.link_ml}</li>
                </Link>
                <Link to="/mo">
                  <li>{settingsData?.items?.translation?.link_mo}</li>
                </Link>
              </div>
            </div>
          </S.AccessContainer>

          <div>
            <h6>{settingsData?.items?.translation?.contact_us_footer}</h6>
            {/* 
            <div className="contact-box">
              <div>
                <img src="/images/phone.png" alt="contact us with phone" />
                <li>{settingsData?.items?.translation?.phone}</li>
              </div>
              <li>
                {settingsData?.items?.contact_information?.phone},
                {settingsData?.items?.contact_information?.mobile}
              </li>
            </div> */}
            <div className="contact-box">
              <div>
                <img src="/images/phone.png" alt="contact us with phone" />
                <li>{settingsData?.items?.translation?.email}</li>
              </div>
              <li>{settingsData?.items?.contact_information?.email}</li>
            </div>
          </div>
        </div>
        <S.FooterSocial>
          <S.containerMail>
            <div>
              <input
                type="email"
                value={email ?? ""}
                placeholder={settingsData?.items?.translation?.email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {!loading && (
                <S.boxMail
                  onClick={(e) => {
                    e.preventDefault();
                    sendData();
                    handleClick();
                  }}
                >
                  <img src="/images/send.png" alt="send email" />
                </S.boxMail>
              )}

              {loading && (
                <S.boxMail
                  className="disabled"
                  onClick={(e) => {
                    e.preventDefault();
                    sendData();
                    handleClick();
                  }}
                >
                  <img src="/images/send.png" alt="send email" />
                  <FaSpinner icon="spinner" />
                </S.boxMail>
              )}
            </div>

            <h3>{mailingData?.message}</h3>
          </S.containerMail>
          <Social settingsData={settingsData} />
        </S.FooterSocial>
        <S.copyRight className="copyRight">
          {settingsData?.items?.copyright}
        </S.copyRight>
      </S.FooterContainer>
    </>
  );
}

export default Footer;
