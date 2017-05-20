'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import styles from '../styles/AppMainBar.css'

class AppMainBar extends React.Component {

  render() {

    return (
      <div className={styles.root}>
        <AppBar className={styles.appBar}>
          <Toolbar>
            <Typography type="title" colorInherit>Gateway</Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default AppMainBar;
