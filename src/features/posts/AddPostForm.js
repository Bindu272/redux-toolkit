import { useState } from "react";
import React from "react";
import { postAdded } from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  return (
    <section>
      <h2>ADD A NEW POST</h2>
      <div className="container w-50 border border-light rounded bg-dark bg-gradient">
      <form>
      <div className="mb-2">
      <label htmlFor="postTitle"  className="form-label">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          className="form-control"
          onChange={onTitleChanged}
        />
      </div>
     <div className="mb-2">
     <label htmlFor="postAuthor" className="form-label">Author:</label>
        <select id="postAuthor" className="form-select" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {userOptions}
        </select>
     </div>
       <div className="mb-2"> <label htmlFor="postContent" className="form-label">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          className="form-control"
          onChange={onContentChanged}
        /></div>
       
        <button type="button"  className="btn btn-secondary btn-lg mb-2" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
      </div>
     
    </section>
  );
};

export default AddPostForm;
