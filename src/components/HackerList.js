import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HackerListItem from './HackerListItem';
import './HackerList.scss';

const HackerList = ({ page }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const query = page === 'hackernews' ? '' : `page=${page}`
        const response = await axios.get(
          `https://node-hnapi.herokuapp.com/news?${query}`
        );
        setArticles(response.data);
      } catch (e) {
        console.log('e', e);
      }
      setLoading(false);
    };
    fetchNews();
  }, [page]);

  if(loading) {
    return <div>loading...</div>;
  }

  if(!articles) {
    return null;
  }

  return (
    <div className="HackerList">
      {articles.map(article => (
        <HackerListItem news={article} key={article.id} />
      ))}
    </div>
  );
};

export default HackerList;
