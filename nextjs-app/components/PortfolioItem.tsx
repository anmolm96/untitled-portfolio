import React from 'react';

interface PortfolioItemProps {
  name: string;
  url: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ name, url }) => {
  return (
    <div className="portfolio-item">
      <h2>{name}</h2>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Visit Website
      </a>
    </div>
  );
};

export default PortfolioItem;