import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Про портал</h3>
            <p>
              Статистичний портал що містить актуальну інформацію
              про військову потужність України та аналітичні матеріали.
            </p>
          </div>

          <div className="footer-section">
            <h3>Навігація</h3>
            <ul>
              <li><Link to="/">Головна</Link></li>
              <li><Link to="/about">Про сайт</Link></li>
              <li><Link to="/gallery">Галерея</Link></li>
              <li><Link to="/news">Новини</Link></li>
              <li><Link to="/contacts">Контакти</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Контакти</h3>
            <ul>
              <li>📧 info@military-stats.ua</li>
              <li>📞 +380 44 123 45 67</li>
              <li>📍 м. Київ, вул. Хрещатик, 1</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Соціальні мережі</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Telegram">✈️</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Військова Потужність України. Всі права захищено.</p>
          <p>Розроблено з 💙💛 для України</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
