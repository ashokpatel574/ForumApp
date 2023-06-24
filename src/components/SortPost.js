import React from "react";
import { useData } from "../context/DataContext";

const SortPost = () => {
  const { dispatch } = useData();
  const latestSorthandler = () => {
    dispatch({
      type: "latestSort",
    });
  };

  const votesSortHandler = () => {
    dispatch({
      type: "votesSort",
    });
  };

  return (
    <aside className="sortPost_container">
      <h3>Sort By</h3>
      <div>
        <p onClick={() => latestSorthandler()}>Latest Post</p>
      </div>
      <div>
        <p onClick={() => votesSortHandler()}>Most Upvoted Post</p>
      </div>
    </aside>
  );
};

export default SortPost;
