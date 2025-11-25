import React, { useState } from 'react';
import './Contacts.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contacts">
      <div className="container">
        <div className="contacts-header">
          <h1>Контакти</h1>
          <p className="subtitle">
            Зв'яжіться з нами для отримання додаткової інформації
          </p>
        </div>

        <div className="contacts-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Адреса</h3>
              <p>м. Київ, вул. Хрещатик, 1</p>
              <p>Україна, 01001</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>info@military-stats.ua</p>
              <p>support@military-stats.ua</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Телефон</h3>
              <p>+380 44 123 45 67</p>
              <p>+380 44 765 43 21</p>
            </div>

            <div className="info-card">
              <div className="info-icon">⏰</div>
              <h3>Години роботи</h3>
              <p>Пн-Пт: 9:00 - 18:00</p>
              <p>Сб-Нд: Вихідні</p>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Надіслати повідомлення</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Ім'я</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Введіть ваше ім'я"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Введіть ваш email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Повідомлення</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Введіть ваше повідомлення"
                />
              </div>

              <button type="submit" className="submit-btn">
                Надіслати
              </button>
            </form>
          </div>
        </div>

        <div className="map-section">
          <h2>Наше розташування</h2>
          <div className="map-container">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.564298416093!2d30.52277631573109!3d50.45001997947508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce50f5c5e13b%3A0x28107f9d6a0c8c0d!2z0KXRgNC10YnQsNGC0LjQuiwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1637000000000!5m2!1suk!2sua"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
