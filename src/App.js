import React, { useState, useEffect, useCallback } from 'react';
import HackerTemplate from './components/HackerTemplate';
import HackerList from './components/HackerList';
import Paginator from './components/Paginator';
import api from './lib/api';

const App = () => {
  const [page, setPage] = useState(1);
  const [newsList, setNewsList] = useState(null);
  useEffect(() => {
    getData(page);
  }, []);

  const getData = async (page) => {
    try {
      const data = await api(page);
      setNewsList(data)
    } catch(err) {
      console.log('err', err);
    }
  }

  const onClickPage = useCallback(
    p => {
      setPage(p);
      getData(p);
    },
    []
  );

  return (
    <HackerTemplate>
      <HackerList newsList={newsList ? newsList : null} />
      <Paginator page={page} onClickPage={onClickPage}/>
    </HackerTemplate>
  );
};

export default App;