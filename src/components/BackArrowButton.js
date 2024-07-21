import React from 'react';
import './BackArrowButton.css'; // Create this CSS file for styling

const BackArrowButton = ({ onClick }) => {
  return (
    <button className="back-arrow-button" onClick={onClick}>
      &larr; {/* HTML entity for left arrow */}
    </button>
  );
};

export default BackArrowButton;
