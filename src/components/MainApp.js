'use strict';

import React from 'react'

import SearchResults from './SearchResults'
import Details from './Details'

import Grid from 'material-ui/Grid';

import styles from '../styles/MainApp.css'

class MainApp extends React.Component {

  render() {

    return (

      <div className={styles.main}>
        <Grid container>
          <Grid item xs={0} sm={3} />
          <Grid item xs={12} sm={6}>
            <SearchResults />
          </Grid>
        </Grid>
        <Details />
      </div>
    );
  }
}

export default MainApp;
