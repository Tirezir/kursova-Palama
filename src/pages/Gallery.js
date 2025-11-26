import React, { useState, useEffect } from 'react';
import { getGallery } from '../api/newsAPI';
import './Gallery.css';

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('Всі');

  useEffect(() => {
    async function fetchGallery() {
      const data = await getGallery();
      setGalleryData(data);
      setLoading(false);
    }
    fetchGallery();
  }, []);

  if (loading) return <div className="gallery"><p>Завантаження...</p></div>;

  const categories = ['Всі', ...new Set(galleryData.map(item => item.category))];

  const filteredGallery = filter === 'Всі'
    ? galleryData
    : galleryData.filter(item => item.category === filter);

  return (
    <div className="gallery">
      <div className="container">
        <div className="gallery-header">
          <h1>Галерея</h1>
          <p className="subtitle">
            Візуальна колекція військової техніки та підрозділів України
          </p>
          <p className="gallery-count">Всього виставок: {galleryData.length}</p>
        </div>

        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredGallery.map((item) => (
            <div key={item.id} className="gallery-card">
              <div className="gallery-image">
                <div className="gallery-icon">{item.icon}</div>
              </div>
              <div className="gallery-info">
                <h3>{item.title}</h3>
                <span className="category-badge">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredGallery.length === 0 && (
          <div className="no-results">
            <p>Немає зображень у цій категорії</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
