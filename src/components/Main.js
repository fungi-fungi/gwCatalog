'use strict';

import React from 'react'
import { MuiThemeProvider } from 'material-ui/styles';

import AppMainBar from './AppMainBar';
import AppFrame from './AppFrame';

import styles from '../styles/Main.css'


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
            <AppMainBar />
            <AppFrame> {children} </AppFrame>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default AppComponent;
