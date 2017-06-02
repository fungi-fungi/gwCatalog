'use strict';

import React from 'react';

import Grid from 'material-ui/Grid';

import styles from '../styles/AppFrame.css'

/**
 * AppFrame component
 */

class AppFrame extends React.Component {
  render() {

    const { appDetails, searchBar } = this.props;

    return (
      <Grid container className={styles.appFrame}>

        <Grid item xs={12} lg={12}>
            <Grid container gutter={40} direction="column">

              <Grid item>
                <Grid container>
                  <Grid item md={3}></Grid>
                  <Grid item md={6} xs={12}>
                    { searchBar }
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container>
                  <Grid item md={3}></Grid>
                  <Grid item md={6} xs={12}>
                    { appDetails }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

        </Grid>

      </Grid>
    );
  }
}

export default AppFrame;
