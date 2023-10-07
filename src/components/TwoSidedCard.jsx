import React, { useState } from 'react';
import './TwoSidedCard.css';

const TwoSidedCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(true);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const cardClass = isFlipped ? 'flipped' : '';

  return (
    <div className={`two-sided-card ${cardClass}`} onClick={handleCardClick}>
      <div className="card-front">
        {frontContent}
      </div>
      <div className={`card-back ${isFlipped ? 'flipped-back' : ''}`}>
        {backContent}
      </div>
    </div>
  );
};

export default TwoSidedCard;
