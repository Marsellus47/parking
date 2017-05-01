import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NotFoundPage from './common/NotFoundPage';
import Header from './common/Header';
import HomePage from './home/HomePage';
import SearchPage from './search/SearchPage';
import AddPage from './add/AddPage';
import LoginPage from './account/LoginPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/add" component={AddPage} />
            <Route path="/login" component={LoginPage} />
            <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;