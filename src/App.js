import PostsList from '../src/features/posts/PostsList';
import AddPostForm from '../src/features/posts/AddPostForm';
import React from 'react';
function App() {
  return (
    <main className="text-center">
    <AddPostForm/>
      <PostsList/>
    </main>
  );
}

export default App;
