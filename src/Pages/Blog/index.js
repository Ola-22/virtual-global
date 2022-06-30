import { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Nav from "../../Components/Nav";
import axiosInstance from "../../helpers/axios";
import BlogCard from "./BlogCard";

import * as S from "./style";

function PagesMain({
  settingsData,
  handleSetLanguage,
  profileInformation,
  language,
}) {
  const [data, setData] = useState();

  useEffect(() => {
    axiosInstance
      .get(
        `/api/posts/all`,

        {
          headers: {
            lang: language,
          },
        }
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [language]);

  return (
    <S.Main>
      <Nav settingsData={settingsData} handleSetLanguage={handleSetLanguage} />
      <Header
        profileInformation={profileInformation}
        settingsData={settingsData}
      />
      <S.BlogContainer>
        <div className="box">
          <div className="container">
            <h1>Blog</h1>
            {data?.items.posts.map((post) => (
              <BlogCard
                title={post.title}
                date={post.date_publication}
                content={post.text}
                image={post.image}
                author={post.author}
                id={post.id}
              />
            ))}
          </div>
        </div>
      </S.BlogContainer>
    </S.Main>
  );
}

export default PagesMain;
