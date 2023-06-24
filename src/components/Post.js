import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router";
import { useData } from "../context/DataContext";
import { timeAgo } from "../utils";

const Post = ({ postState }) => {
  const {
    postId,
    picUrl,
    post,
    username,
    postDescription,
    upvotes,
    downvotes,
    tags,
    createdAt,
    isBookmarked,
  } = postState;
  const { dispatch } = useData();

  const navigate = useNavigate();

  const postCommentsHandler = (postId) => {
    dispatch({ type: "User_Post_Display", payload: postState });
    navigate(`/post/${postId}`);
  };

  const votesHandler = (postId, votesStatus) => {
    console.log(1);
    dispatch({
      type: "Votes",
      payload: {
        voteType: votesStatus,
        id: postId,
      },
    });
  };

  const bookmarkshandler = (postId) => {
    dispatch({
      type: "Bookmarks",
      payload: postId,
    });
  };

  const count = Number(upvotes - downvotes);

  return (
    <li className="postItem_container">
      <div className="postItem_votes-container">
        <span
          className={`postItem_upVotes-Icon ${count > 0 && "postive"}`}
          onClick={() => votesHandler(postId, "up")}
        >
          <ArrowDropUpIcon />
        </span>
        <span className="postItem_votes-count">{count}</span>
        <span
          className={`postItem_downVotes-Icon ${count < 0 && "negative"}`}
          onClick={() => votesHandler(postId, "down")}
        >
          <ArrowDropDownIcon />
        </span>
      </div>
      <div className="postInfo_info-container">
        <div className="postItem_info-header">
          <div className="postItem_info-header-ImgContainer">
            <img src={picUrl} alt={post} />
          </div>
          <div className="username">
            <p>
              <span>Posted by</span> @{username}
            </p>
          </div>
          <div>
            <p>{timeAgo(createdAt)}</p>
          </div>
        </div>

        <div className="postItem_info-title">
          <h3>{post}</h3>
        </div>

        <div className="postItem_tags-container">
          <div className="postItem_tags">
            {tags?.map((tagItem, id) => (
              <span key={id}>{tagItem}</span>
            ))}
          </div>
        </div>

        <div className="postItem-postDecription">
          <p>{postDescription}</p>
        </div>

        <div className="postItem_btnContainer">
          <span
            className="postItem-comments"
            onClick={() => postCommentsHandler(postId)}
          >
            <ChatBubbleOutlineIcon />
          </span>
          <span
            className="postItem-bookmarks"
            onClick={() => bookmarkshandler(postId)}
          >
            {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </span>

          <span className="postItem-likes">
            <ShareIcon />
          </span>
        </div>
      </div>
    </li>
  );
};

export default Post;
