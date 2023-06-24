// import { v4 as uuid } from "uuid";

import { forumData } from "../constant";

export const initialState = {
  user: forumData,
  userPost: {},
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "User_Post_Display": {
      return {
        ...state,
        userPost: { ...action.payload },
      };
    }

    case "latestSort": {
      return {
        ...state,
        user: {
          ...state.user,
          posts: state.user.posts.sort((a, b) => {
            return Date.parse(b.createdAt) - Date.parse(a.createdAt);
          }),
        },
      };
    }

    case "votesSort": {
      return {
        ...state,
        user: {
          ...state.user,
          posts: state.user.posts.sort((a, b) => {
            return b.upvotes - a.upvotes;
          }),
        },
      };
    }

    case "Bookmarks": {
      return {
        ...state,
        user: {
          ...state.user,
          posts: [
            ...state.user.posts?.map((postItem) => {
              return postItem.postId === action.payload
                ? {
                    ...postItem,
                    isBookmarked: !postItem.isBookmarked,
                  }
                : { ...postItem };
            }),
          ],
        },
      };
    }

    case "Votes": {
      return {
        ...state,
        user: {
          ...state.user,
          posts: [
            ...state.user.posts?.map((post) => {
              return post.postId === action.payload.id
                ? {
                    ...post,
                    upvotes:
                      action.payload.voteType === "up"
                        ? post.upvotes + 1
                        : post.upvotes - 1,
                    downvotes:
                      action.payload.voteType === "down"
                        ? post.downvotes - 1
                        : post.downvotes + 1,
                  }
                : post;
            }),
          ],
        },
      };
    }

    default:
      return state;
  }
};
