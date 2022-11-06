import CardTabs from "../../Components/CardTabs";
import { useEffect, useState } from "react";
import axiosInstance from "../../helpers/axios";

export default function MostReplies({
  settingsData,
  discussionsSearch,
  language,
  searchQuery,
  rtlLang,
}) {
  const [discussionReplies, setDiscussionReplies] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/api/user/discussions/all?type=most_replies`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
          lang: language,
        },
      })
      .then((res) => {
        setDiscussionReplies(res.data.items.discussions);
      })
      .catch((err) => console.log(err));
  }, [language]);

  return (
    <div>
      {searchQuery
        ? discussionsSearch?.map((disc) => (
            <CardTabs
              settingsData={settingsData}
              id={disc.id}
              key={disc?.id}
              date={disc?.created_at}
              title={disc?.title}
              paragraph={disc?.text}
              totalLikes={disc?.likes_count}
              totalComment={disc?.commnets_count}
              is_join={disc?.is_join}
              is_like={disc?.is_like}
              language={language}
              rtlLang={rtlLang}
            />
          ))
        : discussionReplies?.map((disc) => (
            <CardTabs
              language={language}
              settingsData={settingsData}
              id={disc.id}
              key={disc?.id}
              date={disc?.created_at}
              title={disc?.title}
              paragraph={disc?.text}
              totalLikes={disc?.likes_count}
              totalComment={disc?.commnets_count}
              is_join={disc?.is_join}
              is_like={disc?.is_like}
              rtlLang={rtlLang}
            />
          ))}
    </div>
  );
}
