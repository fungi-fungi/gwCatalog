import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, IndexRedirect, Router, Route } from 'react-router'
import AuthService from './utils/AuthService'

const auth = new AuthService('Nixjergdebr8vH7eRYni7MXK3gQSKtTK', 'gatewayexhibits.auth0.com');

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    auth.logout();
    replace({ pathname: '/login' });
  }
}

import Main from './components/Main';
import Login from './components/Login';
import MainApp from './components/MainApp';
import Dashboard from './components/Dashboard'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main} auth={auth}>
      <IndexRedirect to="/login" />
      <Route path="/login" component={Login} />
      <Route path="/home" component={MainApp}>
        <Route path="/home/dashboard" component={Dashboard} onEnter={requireAuth} />
      </Route>
    </Route>
  </Router>
  , document.getElementById('app'));
