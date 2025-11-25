import React from 'react';
import NewsCard from './NewsCard';
import './NewsList.css';

const NewsList = ({ news, limit }) => {
  const displayNews = limit ? news.slice(0, limit) : news;

  return (
    <div className="news-list">
      <div className="news-grid">
        {displayNews.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
