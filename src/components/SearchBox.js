'use strict';

import React from 'react';

import SearchIcon from 'material-ui-icons/Search';
import Paper from 'material-ui/Paper';
import { CircularProgress } from 'material-ui/Progress';

import ProductStore from '../stores/ProductStore';
import SearchBoxActions from '../actions/SearchBoxActions';
import ProductActions from '../actions/ProductActions';

import styles from '../styles/SearchBox.css'

/**
 * SearchBox component
 */

class SearchBox extends React.Component {

  constructor() {
    super();

    this.state = {
      searchPhrase: '',
      isLoading: false
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    ProductStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    ProductStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      searchPhrase: ProductStore.getSearchPhrase(),
      isLoading: ProductStore.getIsSuggestionsLoading()
    });
  }

  handleChange(event) {
    SearchBoxActions.setSearchPhrase(event.target.value);
    ProductActions.startSearch(event.target.value);
    window.scrollTo(0, 0);
  }

  render() {
    const { searchPhrase, isLoading } = this.state;

    return (
      <Paper className={styles.mainContainer}>
        <SearchIcon />
        <input value={searchPhrase} onChange={ this.handleChange } placeholder="Type name of id" />
        <div className={styles.loadingContainer}>
        { isLoading ? (
          <CircularProgress size={20} />
        ) : (
          <div className={styles.loadingPlaceholder}></div>
        )}
        </div>
      </Paper>
    );
  }
}

export default SearchBox;
