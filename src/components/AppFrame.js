'use strict';

import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper'

import styles from '../styles/AppFrame.css'

/**
 * AppFrame component
 */

class AppFrame extends React.Component {
  render() {

    const { content } = this.props;

    return (
      <Grid container direction="column" align="center" className={styles.appFrame}>
        <Grid item xs={10}>
          <Grid container>
            <Grid item xs={6}>
              asdasd sdfsdfsdf sdfsdfsd dsfsdfsd dsfsdf
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
