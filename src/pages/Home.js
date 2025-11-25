import React from 'react';
import Slider from '../components/Slider';
import NewsList from '../components/NewsList';
import { newsData, statsData } from '../data/newsData';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Slider />

      <section className="stats-section">
        <div className="container">
          <h2>Статистика військової потужності</h2>
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-title">{stat.title}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="news-section">
        <div className="container">
          <h2>Останні новини</h2>
          <p className="section-subtitle">
            Актуальна інформація про стан та розвиток збройних сил України
          </p>
          <NewsList news={newsData} limit={10} />
        </div>
      </section>
    </div>
  );
};

export default Home;
