import ThreadList from "./ThreadList";
import './ThreadList.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NewThread from "./NewThread";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/thread/new'} element={<NewThread />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
