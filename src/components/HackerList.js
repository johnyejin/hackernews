import React from 'react';
import HackerListItem from './HackerListItem';
import './HackerList.scss';

const HackerList = ({ newsList }) => {
  return (
    <div className="HackerList">
      {newsList ? 
        newsList.map(news => (
          <HackerListItem news={news} key={news.id} />
        ))
        : <div></div>
      }
    </div>
  );
};

export default HackerList;
