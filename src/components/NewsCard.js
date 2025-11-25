import React from 'react';
import { Link } from 'react-router-dom';
import './NewsCard.css';

const NewsCard = ({ news }) => {
  return (
    <div className="news-card">
      <div className="news-image">
        <div className="news-icon">{news.icon}</div>
      </div>
      <div className="news-content">
        <div className="news-date">{news.date}</div>
        <h3>{news.title}</h3>
        <p>{news.excerpt}</p>
        <Link to={`/news/${news.id}`} className="read-more">
          Читати даліЙЙЙ →
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
