import CardForum from "../../Components/CardForum";
import HeaderForum from "../../Components/HeaderForum";
import Nav from "../../Components/Nav";
import * as S from "./style";
import { useState } from "react";
import TabNav from "../../Components/Tabs/TabNav";
import Tab from "../../Components/Tabs/Tab";
import CardTabs from "../../Components/CardTabs";
import Footer from "../../Components/Footer";

function Forum({ settingsData }) {
  const [selected, setSelected] = useState("Recent Topics");

  const SelectTab = (tab) => {
    setSelected(tab);
  };

  return (
    <div style={{ width: "100%" }}>
      <Nav settingsData={settingsData} />
      <HeaderForum settingsData={settingsData} />
      <S.ForumContainer>
        <div className="box">
          <div className="topForum">
            <div>
              <h2>topics</h2>
              <p>+1720</p>
            </div>
            <div>
              <h2>replies</h2>
              <p>1.558.114</p>
            </div>
          </div>

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
        <>
          <TabNav
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
                <CardTabs
                  date="June 18, 2020"
                  title="In light of the current situation of wars and human"
                  paragraph="In light of the current situation of wars and human tragedies in the World and the absence of a promising horizon where real peace and constructive cooperation between people prevails, this proposal urges us to think outs"
                  totalLikes="1.555"
                  totalComment="1.555"
                />
                <CardTabs
                  date="June 18, 2020"
                  title="In light of the current situation of wars and human"
                  paragraph="In light of the current situation of wars and human tragedies in the World and the absence of a promising horizon where real peace and constructive cooperation between people prevails, this proposal urges us to think outs"
                  totalLikes="1.555"
                  totalComment="1.555"
                />
              </Tab>

              <Tab isSelected={selected === "Most Replies"}>
                <CardTabs
                  date="June 18, 2020"
                  title="In light of the current situation of wars and human"
                  paragraph="In light of the current situation of wars and human tragedies in the World and the absence of a promising horizon where real peace and constructive cooperation between people prevails, this proposal urges us to think outs"
                  totalLikes="1.555"
                  totalComment="1.555"
                />
              </Tab>
            </>
          </TabNav>
        </>
      </S.ForumContainer>
      <Footer settingsData={settingsData} />
    </div>
  );
}

export default Forum;
