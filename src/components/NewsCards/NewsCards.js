import React from 'react';
import { Grid, Grow, Typography, Card, CardContent } from '@mui/material';
import NewsCard from '../NewsCard/NewsCard';

const infoCards = [
  { 
    color: '#25064c', 
    title: 'Latest News', 
    text: 'Get the latest news articles.', 
    trySaying: 'Example: "Get the latest news"' 
  },
  { 
    color: '#7348b9', 
    title: 'News by Terms', 
    text: 'Get news articles based on specific terms or keywords.', 
    terms: 'Technology, Stock Market, Microsoft, AI, Climate Change, Cryptocurrency, etc.', 
    trySaying: 'Example: "What\'s up with Technology"' 
  },
  { 
    color: '#9768d1', 
    title: 'News by Sources', 
    text: 'Explore news articles from different sources.', 
    sources: 'CNN, BBC News, The Guardian, Reuters, Al Jazeera, Forbes, etc.', 
    trySaying: 'Example: "Give me the news from CNN"' 
  }
];

const NewsCards = ({ articles, activeArticle }) => {
  const gridItemStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px'
  };

  // Debugging logs
  console.log('Articles:', articles);

  return (
    <div style={{ height: 'calc(100vh - 64px)', overflowY: 'auto', padding: '10px' }}>
      <Grow in>
        <Grid container alignItems="stretch" spacing={3}>
          {articles && articles.length > 0 ? (
            articles.map((article, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} style={gridItemStyle} key={index}>
                <NewsCard
                  article={article} activeArticle={activeArticle} index={index}
                />
              </Grid>
            ))
          ) : (
            infoCards.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} style={gridItemStyle} key={index}>
                <Card style={{ backgroundColor: card.color, color: '#ffffff', height: '300px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                  <CardContent style={{ width: '100%', padding: '20px' }}>
                    <Typography variant="h5" component="div" style={{ fontWeight: 'bold' }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" style={{ marginTop: '10px', marginBottom: '20px' }}>
                      {card.text}
                    </Typography>
                    {card.terms && (
                      <Typography variant="body2" style={{ marginTop: '10px', fontStyle: 'italic' }}>
                        <span style={{ color: '#fff' }}>Try terms like:</span> {card.terms}
                      </Typography>
                    )}
                    {card.sources && (
                      <Typography variant="body2" style={{ marginTop: '10px', fontStyle: 'italic' }}>
                        <span style={{ color: '#fff' }}>Try sources like:</span> {card.sources}
                      </Typography>
                    )}
                  </CardContent>
                  <CardContent style={{ borderTop: '1px solid #fff', paddingTop: '10px', width: '100%', textAlign: 'center' }}>
                    <Typography variant="body2">
                      <span style={{ color: '#fff' }}>Try saying:</span> {card.trySaying}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Grow>
    </div>
  );
};

export default NewsCards;
