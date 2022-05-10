import * as S from "./style";
import Social from "../Social";

function Footer({ settingsData }) {
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
          <div>
            <input type="email" placeholder="Email" />
            <img src="/images/send.png" alt="send email" />
          </div>
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
