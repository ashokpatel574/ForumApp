import React, { useState, useEffect } from "react";
import { useData } from "../context/DataContext";
import Post from "./Post";

const HomeFeed = () => {
  const [filteredPosts, setFilteredPosts] = useState({});
  const {
    state: { user },
  } = useData();

  useEffect(() => {
    setFilteredPosts({ ...user });
  }, [user]);

  return (
    <article className="homeFeed_container">
      <h2>Latest Posts</h2>
      <ul>
        {filteredPosts?.posts?.map((postItem) => (
          <Post key={postItem?.postId} postState={postItem} />
        ))}
      </ul>
    </article>
  );
};

export default HomeFeed;
