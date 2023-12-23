import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Header from "./Header";
import './NewThread.css'; 

const NewThread = () => {
  const [title, setTitle] = useState(''); 
  const navigate = useNavigate();

  // ボタンを押したら動作する関数
  const handleSubmit = (e) => {
    e.preventDefault();

    // axiosを使用してAPIから新規スレッドを作成
    axios.post('https://railway.bulletinboard.techtrain.dev/threads', { title })
      .then(response => {
        console.log(response.data);
        // スレッド作成後、トップページに移動
        navigate('/');
      })
      .catch(error => {
        console.error('Error creating new thread:', error);
      });
  };

  return (
    <div>
      <Header />
      <div className='new-thread-form'>     
        <h1>スレッドを新規作成</h1>
        <form onSubmit={handleSubmit} >
          <input 
            type="text" 
            placeholder="スレッドタイトル" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
          <button type="submit">作成</button>
        </form>
        <p><Link to="/">Topに戻る</Link></p>
      </div>
    </div>
  );
};

export default NewThread;
