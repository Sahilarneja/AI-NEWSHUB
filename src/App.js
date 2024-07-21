import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards'; // Adjust path as needed
import BackArrowButton from './components/BackArrowButton'; // Import the new component
import './App.css';

const alanKey = '3e276e9057fa2da3688e2e1f68773c972e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(0);

  useEffect(() => {
    const alanInstance = alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle - 1);
        }
      }
    });

    return () => {
      if (alanInstance) {
        alanInstance.deactivate();
      }
    };
  }, []);

  // Handle back button click
  const handleBackClick = () => {
    setNewsArticles([]);
    setActiveArticle(0);
  };

  return (
    <div className="app-container">
      <div className="animated-text-container">
        <div className="animated-text">
          AI NEWSHUB
          <p className="sub-title">Let's give it a try</p>
        </div>
      </div>
      <div className="news-cards-container">
        <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      </div>
      {/* Conditionally render the back arrow button */}
      {newsArticles.length > 0 && <BackArrowButton onClick={handleBackClick} />}
      {/* Optional: Alan AI button container */}
      <div id="alan-btn"></div>
    </div>
  );
}

export default App;
