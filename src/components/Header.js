import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="profile" smooth={true} duration={500}>プロフィール</Link>
          </li>
          <li className="nav-item">
            <Link to="experience" smooth={true} duration={500}>職歴・経験</Link>
          </li>
          <li className="nav-item">
            <Link to="projects" smooth={true} duration={500}>プロジェクト・作品</Link>
          </li>
          <li className="nav-item">
            <Link to="skills" smooth={true} duration={500}>スキル</Link>
          </li>
          <li className="nav-item">
            <Link to="education" smooth={true} duration={500}>教育</Link>
          </li>
          <li className="nav-item">
            <Link to="hobbies" smooth={true} duration={500}>趣味・興味</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
