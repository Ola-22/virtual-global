import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFontAwesome,
  faInstagram,
  faLinkedin,
  faFacebookF,
  faGoogle,
  faSkype,
  faYoutube,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  fas,
  faTwitter,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGoogle,
  faSkype,
  faYoutube,
  faFacebookMessenger,
  faFontAwesome
);

export default function Social({ settingsData }) {
  // console.log(settingsData);

  return (
    <S.SocialContainer className="social">
      {settingsData?.items?.social_media?.map((icons, index) => (
        <a href={icons.link} key={index}>
          {icons.icon === "fa-facebook" ? (
            <FontAwesomeIcon
              className={icons.class}
              icon={`fa-brands ${icons.icon}-f`}
            />
          ) : (
            <FontAwesomeIcon
              className={icons.class}
              icon={`fa-brands ${icons.icon}`}
            />
          )}
        </a>
      ))}
    </S.SocialContainer>
  );
}
