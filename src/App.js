import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Sidebar from "./components/Sidebar";
import HomeFeed from "./components/HomeFeed";
import SortPost from "./components/SortPost";
import PostDetails from "./components/PostDetails";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="forumApp_container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomeFeed />} />
          <Route path="/post/:postId" element={<PostDetails />} />
        </Routes>
        <SortPost />
      </main>
    </div>
  );
};

export default App;
