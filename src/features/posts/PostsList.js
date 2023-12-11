import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButtons from "./ReactionsButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map((post) => (
    
    <article key={post.id}>
    <div className="container w-50 border border-light rounded bg-dark bg-gradient mb-3">
      <h3>{post.title}</h3>
      <h6>{post.content.substring(0, 100)}</h6>
      <p className="postCredit">
        <PostAuthor userId={post.userId}/>
        <TimeAgo timestamp={post.date}/>
      </p>
      <ReactionsButtons post={post}/>
      </div>
    </article>
  ));
  return (
    <section>
      <h2>POSTS</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
