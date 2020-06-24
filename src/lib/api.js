const api = async (page) => {
  if(isNaN(page)) {
    return [];
  }

  const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
  const data = await res.json();
  
  return data;
};

export default api;