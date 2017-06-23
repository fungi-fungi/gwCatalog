'use strict';

import React from 'react'
import { MuiThemeProvider } from 'material-ui/styles';

import AppMainBar from './AppMainBar';
import Grid from 'material-ui/Grid';

import styles from '../styles/Main.css';

class AppComponent extends React.Component {

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth
      })
    }

    return (
      <div>
        <MuiThemeProvider>
          <div className={styles.frame}>
            <AppMainBar path={this.props.location.pathname} />
            <div className={styles.app}>
              <div className={styles.main}>
                <Grid container>
                  <Grid item xs={0} sm={3} />
                  <Grid item xs={12} sm={6}>
                    { children }
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default AppComponent;
