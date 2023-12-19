import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";
import React from "react";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionsButtons = ({ post }) => {
  const dispatch = useDispatch();
  const reactionsButtons = Object.entries(reactionEmoji).map(
    ([name, emoji]) => {
      return (
        <button
          key={name}
          className="reactionButton"
          type="button"
          onClick={() =>
            dispatch(reactionAdded({ postId: post.id, reaction: name }))
          }
        >
          {emoji}
          {post.reactions[name] ||0}
        </button>
      );
    }
  );
  return <div>{reactionsButtons}</div>;
};

export default ReactionsButtons;
