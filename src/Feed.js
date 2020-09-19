import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";

function Feed() {
  //
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

  return (
    <div className="feed">
      {/* StoryReel      */}
      <StoryReel />

      {/* MessageSender */}
      <MessageSender />

      {/* Post List */}
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          profileAvatar={post.data.profileAvatar}
          image={post.data.image}
          username={post.data.username}
          message={post.data.message}
          likes={post.data.likes}
          timestamp={post.data.timestamp}
        />
      ))}
    </div>
  );
}

export default Feed;
