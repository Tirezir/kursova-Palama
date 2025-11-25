import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-icon">🇺🇦</div>
            <div className="logo-text">
              <h1>Військова Потужність України</h1>
              <p>Статистичний портал</p>
            </div>
          </Link>

          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Головна</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>Про сайт</Link></li>
              <li><Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Галерея</Link></li>
              <li><Link to="/news" onClick={() => setIsMenuOpen(false)}>Новини</Link></li>
              <li><Link to="/contacts" onClick={() => setIsMenuOpen(false)}>Контакти</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
