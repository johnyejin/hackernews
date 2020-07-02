import React, { useCallback } from 'react';
import './HackerTemplate.scss';

const HackerTemplate = ({ onPageClick, children }) => {
  const handleClick = useCallback(
    () => {
      window.scrollTo(0, 0);
      onPageClick(1);
    },
    [],
  )

  return (
    <div className="HackerTemplate">
      <div className="app-title" onClick={handleClick}>Hacker News</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default HackerTemplate;
