import React, { useState, useCallback } from 'react';
import HackerList from '../components/HackerList';
import Paginator from '../components/Paginator';
import HackerTemplate from '../components/HackerTemplate';

const NewsPage = ({ location, history }) => {
  const queryId = location.search.split('=')[1];
  const [page, setPage] = useState(queryId || 1);
  console.log('location', location);
  console.log('history', history);

  const onPageClick = useCallback(
    p => {
      setPage(p);
      history.push(`/news?page=${p}`);
    },
    []
  );

  return (
    <HackerTemplate onPageClick={onPageClick}>
      <HackerList page={page} />
      <Paginator page={page} onPageClick={onPageClick} />
    </HackerTemplate>
  );
};

export default NewsPage;