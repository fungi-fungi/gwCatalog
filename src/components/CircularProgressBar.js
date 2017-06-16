'use strict';

import React from 'react'

import { CircularProgress } from 'material-ui/Progress';

import styles from '../styles/CircularProgressBar.css'

class CircularProgressBar extends React.Component {
  render() {
    return (
      <div className={styles.center}>
        <CircularProgress />
      </div>
    );

  }
}

export default CircularProgressBar;
