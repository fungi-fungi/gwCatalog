'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import styles from '../styles/AppMainBar.css'

class AppMainBar extends React.Component {

  render() {

    return (
      <AppBar className={styles.appBar}>
        <Toolbar>
          <Typography type="title" colorInherit>Gateway</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default AppMainBar;
