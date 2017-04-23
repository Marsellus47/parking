import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NotFoundPage from './common/NotFoundPage';
import Header from './common/Header';
import HomePage from './home/HomePage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;