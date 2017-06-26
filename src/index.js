import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

import Main from './components/Main';
import SearchResults from './components/SearchResults';
import Dashboard from './components/Dashboard';
import CategoriesCatalog from './components/CategoriesCatalog';
import CategoryDetails from './components/CategoryDetails';
import Login from './components/Login';
import Callback from './components/Callback';
import history from './utils/history';

import Auth from './utils/Auth0';

const auth = new Auth();

const handleAuthentication = (nextState, _) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

ReactDOM.render(
  <BrowserRouter history={history} component={Main}>
    <div>
      <Route path="/" render={(props) => <Main auth={auth} {...props} />} />

      <Route path="/home" render={(props) => <SearchResults auth={auth} {...props} />} />
      <Route path="/parts/:id" render={(props) => <Dashboard auth={auth} {...props} />} />
      <Route path="/categories/:id/children" render={(props) => <CategoriesCatalog auth={auth} {...props} />} />
      <Route exact path="/categories/:id" render={(props) => <CategoryDetails auth={auth} {...props} />} />


      <Route path="/login" render={(props) => <Login auth={auth} {...props} />} />

      <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
    </div>
  </BrowserRouter>
  , document.getElementById('app'));
