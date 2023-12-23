import { Link } from "react-router-dom";
import ThreadList from "./ThreadList";
import './ThreadList.css';
import Header from "./Header";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <ThreadList />
    </div>
  );
};

export default Home;