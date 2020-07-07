import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import CommentTemplate from './components/CommentTemplate';

const App = () => {
  return (
    <Switch>
      <Route path='/news/:page?' component={NewsPage} exact />
      <Route path='/item/:id?' component={CommentTemplate} />
      <Route 
        render={({ location }) => (
          <div>
            <h2>이 페이지는 존재하지 않습니다:</h2>
            <p>{location.pathname}</p>
          </div>
        )}
      />
    </Switch>
  );
};

export default App;