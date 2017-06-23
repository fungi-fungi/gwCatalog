import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, IndexRedirect, Router, Route } from 'react-router';

import Main from './components/Main';
import SearchResults from './components/SearchResults';
import Dashboard from './components/Dashboard';
import CategoriesCatalog from './components/CategoriesCatalog';
import CategoryDetails from './components/CategoryDetails';

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={SearchResults} />
        <Route path="/parts/:id" component={Dashboard} />
        <Route path="/categories/:id" component={CategoryDetails} />
        <Route path="/categories/:id/children" component={CategoriesCatalog} />
      </Route>
    </Router>
  , document.getElementById('app'));
