import Comments from "../../Components/Comments";
import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";
import * as S from "./style";
import { useState } from "react";
import CardTabs from "../../Components/CardTabs";
import LikeTopic from "../../Components/LikeTopic";
import IDCard from "../../Components/IDCard";
import { Modal } from "../../Components/Modal";

function Profile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showForm, setShowForm] = useState(false);

  const closeModalTerms = () => setShowForm(false);

  const [file, setFile] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );

  function handleChange(e) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setFile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  return (
    <div style={{ width: "100%" }}>
      <Nav />
      <S.ProfileContainer>
        <div className="profile-main">
          <div className="box">
            <div className="virtual-id">
              <h3>virtual national id card</h3>
              <IDCard />
            </div>
            <div className="profile-information">
              <>
                <S.profileInformation>
                  <h2>profile information's</h2>
                  <img
                    className="edit"
                    src="/images/edit.png"
                    alt="edit your profile"
                    onClick={() => setShowForm(true)}
                  />
                </S.profileInformation>
              </>

              {showForm ? (
                <div onClick={closeModalTerms} className="back-drop"></div>
              ) : null}

              <Modal
                content={
                  <>
                    <div className="edit-profile">
                      <p>Edit Profile</p>
                      <span onClick={closeModalTerms}>
                        <img src="/images/close.png" alt="close the Modal" />
                      </span>
                    </div>
                    <div>
                      <img className="user-img" src={file} alt="user img" />

                      <input
                        type="file"
                        accept="image/*"
                        name="image-upload"
                        id="input"
                        onChange={handleChange}
                      />
                      <div className="label">
                        <label className="image-upload" htmlFor="input">
                          change picture
                        </label>
                      </div>
                    </div>

                    <div className="modal-body">
                      <div>
                        <label>Username</label>
                        <input type="text" defaultValue="ff" />
                      </div>
                      <div>
                        <label>Email</label>
                        <input type="text" defaultValue="ff" />
                      </div>

                      <div>
                        <label>password</label>
                        <input type="text" defaultValue="ff" />
                      </div>
                      <div>
                        <label>Conirm Password</label>
                        <input type="text" defaultValue="ff" />
                      </div>
                      <button>Update</button>
                    </div>
                  </>
                }
                show={showForm}
                close={closeModalTerms}
              />

              <S.imgUser src={file} alt="user img" />
              <S.profileInformation className="box-profile">
                <label>email</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex.fordam@gmail.com"
                />
              </S.profileInformation>
              <S.profileInformation className="box-profile">
                <label>password</label>
                <input
                  type="password"
                  placeholder="*****"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </S.profileInformation>

              <S.profileInformation>
                <button>change password</button>
              </S.profileInformation>
            </div>
            <S.lastActivity>
              <h2>last activities</h2>
              <LikeTopic
                date="June 18, 2020"
                paragraph="In light of the current situation of wars and human tragedies in the World and the absence of a promising horizon where "
                name="Alex Fordman"
                time="30 min"
                comment="In light of the current situation of wars and human tragedies in the World and the absence of a promising horizon where real peace and constructive cooperation between people prevails, this proposal urges us to think outside the box, looking for creative solutions to try to "
              />
            </S.lastActivity>
          </div>
        </div>
        <Footer />
      </S.ProfileContainer>
    </div>
  );
}

export default Profile;
