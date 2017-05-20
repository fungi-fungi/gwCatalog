'use strict';

import React, { PropTypes as T } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

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
          <div>
            <AppBar
              title="Gateway"
              iconElementLeft={<div/>}
            />
            {children}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}


export default AppComponent;
