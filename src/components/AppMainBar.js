'use strict';

import React from 'react';
import { browserHistory } from 'react-router';
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

    const { path } = this.props;

    return (
      <AppBar className={styles.appBar}>
        <Toolbar>
          <Grid container>

          <Hidden only={['sm', 'xs']}>
            <Grid item md={3} >
              <Grid container>

                <Grid item>
                  { path == '/home' ? (
                      <IconButton contrast onClick={ () => this.handleClose() }>
                        <MenuIcon />
                      </IconButton>
                  ) : (
                      <IconButton contrast onClick={ () => browserHistory.goBack() }>
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
             { path == '/home' && <SearchBox /> }
          </Grid>
        </Grid>
        </Toolbar>
        <AppDrawer isOpen={this.state.isOpen} handleClose={this.handleClose} />
      </AppBar>
    );
  }
}

export default AppMainBar;
