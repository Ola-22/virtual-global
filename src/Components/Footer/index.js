import * as S from "./style";
import Social from "../Social";
import axiosInstance from "../../helpers/axios";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

function Footer({ settingsData }) {
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
        lang: "en",
      },
    };
    await axiosInstance
      .post("/api/web-site/subscribe-mailing-list", data, config)
      .then((res) => {
        // console.log("mailing", res.data);
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
          <div>
            <h6>About</h6>
            <p>{settingsData?.items?.describe}</p>
          </div>

          <div>
            <h6>Quick Access</h6>
            <div className="box">
              <div>
                <li>Join Us</li>
                <li>Who We Are</li>
                <li>Q&A</li>
                <li>About VGS</li>
                <li>GTS</li>
              </div>
              <div>
                <li>WTM</li>
                <li>GIV</li>
                <li>ML</li>
                <li>MO</li>
              </div>
            </div>
          </div>

          <div>
            <h6>Contact Us</h6>
            <div className="contact-box">
              <div>
                <img src="/images/phone.png" alt="contact us with phone" />
                <li>phone</li>
              </div>
              <li>
                {settingsData?.items?.contact_information?.phone},
                {settingsData?.items?.contact_information?.mobile}
              </li>
            </div>
            <div className="contact-box">
              <div>
                <img src="/images/phone.png" alt="contact us with phone" />
                <li>Email</li>
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
                placeholder="Email"
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
          Copyright © 2020 Verland All Rights Reserved
        </S.copyRight>
      </S.FooterContainer>
    </>
  );
}

export default Footer;
