import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ThreadList = () => {
  const [threads, setThreads] = useState([]);

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
          <li key={thread.id} className="thread-list-item">
            {thread.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreadList;