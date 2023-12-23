import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ThreadList = () => {
  const [threads, setThreads] = useState([]);

  // axiosを使用してAPIからスレッドの情報を取得
  useEffect(() => {
    axios.get('https://railway.bulletinboard.techtrain.dev/threads')
      .then(response => {
        console.log(response.data);
        setThreads(response.data);
      })
      .catch(error => {
        console.error('Error fetching threads:', error);
      });
  }, []);

  return (
    <div className="thread-list-container">
      <div className="thread-list-title">新着スレッド</div>
      <ul>
        {threads.map(thread => (
          // スレッドごとにリストアイテムを生成し，押したらそのスレッド内に移動
          <li key={thread.id} className="thread-list-item">
            <Link to={`/thread/${thread.id}`}>{thread.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreadList;