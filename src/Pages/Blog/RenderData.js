import React from "react";
import BlogCard from "./BlogCard";

function RenderData({ data, language, settingsData }) {
  return (
    <ul>
      {data?.map((post) => (
        <BlogCard
          key={post.id}
          title={post.title}
          date={post.date_publication}
          content={post.text}
          category={post.category}
          author={post.author}
          id={post.id}
          language={language}
          settingsData={settingsData}
        />
      ))}
    </ul>
  );
}

export default RenderData;