import CardForum from "../../Components/CardForum";
import HeaderForum from "../../Components/HeaderForum";
import Nav from "../../Components/Nav";
import * as S from "./style";
import { useState, useEffect } from "react";
import TabNav from "../../Components/Tabs/TabNav";
import Tab from "../../Components/Tabs/Tab";
import CardTabs from "../../Components/CardTabs";
import Footer from "../../Components/Footer";
import axiosInstance from "../../helpers/axios";
import RecentTopics from "./RecentTopics";
import MostLikes from "./MostLikes";
import MostReplies from "./MostReplies";
import MostVisit from "./MostVisit";

function Forum({ settingsData, profileInformation }) {
  const [selected, setSelected] = useState("Recent Topics");
  const [discussion, setDiscussions] = useState();

  const SelectTab = (tab) => {
    setSelected(tab);
  };

  useEffect(() => {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
      },
    };

    axiosInstance
      .get(
        `/api/user/discussions/all`,

        config
      )
      .then((res) => {
        console.log("err", res);
        setDiscussions(res.data.items.discussions);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(selected);
  return (
    <div style={{ width: "100%" }}>
      <Nav settingsData={settingsData} />
      <HeaderForum
        profileInformation={profileInformation}
        settingsData={settingsData}
      />
      <S.ForumContainer>
        <div className="box-one">
          <div className="topForum">
            <div>
              <h2>topics</h2>
              <p>{discussion?.length}</p>
            </div>
            <div>
              <h2>replies</h2>
              <p>1.558.114</p>
            </div>
          </div>
          <div>
            <CardForum
              title="hot discussions"
              paragraph="In light of the current situation of wars and human tragedies in the World and "
              totalComments="1.555"
              totalLikes="1.555"
            />
            <div style={{ marginTop: "14px" }}>
              <CardForum
                title="hot discussions"
                paragraph="In light of the current situation of wars and human tragedies in the World and "
                totalComments="1.555"
                totalLikes="1.555"
              />
            </div>
          </div>
        </div>
        <S.MainTopic>
          <TabNav
            className="main-topic"
            tabs={[
              "Recent Topics",
              "Most Replies",
              "Recent Replies",
              "Most Visit",
              "Most Likes",
            ]}
            selected={selected}
            SelectTab={SelectTab}
          >
            <>
              <Tab isSelected={selected === "Recent Topics"}>
                <RecentTopics discussion={discussion} />
              </Tab>

              <Tab isSelected={selected === "Most Replies"}>
                <MostReplies />
              </Tab>

              <Tab isSelected={selected === "Recent Replies"}>
                {discussion?.map((disc) => (
                  <CardTabs
                    key={disc?.id}
                    date={disc?.created_at}
                    title={disc?.title}
                    paragraph={disc?.text}
                    totalLikes={disc?.likes_count}
                    totalComment={disc?.commnets_count}
                  />
                ))}
              </Tab>

              <Tab isSelected={selected === "Most Visit"}>
                <MostVisit />
              </Tab>

              <Tab isSelected={selected === "Most Likes"}>
                <MostLikes />
              </Tab>
            </>
          </TabNav>
        </S.MainTopic>
      </S.ForumContainer>
      <Footer settingsData={settingsData} />
    </div>
  );
}

export default Forum;
