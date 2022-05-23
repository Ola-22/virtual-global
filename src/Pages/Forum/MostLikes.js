import CardTabs from "../../Components/CardTabs";
import { useEffect, useState } from "react";
import axiosInstance from "../../helpers/axios";

export default function MostLikes() {
  const [discussionLikes, setDiscussionLikes] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/api/user/discussions/all?type=most_likes`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        },
      })
      .then((res) => {
        // console.log("disdd", res.data.items);
        setDiscussionLikes(res.data.items.discussions);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {discussionLikes?.map((disc) => (
        <CardTabs
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
