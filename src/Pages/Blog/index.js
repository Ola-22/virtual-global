import HeaderForum from "../../Components/HeaderForum";
import Nav from "../../Components/Nav";
import PaginationComponent from "./PaginationComponent";
import { useState, useEffect } from "react";
import * as S from "./style";
import axiosInstance from "../../helpers/axios";

function PagesMain({
  settingsData,
  handleSetLanguage,
  profileInformation,
  language,
}) {
  const [searchQuery, setSearchQuery] = useState();
  const [postsSearch, setPostsSearch] = useState();

  useEffect(() => {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        lang: language,
      },
    };
    axiosInstance
      .get(
        `/api/posts/all?title=${searchQuery}`,

        config
      )
      .then((res) => {
        setPostsSearch(res.data.items.posts);
      })
      .catch((err) => console.log(err));
  }, [searchQuery, language]);

  return (
    <S.Main>
      <Nav settingsData={settingsData} handleSetLanguage={handleSetLanguage} />

      <HeaderForum
        profileInformation={profileInformation}
        settingsData={settingsData}
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery || ""}
      />
      <S.BlogContainer>
        <div className="box">
          <div className="container">
            <h1>{settingsData?.items?.translation?.testimonies_blog}</h1>

            <PaginationComponent
              settingsData={settingsData}
              language={language}
              postsSearch={postsSearch}
              searchQuery={searchQuery}
            />
          </div>
        </div>
      </S.BlogContainer>
    </S.Main>
  );
}

export default PagesMain;
