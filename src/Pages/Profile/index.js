import Comments from "../../Components/Comments";
import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";
import * as S from "./style";
import { useState } from "react";
import CardTabs from "../../Components/CardTabs";
import LikeTopic from "../../Components/LikeTopic";

function Profile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ width: "100%" }}>
      <Nav />
      <S.ProfileContainer>
        <div className="profile-main">
          <div className="box">
            <div>
              <h3>virtual national id card</h3>
              <img
                src="/images/virtual-id.png"
                alt="virtual national id card"
              />
            </div>
            <div>
              <>
                <h2>profile information's</h2>
                <img
                  className="edit"
                  src="/images/edit.png"
                  alt="edit your profile"
                />
              </>

              <input type="file" />
              <label>email</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex.fordam@gmail.com"
              />
              <label>password</label>
              <input
                type="password"
                placeholder="*****"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button>change password</button>
            </div>
          </div>
          <h2>last activities</h2>
          <LikeTopic
            date="June 18, 2020"
            paragraph="In light of the current situation of wars and human tragedies in the World and the absence of a promising horizon where "
            name="Alex Fordman"
            time="30 min"
            comment="In light of the current situation of wars and human tragedies in the World and the absence of a promising horizon where real peace and constructive cooperation between people prevails, this proposal urges us to think outside the box, looking for creative solutions to try to "
          />
        </div>
        <Footer />
      </S.ProfileContainer>
    </div>
  );
}

export default Profile;
