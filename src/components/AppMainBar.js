'use strict';

import React from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ArrowBack from 'material-ui-icons/ArrowBack';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';

import SearchBox from './SearchBox';
import AppDrawer from './AppDrawer';

import styles from '../styles/AppMainBar.css'

class AppMainBar extends React.Component {

  constructor() {
    super();

    this.state = {
      isOpen: true
    }
  }

  handleClose = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {

    const { pathname } = this.props.location;
    const { isAuthenticated } = this.props.auth;

    return (
      <AppBar className={styles.appBar}>
        <Toolbar>
          <Grid container>

          <Hidden only={['sm', 'xs']}>
            <Grid item md={3} >
              <Grid container>

                <Grid item>
                  { pathname == '/home' ? (
                      <IconButton contrast onClick={ () => this.handleClose() }>
                        <MenuIcon />
                      </IconButton>
                  ) : (
                      <IconButton contrast onClick={ () => this.props.history.goBack() }>
                          <ArrowBack />
                      </IconButton>
                  )}
                </Grid>

                <Grid item className={styles.alignTextCenter}>
                  <Typography type="title" colorInherit>Gateway</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>

          <Grid item xs={12} sm={12} md={6}>
             { pathname == '/home' && <SearchBox /> }
          </Grid>
        </Grid>
        </Toolbar>

        {
          isAuthenticated() && (
            <AppDrawer {...this.props} isOpen={this.state.isOpen} handleClose={this.handleClose} />
          )
        }

      </AppBar>
    );
  }
}

export default AppMainBar;
