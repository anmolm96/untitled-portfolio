import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioItem from '../components/PortfolioItem';

const portfolioData = [
  { name: 'Spiti', url: 'https://spiti.xyz/' },
  { name: 'DPDZero', url: 'https://www.dpdzero.com/' },
  { name: 'Requestly', url: 'https://requestly.io/' },
  { name: 'InducedAI', url: 'https://github.com/inducedAI' },
  { name: 'Rootfi', url: 'https://www.rootfi.dev/' },
];

const IndexPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Untitled Ventures Portfolio</h1>
        <div>
          {portfolioData.map((item, index) => (
            <PortfolioItem key={index} name={item.name} url={item.url} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;