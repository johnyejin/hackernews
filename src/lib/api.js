const api = async (page) => {
  console.log('api.js---page', page)
  if(isNaN(page)) {
    return [];
  }

  const res = await fetch(`http://node-hnapi.herokuapp.com/news?page=${page}`);
  const data = await res.json();
  
  return data;
};

export default api;