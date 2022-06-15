import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";
import * as S from "./style";
import { useState, useEffect, createRef } from "react";
import LikeTopic from "../../Components/LikeTopic";
import IDCard from "../../Components/IDCard";
import axiosInstance from "../../helpers/axios";
import Tab from "../../Components/Tabs/Tab";
import TabNav from "../../Components/Tabs/TabNav";
import { Link, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Profile({ settingsData, profileInformation, handleSetLanguage }) {
  const componentRef = createRef();

  const exportPdf = () => {
    const input = document.getElementById("Canvas");
    html2canvas(input, {
      logging: true,
      letterRendering: 1,
      useCORS: true,
    }).then((canvas) => {
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("card.pdf");
    });
  };
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const closeModalTerms = () => setShowForm(false);

  const [lastActivity, setLastActivity] = useState();
  const [selected, setSelected] = useState(
    settingsData?.items?.translation?.like_discussions_tabs ||
      "like discussions"
  );

  const SelectTab = (tab) => {
    setSelected(tab);
  };

  useEffect(() => {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: localStorage.getItem("language"),
      },
    };

    axiosInstance
      .get(
        `/api/user/discussions/last-activities`,

        config
      )
      .then((res) => {
        setLastActivity(res.data.items);
      })
      .catch((err) => console.log(err));
  }, [handleSetLanguage]);

  return (
    <S.Main id="profile-main">
      <Nav settingsData={settingsData} handleSetLanguage={handleSetLanguage} />

      <S.ProfileContainer>
        <div className="profile-main">
          <div className="box">
            <div className="virtual-id">
              <h3>{settingsData?.items?.translation?.ID_Card_title}</h3>
              <IDCard
                src={profileInformation?.user?.image}
                fname={profileInformation?.user?.first_name}
                lname={profileInformation?.user?.last_name}
                gender={profileInformation?.user?.gender}
                national="Virlan"
                country={profileInformation?.user?.country_birth}
                date={profileInformation?.user?.dob}
                settingsData={settingsData}
                serial={profileInformation?.user?.serial}
                data_register={profileInformation?.user?.created_at}
                ref={componentRef.current}
              />
              <button className="export-pdf" onClick={() => exportPdf()}>
                Export As PDF
              </button>
            </div>
            <div className="profile-information">
              <S.containerProfile>
                <>
                  <S.profileInformation>
                    <h2>
                      {
                        settingsData?.items?.translation
                          ?.title_profile_information
                      }
                    </h2>
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
                  <S.boxInformation className="email">
                    <label>{settingsData?.items?.translation?.email}</label>
                    <h4>{profileInformation?.user?.email}</h4>
                  </S.boxInformation>
                </S.profileInformation>
                <S.profileInformation className="box-profile">
                  <S.boxInformation>
                    <label>{settingsData?.items?.translation?.password}</label>
                    <h4>*****</h4>
                  </S.boxInformation>
                </S.profileInformation>

                <S.profileInformation>
                  <Link to="/change-password">
                    <button className="changePass">
                      {settingsData?.items?.translation?.btn_change_pass}
                    </button>
                  </Link>
                </S.profileInformation>
              </S.containerProfile>
            </div>
          </div>
          <S.lastActivity>
            <h2>{settingsData?.items?.translation?.last_activities}</h2>

            <TabNav
              tabs={[
                settingsData?.items?.translation?.like_discussions_tabs,
                settingsData?.items?.translation?.comment_discussions_tabs,
              ]}
              selected={selected}
              SelectTab={SelectTab}
            >
              <>
                <Tab
                  isSelected={
                    selected ===
                    settingsData?.items?.translation?.like_discussions_tabs
                  }
                >
                  {lastActivity?.last_likes_discussions?.map((activity) => (
                    <LikeTopic
                      key={activity.id}
                      date={activity?.created_at}
                      paragraph={activity?.text}
                      settingsData={settingsData}
                    />
                  ))}
                </Tab>

                <Tab
                  isSelected={
                    selected ===
                    settingsData?.items?.translation?.comment_discussions_tabs
                  }
                >
                  {lastActivity?.last_comments_discussions?.map((activity) => (
                    <LikeTopic
                      key={activity.id}
                      date={activity?.created_at}
                      paragraph={activity?.comment}
                      comment={activity.discussion.text}
                      settingsData={settingsData}
                      commentText
                    />
                  ))}
                </Tab>
              </>
            </TabNav>
          </S.lastActivity>
        </div>
        <Footer settingsData={settingsData} />
      </S.ProfileContainer>
    </S.Main>
  );
}

export default Profile;
