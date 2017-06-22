import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, IndexRedirect, Router, Route } from 'react-router';

import Main from './components/Main';
import MainApp from './components/MainApp';
import Dashboard from './components/Dashboard'

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={MainApp} />
        <Route path="/parts/:id" component={Dashboard} />
      </Route>
    </Router>
  , document.getElementById('app'));
