'use strict';

import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import styles from '../styles/AppFrame.css'

/**
 * AppFrame component
 */

class AppFrame extends React.Component {
  render() {

    const { children } = this.props;

    return (
      <Grid container className={styles.appFrame}>
        <Grid item xs={12} lg={12}>
          <Grid container>
            <Grid item md={3} />
            <Grid item md={6} xs={12}>
              <Paper className={styles.searchBox}>{ children }</Paper>
            </Grid>
            <Grid item xs={6}>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default AppFrame;
