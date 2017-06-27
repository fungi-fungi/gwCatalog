'use strict';

import React from 'react';
import { Redirect } from 'react-router-dom';

import { MuiThemeProvider } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import styles from '../styles/Wrapper.css';

export let AuthWrapper = (WrappedComponent) => class extends React.Component {
  render() {

    const { isAuthenticated } = this.props.auth;

    return(
      <div>
        <MuiThemeProvider>
          <div className={styles.frame}>
            <div className={styles.app}>
              <div className={styles.main}>
                <Grid container>
                  <Grid item xs={0} sm={3} />
                  <Grid item xs={12} sm={6}>
                    {
                      isAuthenticated() ? (
                        <WrappedComponent {...this.props} />
                      ) : (
                        <Redirect to={{
                          pathname: '/login',
                          state: { from: this.props.location }
                        }}/>
                      )
                    }
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}
