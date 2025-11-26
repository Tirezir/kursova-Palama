// src/api/newsAPI.js

export async function getNews() {
  try {
    const response = await fetch('/.netlify/functions/getNews');
    if (!response.ok) throw new Error('Failed to fetch news');
    return await response.json();
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

export async function addNews(newsData) {
  try {
    const response = await fetch('/.netlify/functions/addNews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newsData)
    });
    if (!response.ok) throw new Error('Failed to add news');
    return await response.json();
  } catch (error) {
    console.error('Error adding news:', error);
    return null;
  }
}

export async function getGallery() {
  try {
    const response = await fetch('/.netlify/functions/getGallery');
    if (!response.ok) throw new Error('Failed to fetch gallery');
    return await response.json();
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return [];
  }
}
