import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useData } from "../context/DataContext";

const Sidebar = () => {
  const {
    state: { user },
  } = useData();
  return (
    <section className="sideBar_container ">
      <ul className="sideBar_container-list  ">
        <li className="sideBar_container-listItem">
          <span>
            <HomeIcon />
          </span>
          <span>Home</span>
        </li>
        <li className="sideBar_container-listItem">
          <span>
            <ExploreIcon />
          </span>
          <span>Explore</span>
        </li>
        <li className="sideBar_container-listItem">
          <span>
            <BookmarkIcon />
          </span>
          <span>Bookmarks</span>
        </li>

        <li className="sideBar_container-listItem">
          <span>
            <AccountCircleIcon />
          </span>
          <span>Profile</span>
        </li>
      </ul>

      <div className="sideBar-profile-container">
        <div className="sideBar-profile-Imgcontainer">
          <img src={user?.picUrl} alt={user.name} />
        </div>
        <div className="sideBar-profile-Infocontainer">
          <span>{user?.name}</span>
          <span>@{user?.username}</span>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
