import React from "react";
import { useData } from "../context/DataContext";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const SortPost = () => {
  const {
    dispatch,
    state: { latestpostUpSorted },
  } = useData();
  const latestSorthandler = (latestStatus) => {
    dispatch({
      type: "latestSort",
      payload: latestStatus,
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
        <p className="lastesPostSort">
          <span>Latest Post</span>
          {latestpostUpSorted ? (
            <span
              onClick={() => latestSorthandler("up")}
              className="latestPost-down"
            >
              <ArrowDropUpIcon />
            </span>
          ) : (
            <span
              onClick={() => latestSorthandler("down")}
              className="latestPost-up"
            >
              {" "}
              <ArrowDropDownIcon />
            </span>
          )}
        </p>
      </div>
      <div>
        <p onClick={() => votesSortHandler()}>Most Upvoted Post</p>
      </div>
    </aside>
  );
};

export default SortPost;
