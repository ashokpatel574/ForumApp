import React from "react";
import Post from "./Post";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router";
import { timeAgo } from "../utils";

const PostDetails = () => {
  const {
    state: { userPost },
  } = useData();

  const { username, comments, isBookmarked } = userPost;
  const navigate = useNavigate();

  const backToHomeHandler = () => {
    navigate("/");
  };

  return (
    <article className="postDetails_container">
      <div className="postDetails_header">
        <span onClick={backToHomeHandler} className="btnBack">
          back
        </span>
        <span className="posttitle">Posts</span>
      </div>
      <Post postState={userPost} />
      <div className="postDetails_comments">
        {comments?.map((commentItem) => {
          return (
            <div
              key={commentItem?.commentId}
              className="postDetails_comments_container"
            >
              <div className="postDetails_comments-partOne">
                <div className="postItem_info-header-ImgContainer">
                  <img src={commentItem?.picUrl} alt={commentItem?.post} />
                </div>
              </div>
              <div className="postDetails_comments-partTwo">
                <div className="userComments-header-partOne">
                  <span className="userComments-name">{commentItem?.name}</span>
                  <span>@{commentItem?.username}</span>
                  <span>{timeAgo(commentItem?.createdAt)}</span>
                </div>
                <div className="userComments-header-partTwo">
                  <span>Replying to @{username}</span>
                </div>
                <div className="userComments-header-partThree">
                  <span>{commentItem?.comment}</span>
                </div>
                <div className="postDetails_comments-btnContainer">
                  <span className="postItem-likes">
                    <FavoriteBorderIcon />
                  </span>
                  <span className="postItem-comments">
                    <ChatBubbleOutlineIcon />
                  </span>
                  <span className="postItem-bookmarks">
                    {isBookmarked ? <BookmarkBorderIcon /> : <BookmarkIcon />}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default PostDetails;
