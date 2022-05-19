import CardTabs from "../../Components/CardTabs";
import { useEffect, useState } from "react";
import axiosInstance from "../../helpers/axios";
import { Link } from "react-router-dom";

export default function MostVisit() {
  const [discussionVisit, setDiscussionVisit] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/api/user/discussions/all?type=most_visit`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        },
      })
      .then((res) => {
        // console.log("disdd", res.data.items);
        setDiscussionVisit(res.data.items.discussions);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {discussionVisit?.map((disc) => (
        <Link to={`/discussion/${disc.id}`}>
          <CardTabs
            key={disc?.id}
            date={disc?.created_at}
            title={disc?.title}
            paragraph={disc?.text}
            totalLikes={disc?.likes_count}
            totalComment={disc?.commnets_count}
          />
        </Link>
      ))}
    </div>
  );
}
