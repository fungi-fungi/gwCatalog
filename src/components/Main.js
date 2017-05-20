'use strict';

import React from 'react'
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper'

import AppMainBar from './AppMainBar'

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
            <AppMainBar />
            <Grid container direction="column" align="center">
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={6}>
                    asdasd sdfsdfsdf sdfsdfsd dsfsdfsd dsfsdf
                  </Grid>
                  <Grid item xs={6}>
                    {children}
                  </Grid>
                </Grid>

              </Grid>
            </Grid>
          </div>

        </MuiThemeProvider>
      </div>
    );
  }
}


export default AppComponent;
