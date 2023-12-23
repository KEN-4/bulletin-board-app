import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from "./Header";
import './ThreadPosts.css';

const ThreadPosts = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const { threadId } = useParams();
  const url = `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`;
  
  // 投稿一覧の取得
  useEffect(() => {
    axios.get(url)
      .then(response => {
        console.log(response.data.posts);
        setPosts(response.data.posts);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, [url]);

  // 新規投稿
  const newPostSubmit = (e) => {
    e.preventDefault();

    // axiosを使用してAPIから新規投稿を作成
    axios.post(url, { post: newPost })
      .then(response => {
        console.log(response.data.posts);
        //送信後フォームをクリア
        setNewPost('');
        //スプレッド構文で投稿一覧を更新
        setPosts([...posts, response.data]);
       })
      .catch(error => {
        console.error('Error creating new post:', error);
      });
  };

  return (
    <div>
      <Header />
      <div className="thread-posts-container">
        <h1 className="thread-posts-title">投稿一覧</h1>
        <ul className="posts-list">
          {posts.map(post => (
           <li key={post.id} className="posts-list-item">{post.post} </li>
           
           ))}
       </ul>
       <form onSubmit={newPostSubmit} className="new-post-form">
         <input 
           type="text" 
           placeholder="投稿しよう" 
           value={newPost}
           onChange={(e) => setNewPost(e.target.value)}
           className="new-post-input" 
         />
         <button type="submit" className="new-post-submit">投稿</ button>
       </form>
     </div>
    </div>
  );
};

export default ThreadPosts;
