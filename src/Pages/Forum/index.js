import CardForum from "../../Components/CardForum";
import HeaderForum from "../../Components/HeaderForum";
import Nav from "../../Components/Nav";
import * as S from "./style";
import { useState, useEffect } from "react";
import TabNav from "../../Components/Tabs/TabNav";
import Tab from "../../Components/Tabs/Tab";
import Footer from "../../Components/Footer";
import axiosInstance from "../../helpers/axios";
import RecentTopics from "./RecentTopics";
import MostLikes from "./MostLikes";
import MostReplies from "./MostReplies";
import MostVisit from "./MostVisit";
import RecentReplies from "./RecentReplies";
import axios from "axios";
import { NumberFormat } from "../../lib/NumberFormat";

function Forum({
  settingsData,
  profileInformation,
  language,
  handleSetLanguage,
}) {
  const [selected, setSelected] = useState(
    settingsData?.items?.translation?.recent_topics || "Recent Topics"
  );

  console.log(selected);

  const [discussion, setDiscussions] = useState([]);

  const SelectTab = (tab) => {
    setSelected(tab);
  };

  const [searchQuery, setSearchQuery] = useState();
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
        `/api/user/discussions/all`,

        config
      )
      .then((res) => {
        setDiscussions(res.data.items.discussions);
      })
      .catch((err) => console.log(err));
  }, []);

  const total = discussion.reduce(
    (total, currentItem) => (total = total + currentItem.comments_count),
    0
  );

  const [discussionsSearch, setDiscussionsSearch] = useState();
  useEffect(() => {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: localStorage.getItem("language"),
      },
    };
    const source = axios.CancelToken.source();
    axiosInstance
      .get(
        `/api/user/discussions/all?title=${searchQuery}`,

        config
      )
      .then((res) => {
        setDiscussionsSearch(res.data.items.discussions);
      })
      .catch((err) => console.log(err));

    return () => source.cancel();
  }, [searchQuery]);

  return (
    <S.Main>
      <Nav settingsData={settingsData} handleSetLanguage={handleSetLanguage} />
      <HeaderForum
        profileInformation={profileInformation}
        settingsData={settingsData}
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery || ""}
      />
      <S.ForumContainer>
        <div className="box-one">
          <div className="topForum">
            <div>
              <h2> {settingsData?.items?.translation?.topics}</h2>
              <p>{discussion?.length}</p>
            </div>
            <div>
              <h2>{settingsData?.items?.translation?.replies}</h2>
              <p>{NumberFormat(total)}</p>
            </div>
          </div>
          <div>
            <CardForum
              title={settingsData?.items?.translation?.hot_discussions}
              special_discussions
              language={language}
              settingsData={settingsData}
            />
            <div style={{ marginTop: "14px" }}>
              <CardForum
                title={
                  settingsData?.items?.translation?.Participated_Discussions
                }
                participated_discussions
                language={language}
                settingsData={settingsData}
              />
            </div>
          </div>
        </div>
        <S.MainTopic>
          <TabNav
            className="main-topic"
            tabs={[
              settingsData?.items?.translation?.recent_topics,
              settingsData?.items?.translation?.most_replies,
              settingsData?.items?.translation?.recent_replies,
              settingsData?.items?.translation?.most_visit,
              settingsData?.items?.translation?.most_likes,
            ]}
            selected={selected}
            SelectTab={SelectTab}
          >
            <>
              <Tab
                language={language}
                isSelected={
                  selected === settingsData?.items?.translation?.recent_topics
                }
              >
                <RecentTopics
                  settingsData={settingsData}
                  discussionsSearch={discussionsSearch}
                />
              </Tab>

              <Tab
                isSelected={
                  selected === settingsData?.items?.translation?.most_replies
                }
              >
                <MostReplies
                  settingsData={settingsData}
                  discussionsSearch={discussionsSearch}
                />
              </Tab>

              <Tab
                isSelected={
                  selected === settingsData?.items?.translation?.recent_replies
                }
              >
                <RecentReplies
                  settingsData={settingsData}
                  discussionsSearch={discussionsSearch}
                />
              </Tab>

              <Tab
                isSelected={
                  selected === settingsData?.items?.translation?.most_visit
                }
              >
                <MostVisit
                  settingsData={settingsData}
                  discussionsSearch={discussionsSearch}
                />
              </Tab>

              <Tab
                isSelected={
                  selected === settingsData?.items?.translation?.most_likes
                }
              >
                <MostLikes
                  settingsData={settingsData}
                  discussionsSearch={discussionsSearch}
                />
              </Tab>
            </>
          </TabNav>
        </S.MainTopic>
      </S.ForumContainer>
      <Footer settingsData={settingsData} />
    </S.Main>
  );
}

export default Forum;
