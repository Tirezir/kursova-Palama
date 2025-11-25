import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Рейтинг військової потужності',
      description: 'Україна посідає важливе місце у світовому рейтингу військової потужності',
      image: '🛡️'
    },
    {
      title: 'Сухопутні війська',
      description: 'Потужні і модернізовані підрозділи наземних сил',
      image: '🪖'
    },
    {
      title: 'Повітряні сили',
      description: 'Авіація та система протиповітряної оборони',
      image: '✈️'
    },
    {
      title: 'Військово-морські сили',
      description: 'Захист морських кордонів та узбережжя',
      image: '⚓'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="slide-icon">{slide.image}</div>
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="slider-btn prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="slider-btn next" onClick={nextSlide}>
        ›
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
