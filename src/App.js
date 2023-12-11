import './App.css';
import PostsList from '../src/features/posts/PostsList';
import AddPostForm from '../src/features/posts/AddPostForm';
function App() {
  return (
    <main className="App">
    <AddPostForm/>
      <PostsList/>
    </main>
  );
}

export default App;
