import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, IndexRedirect, Router, Route } from 'react-router';

import Main from './components/Main';
import SearchResults from './components/SearchResults';
import Dashboard from './components/Dashboard';
import CategoriesCatalog from './components/CategoriesCatalog';
import CategoryDetails from './components/CategoryDetails';
import Login from './components/Login';
import Callback from './components/Callback';

import AuthService from './utils/AuthService';

const auth = new AuthService('VPqqN4tRDsC91w0dVLqNRuDCYFVkuxnF', 'gatewayexhibits.auth0.com');

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    auth.logout();
    replace({ pathname: '/login' });
  }
}

const parseAuthHash = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.parseHash(nextState.location.hash)
  }
}

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={Main} auth={auth}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={SearchResults} />
        <Route path="/parts/:id" component={Dashboard} />
        <Route path="/categories/:id" component={CategoryDetails} />
        <Route path="/categories/:id/children" component={CategoriesCatalog} />
        // <Route path="/login" component={Login} />
        // <Route path="/callback" onEnter={parseAuthHash} />
      </Route>
    </Router>
  , document.getElementById('app'));
