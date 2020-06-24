import React from 'react';
import './HackerTemplate.scss';

const HackerTemplate = ({ children }) => {
  return (
    <div className="HackerTemplate">
      <div className="app-title">Hacker News</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default HackerTemplate;
