import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
  <div>
    <header className="app-header">
      <h2>掲示板</h2>
      <Link to="/thread/new" className="new-thread-button">
        スレッドを立てる
      </Link>
    </header>
  </div>
  );
};

export default Header;