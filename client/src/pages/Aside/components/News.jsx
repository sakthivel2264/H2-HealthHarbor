import React, { useState, useEffect } from 'react';
import "../Layout.css";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=healthcare&from=2024-02-22&sortBy=publishedAt&apiKey=2d23f243b6dd40b896eccb02d207a695');
        const data = await response.json();
        
        // Filter out articles with missing fields
        const filteredNews = data.articles.filter(article => (
          article.author && article.urlToImage && article.url
        ));

        setNews(filteredNews);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className='newsC'>
      <h1>Leatest News</h1>
      <div className="articles">
        {news.map((article, index) => (
          <div key={index} className="article">
            <img src={article.urlToImage} alt="Article Thumbnail" />
            <div className="article-info">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <p>Author: <span>{article.author}</span></p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
