import * as S from "./style";
import Social from "../Social";

function Footer() {
  return (
    <>
      <S.FooterContainer>
        <div className="top-footer">
          <div>
            <h6>About</h6>
            <p>
              In light of the current situation of wars and human tragedies in
              the World and the absence of a promising horizon where real peace
              and constructive cooperation between people prevails, this
              proposal urges us to think outside the box, looking for creative
              solutions to try to change this reality. The World is made up of
              many nations and entities that differ in interests and goals.
            </p>
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
              <li>1800 890 1413, +91 82096 44311</li>
            </div>
            <div className="contact-box">
              <div>
                <img src="/images/phone.png" alt="contact us with phone" />
                <li>Email</li>
              </div>
              <li>info@verland.com</li>
            </div>
          </div>
        </div>
        <S.FooterSocial>
          <div>
            <input type="email" placeholder="Email" />
            <img src="/images/send.png" alt="send email" />
          </div>
          <Social />
        </S.FooterSocial>
        <S.copyRight className="copyRight">
          Copyright © 2020 Verland All Rights Reserved
        </S.copyRight>
      </S.FooterContainer>
    </>
  );
}

export default Footer;
