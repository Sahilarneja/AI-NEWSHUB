import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import './NewsCard.css'; // Ensure this CSS file is available for additional styles

const NewsCard = ({ article, index, activeArticle }) => {
  const learnMoreTextStyle = {
    textAlign: 'right',
    marginTop: 'auto',
    marginRight: '16px',
    marginBottom: '16px',
    fontWeight: 'bold',
    color: '#007bff',
    cursor: 'pointer',
    textDecoration: 'underline',
  };

  const indexNumberStyle = {
    position: 'absolute',
    top: '16px',
    left: '16px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#007bff',
  };

  const cardStyle = {
    backgroundColor: '#ffffff', // Default background color
    color: '#212529', // Default text color
    border: '1px solid #e0e0e0', // Default border
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between', // Ensure content is spaced evenly
    transition: 'background-color 0.3s ease, border 0.3s ease', // Smooth transition
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Default shadow
    position: 'relative', // Ensure absolute positioning of the index number
    borderColor: activeArticle === index ? '#007bff' : '#e0e0e0', // Change border color if active
    backgroundColor: activeArticle === index ? '#f0f8ff' : '#ffffff', // Change background color if active
  };

  const mediaStyle = {
    height: '150px',
    objectFit: 'cover',
  };

  const contentStyle = {
    overflowY: 'auto', // Enable vertical scrolling
    maxHeight: '150px', // Adjust this value as needed
  };

  return (
    <Card style={cardStyle}>
      <span style={indexNumberStyle}>{index + 1}</span> {/* Display the index number */}
      <CardActionArea href={article.url} target="_blank" style={{ height: '100%' }}>
        <CardMedia
          component="img"
          alt={article.title}
          image={article.urlToImage || 'https://via.placeholder.com/150'}
          style={mediaStyle}
        />
        <CardContent style={contentStyle}>
          <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 'bold' }}>
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ marginBottom: '8px' }}>
            {article.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {new Date(article.publishedAt).toDateString()} | {article.source.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent style={learnMoreTextStyle}>
        <Typography variant="body2" component="span" onClick={() => window.open(article.url, '_blank')}>
          Learn More
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
