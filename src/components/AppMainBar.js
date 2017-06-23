'use strict';

import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ArrowBack from 'material-ui-icons/ArrowBack';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';

import SearchBox from './SearchBox';

import styles from '../styles/AppMainBar.css'

class AppMainBar extends React.Component {

  constructor() {
    super();

    this.state = {
      value: '',
      selectedProduct: { name: '' },
      suggestions: [],
      suggestionsTotal: 0,
      isSuggestionsLoading: false,
      isProductSelected: false,
      isAutoSuggestOn: true
    };

  }

  test = () => {}

  render() {

    const { value,
            suggestions,
            suggestionsTotal,
            selectedProduct,
            isSuggestionsLoading,
            isAutoSuggestOn
          } = this.state;

    return (
      <AppBar className={styles.appBar}>
        <Toolbar>
          <Grid container>

          <Hidden only={['sm', 'xs']}>
            <Grid item md={3} >
              <Grid container>
                <Grid item>
                  <IconButton contrast>
                    <Link to="/home">
                      <ArrowBack />
                    </Link>
                  </IconButton>
                </Grid>

                <Grid item>
                  <IconButton contrast>
                    <Link to="/categories/1/children">
                      <MenuIcon />
                    </Link>
                  </IconButton>
                </Grid>

                <Grid item className={styles.alignTextCenter}>
                  <Typography type="title" colorInherit>Gateway</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>

          <Grid item xs={12} sm={12} md={6}>
            <SearchBox
              autoSuggest={ isAutoSuggestOn }
              isLoading={ isSuggestionsLoading }
              value={ value }
              suggestions={ suggestions }
              suggestionsTotal={ suggestionsTotal }
              onInputChange={ this.test  }
              onSuggestionsFetchRequested={ this.test }
              onSuggestionSelected={ this.test }
              onSuggestionsClearRequested={ this.test }
            />
          </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default AppMainBar;
