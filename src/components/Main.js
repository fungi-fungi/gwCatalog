'use strict';

import React from 'react'
import { Redirect } from 'react-router-dom';

import { MuiThemeProvider } from 'material-ui/styles';

import AppMainBar from './AppMainBar';

class AppComponent extends React.Component {

  render() {

    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <MuiThemeProvider>
          <div>
            {
              isAuthenticated() ? (
                <div>
                  <AppMainBar {...this.props} />
                  <Redirect to={{
                    pathname: '/home',
                    state: { from: this.props.location }
                  }}/>
                </div>
              ) : (
                <Redirect to={{
                  pathname: '/login',
                  state: { from: this.props.location }
                }}/>
              )
            }
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default AppComponent;
