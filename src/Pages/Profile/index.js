import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";
import * as S from "./style";
import { useState, useEffect } from "react";
import LikeTopic from "../../Components/LikeTopic";
import IDCard from "../../Components/IDCard";
import axiosInstance from "../../helpers/axios";
import Tab from "../../Components/Tabs/Tab";
import TabNav from "../../Components/Tabs/TabNav";
import { useNavigate } from "react-router-dom";

function Profile({ settingsData, profileInformation }) {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const closeModalTerms = () => setShowForm(false);

  const [lastActivity, setLastActivity] = useState();
  const [selected, setSelected] = useState("Like Discussions");

  const SelectTab = (tab) => {
    setSelected(tab);
  };

  useEffect(() => {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: "en",
      },
    };

    axiosInstance
      .get(
        `/api/user/discussions/last-activities`,

        config
      )
      .then((res) => {
        console.log("laseActive", res);
        setLastActivity(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="profile-main" style={{ width: "100%" }}>
      <Nav settingsData={settingsData} />
      <S.ProfileContainer>
        <div className="profile-main">
          <div className="box">
            <div className="virtual-id">
              <h3>virtual national id card</h3>
              <IDCard
                src={profileInformation?.user?.image}
                fname={profileInformation?.user?.first_name}
                lname={profileInformation?.user?.last_name}
                gender={profileInformation?.user?.gender}
                national={profileInformation?.user?.country_birth_id}
                country={profileInformation?.user?.country_birth_id}
                date={profileInformation?.user?.dob}
              />
            </div>
            <div className="profile-information">
              <>
                <S.profileInformation>
                  <h2>profile information's</h2>
                  <img
                    className="edit"
                    src="/images/edit.png"
                    alt="edit your profile"
                    onClick={() => navigate("/edit-profile")}
                  />
                </S.profileInformation>
              </>

              {showForm ? (
                <div onClick={closeModalTerms} className="back-drop"></div>
              ) : null}

              <S.profileInformation className="box-profile">
                <S.imgUser
                  className="profile-img"
                  src={profileInformation?.user?.image}
                  alt="user img"
                />
                <label>email</label>
                <h4>{profileInformation?.user?.email}</h4>
              </S.profileInformation>
              <S.profileInformation className="box-profile">
                <label>password</label>
                <h4>*****</h4>
              </S.profileInformation>

              <S.profileInformation>
                <button>change password</button>
              </S.profileInformation>
            </div>
          </div>
          <S.lastActivity>
            <h2>last activities</h2>

            <TabNav
              tabs={["Like Discussions", "Comment Discussions"]}
              selected={selected}
              SelectTab={SelectTab}
            >
              <>
                <Tab isSelected={selected === "Like Discussions"}>
                  {lastActivity?.last_likes_discussions?.map((activity) => (
                    <LikeTopic
                      date={activity?.created_at}
                      paragraph={activity?.text}
                      name="Alex Fordman"
                      time="30 min"
                      // comment={activity.discussion.text}
                    />
                  ))}
                </Tab>

                <Tab isSelected={selected === "Comment Discussions"}>
                  {lastActivity?.last_comments_discussions?.map((activity) => (
                    <LikeTopic
                      date={activity?.created_at}
                      paragraph={activity?.comment}
                      name="Alex Fordman"
                      time="30 min"
                      comment={activity.discussion.text}
                    />
                  ))}
                </Tab>
              </>
            </TabNav>
          </S.lastActivity>
        </div>
        <Footer settingsData={settingsData} />
      </S.ProfileContainer>
    </div>
  );
}

export default Profile;
