import CardTabs from "../../Components/CardTabs";
import { Link } from "react-router-dom";

export default function RecentTopics({ discussion }) {
  const recentTopics = discussion?.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  return (
    <div>
      {recentTopics?.map((disc) => (
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