import React from "react";
import "./Post.css";
import { Avatar, IconButton } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import NearMeIcon from "@material-ui/icons/NearMe";
import ShareIcon from "@material-ui/icons/Share";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function Post({
  id,
  profileAvatar,
  image,
  username,
  timestamp,
  message,
  likes,
}) {
  const [{ user }] = useStateValue();

  //
  const handleLikeSubmit = (e) => {
    e.preventDefault();
    console.log(likes.includes(user.displayName))
    if (!likes.includes(user.displayName)) {
      likes.push(user.displayName);
      db.collection("posts").doc(id).set(
        {
          likes: likes,
        },
        { merge: true }
      );
    }
  };

  return (
    <div className="post">
      <div className="post__top">
        <Avatar className="post_avatar" src={profileAvatar} atl="" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__status">
        <div className="post__likeInfo">
          <h3>like...</h3>
        </div>

        <div className="post__commentTotal">
          <h4>103 bình luận</h4>
        </div>
      </div>

      <div className="post__options">
        <div className="post__option">
          <IconButton onClick={handleLikeSubmit}>
            <ThumbUpIcon />
          </IconButton>
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Location</p>
        </div>
        <div className="post__option">
          <ShareIcon />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
