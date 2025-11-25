import React from 'react';
import NewsList from '../components/NewsList';
import { newsData } from '../data/newsData';
import './News.css';

const News = () => {
  return (
    <div className="news-page">
      <div className="container">
        <div className="news-header">
          <h1>Новини</h1>
          <p className="subtitle">
            Актуальна інформація про військову потужність та оборону України
          </p>
        </div>

        <div className="news-stats">
          <div className="stat-item">
            <div className="stat-number">{newsData.length}</div>
            <div className="stat-label">Новин</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">📰</div>
            <div className="stat-label">Щоденні оновлення</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">✅</div>
            <div className="stat-label">Перевірена інформація</div>
          </div>
        </div>

        <div className="news-content">
          <NewsList news={newsData} />
        </div>
      </div>
    </div>
  );
};

export default News;
