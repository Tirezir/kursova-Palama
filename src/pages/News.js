import React, { useState, useEffect } from 'react';
import NewsList from '../components/NewsList';
import { getNews } from '../api/newsAPI';
import './News.css';

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      const data = await getNews();
      setNewsData(data);
      setLoading(false);
    }
    fetchNews();
  }, []);

  if (loading) return <div className="news-page"><p>Завантаження...</p></div>;

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
