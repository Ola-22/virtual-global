import CardTabs from "../../Components/CardTabs";
import { useEffect, useState } from "react";
import axiosInstance from "../../helpers/axios";

export default function RecentReplies({ settingsData, discussionsSearch }) {
  const [discussionVisit, setDiscussionVisit] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/api/user/discussions/all?type=recent_replies`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
          lang: localStorage.getItem("language"),
        },
      })
      .then((res) => {
        setDiscussionVisit(res.data.items.discussions);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {discussionsSearch?.length !== 0
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
            />
          ))
        : discussionVisit?.map((disc) => (
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
            />
          ))}
    </div>
  );
}
