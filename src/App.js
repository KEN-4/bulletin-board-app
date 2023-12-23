import './ThreadList.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NewThread from "./NewThread";
import ThreadPosts from './ThreadPosts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/thread/new'} element={<NewThread />} />
        <Route path="/thread/:threadId" element={<ThreadPosts />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
