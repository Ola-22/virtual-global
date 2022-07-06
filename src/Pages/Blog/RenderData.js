import React from "react";
import BlogCard from "./BlogCard";

function RenderData({
  data,
  language,
  settingsData,
  postsSearch,
  searchQuery,
}) {
  return (
    <ul>
      {searchQuery
        ? postsSearch?.map((post) => (
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
              author_image={post.author_image}
            />
          ))
        : data?.map((post) => (
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
              author_image={post.author_image}
            />
          ))}
    </ul>
  );
}

export default RenderData;
